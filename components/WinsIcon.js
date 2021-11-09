import React from "react";
import AccountIcon from "./AccountIcon";
import cn from "classnames";
import HomeIcon from "./HomeIcon";

const WinsIcon = (props) => {
  return (
    <div className={cn(`w-${props.width} h-${props.height} `, props.color)}>
      <div className={cn(" text-xs text-center font-bold")}>
        <div className={cn("")}>{props.icon}</div>
 
        <div className={cn("pt-2")}>{props.title}</div>
      </div>
    </div>
  );
};

export default WinsIcon;
