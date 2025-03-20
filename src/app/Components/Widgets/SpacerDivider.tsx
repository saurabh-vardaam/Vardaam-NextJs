import React from "react"

const SpacerDivider = (
{data: { width, align, marginTopAndBottom, type },sectionType,}: any // eslint-disable-line @typescript-eslint/no-explicit-any
) => {
  let justify = ""
  switch (align) {
    case "left":
      justify = "justify-left"
      break
    case "right":
      justify = "justify-right"
      break
    default:
      justify = "justify-center"
      break
  }

  return (
    <div
      style={{
        marginTop: `${marginTopAndBottom}px`,
        marginBottom: `${marginTopAndBottom}px`,
      }}
      className={`w-full flex ${justify} items-center`}
    >
      {type && type === "divider" ? (
        <span
          className={`${
            sectionType === "inverted" ? "bg-slate-400" : "bg-yellow-500"
          } ${width === "short" ? "w-36" : "w-full"} mt-2 pt-[2px]`}
        ></span>
      ) : (
        <></>
      )}
    </div>
  )
}

export default SpacerDivider
