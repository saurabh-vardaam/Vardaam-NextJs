import React from "react";
import parse from "html-react-parser";
import { Widget } from "src/components/types";

const TextArea = ({ data: { paragraph, fontSize } } : Widget) => {
  return (
    <div className={`text-${fontSize}`}>
      <div className="[&>p]:pt-6 [&>p]:leading-7">{parse(paragraph ?? "")}</div>
    </div>
  );
};

export default TextArea;
