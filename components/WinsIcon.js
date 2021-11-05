import React from "react";
import AccountIcon from "./AccountIcon";
import cn from "classnames";
import HomeIcon from "./HomeIcon";

const WinsIcon = (props) => {
  return (
    <div
      className={cn(
        `mt-9
     text-center font-bold w-${props.width}`,
        ` h-${props.height}`,
        props.color
      )}
    >
      <div>{props.icon}</div> <div className={cn("")}>{props.title}</div>
    </div>
  );
};

export default WinsIcon;
