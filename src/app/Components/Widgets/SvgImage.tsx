import React from "react"
import Image from "next/image"
import { Widget } from "src/components/types";

const SvgImage = ({data}: Widget) => {

  console.log("Images Component Mounted with data:", data);

  if (!data) {
    return <p style={{ color: "red" }}>No Data Passed to Images Component</p>;
  }

  return (
    <Image src={data.url ?? ""} width={data.width as number | `${number}` | undefined} height={data.height as number | `${number}` | undefined} alt={data.alt || "Image"}/>
  )
}

export default SvgImage
