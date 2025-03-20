'use client'

import { ReactNode, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

type ScrollToTopProps = {
  showUnder?: number;
  style?: React.CSSProperties | undefined;
  children?: ReactNode;
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showUnder = 160, style, children }: ScrollToTopProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showUnder) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showUnder]);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuart" });
  };

  return (
    <>
      {visible && (
        <div
          style={style}
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 cursor-pointer"
        >
          {children ? (
            children
          ) : (
            <div className="p-3 rounded-lg group border-2 border-y-amber-400 hover:bg-base-YEL100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-base-YEL100 group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
