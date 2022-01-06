import React from "react";
import cn from "classnames";

function ShadovBox(props) {
  return (
    <div className={cn("shadow-2xl rounded-lg border-2 bg-white")}>
      {props.children}
    </div>
  );
}

export default ShadovBox;
