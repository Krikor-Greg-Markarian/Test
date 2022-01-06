import React from "react";
import cn from "classnames";
import Button from "./Button";

function BoxWithButton(props) {
  return (
    <div>
      <div className={cn("bg-gray-100")}>
        <div className={cn("text-center")}>why</div>
        <div className={cn("text-green-300 text-center text-xl font-bold")}>
          mirsad
        </div>

        <div className={cn("relative")}>
          <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}></div>

          <div className={cn("flex justify-center items-center")}>
            <div className={cn("absolute -bottom-4")}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxWithButton;
