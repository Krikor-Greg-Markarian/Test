import React from "react";
import cn from "classnames";
import Button from "./Button";

function WelcomeSignUp(props) {
  return (
    <div>
      <div className={cn("bg-gray-100")}>
        <div className={cn("text-center text-2xl")}>{props.greetings}</div>
        <div className={cn("text-green-300 text-center text-xl font-bold")}>
          {props.futureAgent}
        </div>

        <div className={cn("relative")}>
          <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}>
            <div className={cn("pb-3.5")}>
              <p className={cn("text-sm text-center font-bold")}>
                {props.signUp}
              </p>
              <p className={cn("text-sm text-center text-gray-500")}>
                {props.description}
              </p>
            </div>
            <div className={cn("pt-2 pb-2 flex justify-center items-center")}>
              <input
                placeholder='Phone number'
                className={cn(
                  "w-full rounded-xl p-1.5 border-2 border-gray-100"
                )}
                type='text'
                name=''
                id=''
              />
            </div>
            <div className={cn("pt-2 pb-2 flex justify-center items-center")}>
              <input
                placeholder='password'
                className={cn(
                  "w-full rounded-xl p-1.5 border-2 border-gray-100"
                )}
                type='text'
                name=''
                id=''
              />
            </div>
          </div>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("absolute -bottom-4")}>
              <Button buttonName={props.buttonName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSignUp;
