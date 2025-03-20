import React from "react"
import parse from "html-react-parser"

interface HeadingProps {
    data: {
      headingLevel: string;
      heading: string;
      alignment: string;
      fontSize: string;
      lineHeight: string;
    };
  }
  
  const Heading: React.FC<HeadingProps> = ({
    data: {
      headingLevel,
      heading,
      alignment,
      fontSize,
      lineHeight
    },
  }) => {
  const Tagname = headingLevel as React.ElementType;

  return (
    <Tagname
      className={`font-OpenSans font-semibold ${
        alignment === "center"
          ? "text-center"
          : alignment === "left"
          ? "text-left"
          : "text-right"
      } text-${fontSize} text-[#0C1B57] ${lineHeight}`}
      style={{paddingBottom: `${lineHeight}px`}}
    >
      {parse(heading)}
    </Tagname>
  )
}

export default Heading
