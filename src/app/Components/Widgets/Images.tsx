'use client'

import React from "react"
import Image from "next/image";
import { Widget } from "src/components/types";

const Images = ({ data }: Widget) => {

  if (!data) {
    return <p style={{ color: "red" }}>No Data Passed to Images Component</p>;
  }

  return (
    <Image src={data.image ?? ""} width={data.width as number | `${number}` | undefined} height={data.height as number | `${number}` | undefined} alt={data.alt || "Image"} className="rounded-lg"/>
  )
}

export default Images

