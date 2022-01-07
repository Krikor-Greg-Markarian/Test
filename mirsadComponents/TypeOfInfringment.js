import React from "react";
import cn from "classnames";

function TypeOfInfringment(props) {
  return (
    <div className={cn("bg-white rounded-xl p-6")}>
      <div className={cn("grid grid-cols-2")}>
        <div className={cn("col-span-1")}>
          <p className={cn("text-gray-400 text-xs")}>{props.title}</p>
          <p className={cn("font-bold")}>{props.description}</p>
        </div>
        <div className={cn("col-span-1")}>
          <p className={cn("text-gray-400 text-xs")}>{props.subTitle}</p>
          <p className={cn("font-bold")}>{props.subDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default TypeOfInfringment;
