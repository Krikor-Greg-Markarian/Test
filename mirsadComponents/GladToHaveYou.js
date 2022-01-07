import React from "react";
import cn from "classnames";
import SvgrCircleNumb from "./SvgrCircleNumb";
import SvgrAttach from "./SvgrAttach";
import Button from "./Button";

function GladToHaveYou(props) {
  return (
    <div className={cn("bg-gray-100")}>
      <div className={cn("text-center text-2xl")}>{props.glad} </div>
      <div className={cn("text-green-300 text-center text-xl font-bold")}>
        {props.you}
        <span className={cn("text-black font-normal")}>{props.here}</span>
      </div>
      <div className={cn("flex justify-center items-center pt-8 pb-8")}>
        <SvgrCircleNumb />
      </div>
      <div className={cn("relative")}>
        <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}>
          <div className={cn("pb-3.5")}>
            <p className={cn("text-sm text-center font-bold")}>{props.title}</p>
          </div>
          <div className={cn("pt-2 pb-2 flex justify-center items-center")}>
            <input
              placeholder='full name'
              className={cn("w-full rounded-xl p-1.5 border-2 border-gray-100")}
              type='text'
              name=''
              id=''
            />
          </div>
          <div className={cn("pt-2 pb-2 flex justify-center items-center")}>
            <input
              placeholder='email'
              className={cn("w-full rounded-xl p-1.5 border-2 border-gray-100")}
              type='text'
              name=''
              id=''
            />
          </div>

          <form action=''>
            <select
              className={cn(
                "w-full rounded-xl p-2 bg-white border-2 text-gray-400 border-gray-100"
              )}
              name=''
              id=''
            >
              <option value=''>choose the location of the quiz</option>
            </select>
          </form>
          <form className={cn("pt-2 pb-2")} action=''>
            <select
              className={cn(
                "w-full rounded-xl p-2 bg-white border-2 text-gray-400 border-gray-100"
              )}
              name=''
              id=''
            >
              <option value=''>choose the category</option>
            </select>
          </form>
          <div className={cn("flex mt-2")}>
            <div className={cn("flex-shrink-0 mt-1")}>
              <SvgrAttach />
            </div>
            <div className={cn("flex-shrink-0 ml-2")}>
              <p>{props.attachImage}</p>
            </div>
          </div>
          <div className={cn("flex mt-2")}>
            <div className={cn("flex-shrink-0 mt-1")}>
              <SvgrAttach />
            </div>
            <div className={cn("flex-shrink-0 ml-2")}>
              <p>{props.attachRecord}</p>
            </div>
          </div>
          <div className={cn("flex mt-2")}>
            <div className={cn("flex-shrink-0 mt-1")}>
              <SvgrAttach />
            </div>
            <div className={cn("flex-shrink-0 ml-2")}>
              <p>{props.attachConduct}</p>
            </div>
          </div>
        </div>
        <div className={cn("flex justify-center items-center")}>
          <div className={cn("absolute -bottom-4")}>
            <Button buttonName={props.buttonName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GladToHaveYou;
