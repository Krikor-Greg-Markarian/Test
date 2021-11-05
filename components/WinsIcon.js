import React from "react";
import AccountIcon from "./AccountIcon";
import cn from "classnames";
import HomeIcon from "./HomeIcon";

const WinsIcon = (props) => {
  return (
    <div className={cn(`w-${props.width} h-${props.height} `, props.color)}>
      <div className={cn("mt-10 text-center font-bold")}>
        {props.icon}
        {props.title}
      </div>
    </div>
  );
};

export default WinsIcon;
