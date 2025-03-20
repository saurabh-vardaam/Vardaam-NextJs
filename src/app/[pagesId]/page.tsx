import { Column, Content, Row, VdataData, Widget } from "src/components/types";
import Layout from "../Components/layout";
import * as Widgets from "../Components/Widgets/Index"
import SpacerDivider from "../Components/Widgets/SpacerDivider";

export async function generateStaticParams() {
  const data = await fetch(`https://vardaam-site-backend.test/pages`, {
    headers: {
      'Cache-Control': 'no-store'
    },
    next: { revalidate: 0 }, 
  });
  const pages: { data: VdataData[] } = await data.json();

  return pages.data?.map((mdata) => ({
    pagesId: mdata.id,
  }));
}

type Params = Promise<{ pagesId?: string }>;

function getWidgetName(type: string) {
    return type;
}
  
function getSectionName(type: string) {
    return type;
}

export default async function SinglePage({ params }: { params: Params }) {
  const newParams = await params;
  const data = await fetch(
    `https://vardaam-site-backend.test/pages/${newParams.pagesId}`, {
        headers: {
          'Cache-Control': 'no-store' 
        },
        next: { revalidate: 0 }, 
      }
  );
  const pages: { data: VdataData } = await data.json();
  const scrollReveal = false;

  return (
    <>
        <Layout>
        {pages.data.content &&
            pages.data.content.map((datas: Content, index: number) => {
            const bgImage = datas.data.background_image;

            let sectionType = "";
            switch (datas.data.sectionType) {
                case "inverted":
                sectionType = "bg-blue-200 text-base text-slate-400 inverted";
                break;
                case "secondary":
                sectionType = "bg-[#f5f5f5]";
                break;
                default:
                sectionType = bgImage ? "" : "bg-white";
                break;
            }

            const backgroundImageStyle = {
                backgroundImage: bgImage || undefined,
                backgroundPosition:
                datas.data.background_image_position || undefined,
                backgroundRepeat: datas.data.background_repeat || undefined,
                backgroundColor: datas.data.bg_colour || undefined,
            };

            switch (getSectionName(datas.type)) {
                case "SpacerDivider":
                return (
                    <SpacerDivider
                    key={`section_${index}`}
                    data={datas}
                    ></SpacerDivider>
                    // <></>
                );

                case "PageTemplate":
                return (
                    <span key={`section_${index}`}></span>
                );

                default:
                return bgImage ? (
                    <section style={backgroundImageStyle} key={index}>
                    <section
                        key={`section_${index}`}
                        className={`${sectionType}`}
                    >
                        <SectionContent datas={datas} scrollReveal={scrollReveal} />
                    </section>
                    </section>
                ) : (
                    <section key={`section_${index}`} className={`${sectionType}`}>
                    <SectionContent datas={datas} scrollReveal={scrollReveal} />
                    </section>
                );
            }
            })}
            </Layout>
        </>
  );
}

type MySection = {
  datas: Content,
  scrollReveal: boolean
}

const SectionContent = ({datas, scrollReveal}: MySection) => {
  let sectionSpacing = "px-8 py-12 md:py-16 space-y-5 md:space-y-16"
  let colSpacing = "gap-y-10"
  switch (datas.data.sectionVerticalSpacing) {
    case "Spacious":
      sectionSpacing = "px-6 md:py-28 space-y-20"
      colSpacing = "gap-y-10"
      break
    case "Condensed":
      sectionSpacing = "p-6 md:py-14 space-y-5 md:space-y-12"
      colSpacing = "gap-y-10"
      break
    case "None":
      sectionSpacing = "py-0 space-y-0 max-md:px-6"
      colSpacing = "gap-y-0"
      break
    default:
      sectionSpacing = "px-8 py-12 md:py-16 space-y-5 md:space-y-16"
      colSpacing = "gap-y-10"
      break
  }

  return(
    <div
      className={`mx-auto ${sectionSpacing} ${
        datas.data.containerWidth === "narrow" ? "max-w-8xl xl:max-w-7xl" : ""
      }
      `}
    >
      {datas.data.rows.map((row: Row, index: number) => {
          const attributes : {
            key: string
            className: string
            [key: string]: string
          }=
          {
            key: `row_${index}`,
            className: `flex flex-wrap ${
            row.reverseColumnForMobile == "yes" ? "max-sm:flex-col-reverse" : ""
            } ${row.alignItems} ${row.justifyContent} max-w-2xl  ${colSpacing} sm:mx-auto lg:-mx-8 lg:max-w-none xl:mx-0`,
          }

          if (scrollReveal) {
            attributes["data-sal"] = "slide-up"
            attributes["data-sal-delay"] = "100"
            attributes["data-sal-easing"] = "ease"
          }

          return (
            <div 
            {...attributes} 
            key={index}
            >
              {row.column?.map((col: Column, index: number) => {
                  const text_align =
                    col.align === "center"
                      ? "text-center"
                      : col.align === "left"
                        ? "text-left"
                        : "text-right"

                  return (
                    <div
                      key={`col_${index}`}
                      className={`${col.width} md:px-4 ${text_align}`}
                    >
             
                    {col.widget &&
                        col.widget.map((widget: Widget, index: number) => {
                          const WidgetComponent =
                            Widgets[getWidgetName(widget.type) as keyof typeof Widgets]
                          return (WidgetComponent &&
                            <WidgetComponent
                              key={`widget_${index}`}
                              data={widget.data}
                              align={col.align}
                              src={widget.data.url}
                            ></WidgetComponent>
                          )
                        })}
                    </div>
                  )
                })}
            </div>
          )
      })}
    </div>
  )
}
