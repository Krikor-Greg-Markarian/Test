import React from "react";
import cn from "classnames";
import SvgrIlligalParking from "../svgrMirsad/SvgrIlligalParking";
function IlligalParking(props) {
  return (
    <div className={cn("bg-white p-6 rounded-xl")}>
      <div className={cn("flex")}>
        <div className={cn("flex-shrink-0")}>
          <SvgrIlligalParking />
        </div>
        <div className={cn("flex-shrink-0 ml-4 mt-2")}>
          <p className={cn("text-sm font-bold")}>{props.title}</p>
          <p className={cn("text-xs text-gray-500")}>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default IlligalParking;
