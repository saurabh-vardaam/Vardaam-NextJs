"use client";
import dynamic from "next/dynamic";
import * as Widgets from "./Widgets/Index"
import {SpacerDivider} from "./Widgets/Index";
import { useEffect, useState } from "react";
import { Column, Content, Row, VdataData, Widget } from "src/components/types"

function getWidgetName(type: string) {
  return type;
}

function getSectionName(type: string) {
  return type;
}

const PageContent = ({page, scrollReveal}:{page: {data: VdataData}, scrollReveal: false}) => {

  console.log(page)
  return(
    <>
      {page.data.content &&
        page.data.content.map((datas: Content, index: number) => {
          const bgImage = datas.data.background_image;

        // // switch (getSectionName(section.fieldGroupName)) {
        // //   interface ContentData {
        // //     rows: Row[];
        // //     Margin: string;
        // //     padding: string;
        // //     bg_colour: string;
        // //     // ...other properties
        // //   }
        //   default:
        // // const defaultContentData: ContentData = {
        // //   rows: [],
        // //   Margin: "0",
        // //   padding: "0",
        // //   bg_colour: "transparent",
        // // };
          let sectionType = ""
          switch (datas.data.sectionType) {
            case "inverted":
              sectionType = "bg-blue-200 text-base text-slate-400 inverted"
              break
            case "secondary":
              sectionType = "bg-[#f5f5f5]"
              break
            default:
              sectionType = bgImage ? "" : "bg-white"
              break
          }

          const backgroundImageStyle = {
              backgroundImage: bgImage || undefined,
              backgroundPosition: datas.data.background_image_position || undefined,
              backgroundRepeat: datas.data.background_repeat || undefined,
              backgroundColor: datas.data.bg_colour || undefined,
          }

          switch (getSectionName(datas.type)) {
            case "SpacerDivider":
              return (
                <SpacerDivider
                  key={`section_${index}`}
                  data={datas}
                ></SpacerDivider>
              )

            case "PageTemplate":
              return (
              // datas?.data && datas?.data?.template ? (
              //   <PageContent key={`section_${index}`} page={datas?.data?.template} scrollReveal={scrollReveal} />
              // ) : 
              // (
                <span key={`section_${index}`}></span>
              )

            default:
              return bgImage ? (
                <section style={backgroundImageStyle} key={index}>
                  <section key={`section_${index}`} className={`${sectionType}`}>
                    <SectionContent
                      datas={datas}
                      scrollReveal={scrollReveal}
                    />
                  </section>
                </section>
              ) : (
                <section key={`section_${index}`} className={`${sectionType}`}>
                    <SectionContent
                      datas={datas}
                      scrollReveal={scrollReveal}
                    />
                </section>
              )
          }
          
      })}
    </>
  )
}

type MySection = {
  datas: Content,
  scrollReveal: boolean
}

const SectionContent = ({datas, scrollReveal}: MySection) => {
  let sectionSpacing = "px-8 py-12 md:py-16 space-y-5 md:space-y-16"
  let colSpacing = "gap-y-10"
  // console.log(datas.data.rows)
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

          // console.log(row.column)
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

                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const [colWidth, setColWidth] = useState("w-full");

                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  useEffect(() => {
                    const handleResize = () => {
                      if (window.innerWidth >= 1024 && col.width) {
                        setColWidth(col.width);
                      } else {
                        setColWidth("w-full");
                      }
                    };

                    handleResize();
                    window.addEventListener("resize", handleResize);

                    return () => window.removeEventListener("resize", handleResize);
                  }, [col.width]);

                  return (
                    <div
                      key={`col_${index}`}
                      className={`${colWidth} md:px-4 ${text_align}`}
                    >
             
                    {col.widget &&
                        col.widget.map((widget: Widget, index: number) => {
                          // console.log(widget,getWidgetName(widget.fieldGroupName))
                          console.log(widget.data);
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


export default dynamic(() => Promise.resolve(PageContent), { ssr: false });