import React from "react";
import cn from "classnames";

function Skip(props) {
  return (
    <div
      className={cn(
        "underline flex justify-center items-center pt-6 cursor-pointer"
      )}
    >
      {props.name}
    </div>
  );
}

export default Skip;
