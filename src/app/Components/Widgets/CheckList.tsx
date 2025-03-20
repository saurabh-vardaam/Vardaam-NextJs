import React from "react"
import DoubleTick from "../Icons/DoubleTick"

interface ChecklistItem {
  label: string;
}

interface ChecklistProps {
  data: {
    options: ChecklistItem[];
    columnCount: number;
  };
}

const CheckList: React.FC<ChecklistProps> = ({ data}) => {

  return (
    <ul className={`space-y-2 py-3 mt-2 md:columns-${data.columnCount}`}> 
      {data.options.map((item, index) => (
        <li key={`checklist_${index}`} className="flex space-x-3 leading-7">
          <DoubleTick className="h-5 w-5 basis-5 shrink-0 grow-0 top-0.5 relative text-base-YEL100" />
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  )
}

export default CheckList
