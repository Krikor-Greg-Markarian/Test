import React from "react";
import cn from "classnames";

function DescriptionBoxWhite(props) {
  return (
    <div className={cn("bg-white p-8 rounded-xl")}>
      <p className={cn("text-gray-400 text-sm")}>{props.title}</p>
      <p className={cn("font-bold")}>
        {props.description}
        
      </p>
    </div>
  );
}

export default DescriptionBoxWhite;
