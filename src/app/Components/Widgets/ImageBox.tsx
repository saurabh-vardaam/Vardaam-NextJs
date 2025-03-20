import React from "react"
import Link from "./NextLink"
import Image from "next/image"
import { Widget } from "src/components/types"

const ImageBox = ({
  data: {
    image,
    title,
    link,
    linkText,
    description,
  },
}: Widget) => {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="group relative">
          <Link href={link ?? ""}>
            
            <Image src={image ?? ""} width={0} height={0} sizes="100vw" alt="culture images" className="rounded-t-lg h-60 w-full" />

            <div className="flex absolute w-full h-full items-center justify-center top-0 rounded-lg hover:bg-black/50">
              <label className="invisible group-hover:visible inline-flex justify-center items-center rounded text-sm py-2 px-8 bg-transparent text-white border border-2	font-semibold border-gray-200">
                {linkText}
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </label>
            </div>
          </Link>
        </div>
        <div className="p-5">
          <Link href={link ?? ""}>
            <h5 className="mb-0 text-2xl font-OpenSans font-medium tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          {description && (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default ImageBox
