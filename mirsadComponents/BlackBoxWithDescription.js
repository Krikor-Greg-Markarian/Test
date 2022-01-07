import React from "react";
import cn from "classnames";
function BlackBoxWithDescription(props) {
  return (
    <div>
      <div
        className={cn("border-2 border-green-200 rounded-xl p-4 w-60 bg-black")}
      >
        <div className={cn("text-2xl text-green-400")}>{props.title}</div>
        <div className={cn("text-xs text-white")}>{props.description}</div>
      </div>
    </div>
  );
}

export default BlackBoxWithDescription;
