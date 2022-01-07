import React from "react";
import cn from "classnames";

function BoxWithDiscriptions(props) {
  return (
    <div>
      <div className={cn("border-2 border-green-200 rounded-xl p-4 w-60")}>
        <div className={cn("text-2xl")}>{props.title}</div>
        <div className={cn("text-xs")}>{props.description}</div>
      </div>
    </div>
  );
}

export default BoxWithDiscriptions;
