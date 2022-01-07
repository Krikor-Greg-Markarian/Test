import React from "react";
import cn from "classnames";
import SvgrMailBox from "../svgrMirsad/SvgrMailBox";
import Button from "./Button";
function Mailbox(props) {
  return (
    <div>
      <div className={cn("bg-gray-100")}>
        <div className={cn("pb-24")}>
          <div className={cn("text-center text-2xl")}>
           {props.mailBox}
          </div>
          <div className={cn("text-green-300 text-center text-xl font-bold")}>
            {props.notification}
          </div>
        </div>
        <div className={cn("relative")}>
          <div className={cn("bg-white p-4 rounded-lg pt-40 pb-40")}>
            <div className={cn("pb-3.5")}>
              <p className={cn("text-sm text-center font-bold pt-8")}>
               {props.checkMailBox}
              </p>
              <p className={cn("text-xs p-4 text-gray-400")}>
                
                {props.description}
              </p>
            </div>
          </div>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("absolute -bottom-4")}>
              <Button buttonName={props.buttonName} />
            </div>
          </div>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("absolute -top-12 ")}>
              <SvgrMailBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mailbox;
