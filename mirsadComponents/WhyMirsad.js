import React from "react";
import cn from "classnames";
function WhyMirsad(props) {
  return (
    <div className={cn("bg-gray-100")}>
      <div className={cn("text-center")}>{props.why}</div>
      <div className={cn("text-green-300 text-center text-xl font-bold")}>
        {props.mirsad}
      </div>

      <div className={cn("relative")}>
        <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}>
          <p className={cn("text-sm")}>{props.description}</p>
        </div>
        <div className={cn("absolute -top-16")}></div>
      </div>
    </div>
  );
}

export default WhyMirsad;
