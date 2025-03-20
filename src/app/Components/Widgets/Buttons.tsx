import React from "react";
import Link from "./NextLink";
import { URL } from "src/components/types";

type ButtonProps = {
  data: {
    urls?: URL[];
  };
  className?: "";
  align?: string;
  src?: string;
};

const Buttons = ({ data: {urls = []}, className = "", align="left" }: ButtonProps) => {
    const justify =
    align === "center"
      ? "justify-center"
      : align === "left"
      ? "justify-start"
      : "justify-end";
  return (
    <div className={`${className} flex flex-wrap gap-4 ${justify}`}>
      {urls.map((button, index) =>
        button.type === "Primary" ? (
          <Link
            key={`button_${index}`}
            href={button.url}
            className="inline-flex justify-center rounded font-medium py-2 px-8 bg-base-BLU200 text-white hover:text-base-BLA200 hover:bg-white hover:ring-1 hover:ring-base-YEL100 transition duration-300"
          >
            {button.title}
          </Link>
        ) : button.type === "Borderless" ? (
          <Link
            key={`button_${index}`}
            href={button.url}
            className="group font-medium text-[#071485] capitalize relative"
          >
            {button.title}
            <div className="border-b pb-2 group-hover:pb-3 transition-all border-base-YEL100 absolute w-full"></div>
          </Link>
        ) : (
          <Link
            key={`button_${index}`}
            href={button.url}
            className="inline-flex justify-center rounded py-2 px-8 bg-white ring-1 ring-base-BLA200 hover:ring-[#071485] hover:bg-[#071485] hover:text-white transition duration-300"
          >
            {button.title}
          </Link>
        )
      )}
    </div>
  );
};

export default Buttons;
