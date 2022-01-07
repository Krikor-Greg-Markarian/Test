import React from "react";
import cn from "classnames";
import SvgrCamera from "../svgrMirsad/SvgrCamera";
import SvgrFile from "../svgrMirsad/SvgrFile";
import SvgrSubmit from "../svgrMirsad/SvgrSubmit";

function AttachIconWithDescription(props) {
  return (
    <div>
      <div className={cn("bg-gray-100")}>
        <div className={cn("text-center")}>{props.how}</div>
        <div className={cn("text-green-300 text-center text-xl font-bold")}>
          {props.itworks}
        </div>

        <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}>
          <div className={cn("flex")}>
            <div className={cn("flex-shrink cursor-pointer")}>
              <SvgrCamera />
            </div>
            <div className={cn("flex-shrink")}>
              <p className={cn("text-center ml-2")}>
                {props.pictureDiscription}
              </p>
            </div>
          </div>
          <div className={cn("flex mt-4")}>
            <div className={cn("flex-shrink cursor-pointer")}>
              <SvgrFile />
            </div>
            <div className={cn("flex-shrink")}>
              <p className={cn("text-center ml-2")}>
                {props.reportDiscription}
              </p>
            </div>
          </div>
          <div className={cn("flex mt-4")}>
            <div className={cn("flex-shrink cursor-pointer")}>
              <SvgrSubmit />
            </div>
            <div className={cn("flex-shrink")}>
              <p className={cn("text-center ml-2")}>
                {props.submitDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttachIconWithDescription;
