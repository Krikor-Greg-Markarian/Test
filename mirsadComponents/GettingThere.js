import React from "react";
import cn from "classnames";
import Button from "./Button";
import SvgrGettingthere from "../svgrMirsad/SvgrGettingthere";
import Skip from "./Skip";

function GettingThere(props) {
  return (
    <div>
      <div className={cn("bg-gray-100")}>
        <div className={cn("text-center")}>{props.getting}</div>
        <div className={cn("text-green-300 text-center text-xl font-bold")}>
          there{props.there}
        </div>

        <div className={cn("relative")}>
          <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}>
            <p className={cn("font-bold text-center")}>{props.title}</p>
            <p className={cn("text-center text-sm text-gray-400")}>
              {props.description}
            </p>
          </div>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("absolute -bottom-4")}>
              <Button buttonName={props.buttonName} />
            </div>
            <div className='absolute top-0'>
              <SvgrGettingthere />
            </div>
          </div>
        </div>
      </div>
      <Skip name={props.name} />
    </div>
  );
}

export default GettingThere;
