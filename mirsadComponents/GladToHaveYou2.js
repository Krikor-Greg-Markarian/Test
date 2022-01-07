import React from "react";
import cn from "classnames";
import SvgrCircleNumb2 from "../mirsadComponents/SvgrCircleNumb";
import Button from "./Button";

function GladToHaveYou2(props) {
  return (
    <div className={cn("bg-gray-100")}>
      <div className={cn("text-center text-2xl")}>{props.glad} </div>
      <div className={cn("text-green-300 text-center text-xl font-bold")}>
        {props.you}{" "}
        <span className={cn("text-black font-normal")}>{props.here}</span>
      </div>
      <div className={cn("flex justify-center items-center pt-8 pb-8")}>
        <SvgrCircleNumb2 />
      </div>
      <div className={cn("relative")}>
        <div className={cn("bg-white p-4 rounded-lg pt-20 pb-20")}>
          <div className={cn("pb-3.5")}>
            <p className={cn("text-sm text-center font-bold")}>{props.title}</p>
          </div>

          <form action=''>
            <select
              className={cn(
                "w-full rounded-xl p-2 bg-white border-2 text-gray-400 border-gray-100"
              )}
              name=''
              id=''
            >
              <option value=''>choose the region you prefer to cover</option>
            </select>
          </form>

          <p className={cn("pt-4  pb-4")}>{props.chooseDates}</p>
          <div className={cn("flex mt-2")}>
            <div className={cn("flex-shrink-0 ")}>
              <div
                className={cn(
                  "rounded-lg bg-gray-100 text-center px-6 py-1 text-sm cursor-pointer"
                )}
              >
                12 dec
              </div>
            </div>
            <div className={cn("flex-shrink-0 ml-2")}>
              <div
                className={cn(
                  "rounded-lg bg-gray-100 text-center px-6 py-1 text-sm cursor-pointer"
                )}
              >
                25 jan
              </div>
            </div>
            <div className={cn("flex-shrink-0 ml-2")}>
              <div
                className={cn(
                  "rounded-lg bg-gray-100 text-center px-6 py-1 text-sm cursor-pointer"
                )}
              >
                3 feb
              </div>
            </div>
          </div>
          <div className={cn("flex mt-2")}>
            <div className={cn("flex-shrink-0 ")}>
              <div
                className={cn(
                  "rounded-lg bg-gray-100 text-center px-6 py-1 text-sm cursor-pointer"
                )}
              >
                14 mar
              </div>
            </div>
            <div className={cn("flex-shrink-0 ml-2")}>
              <div
                className={cn(
                  "rounded-lg bg-gray-100 text-center px-6 py-1 text-sm cursor-pointer"
                )}
              >
                25 apr
              </div>
            </div>
          </div>
          <p className={cn("pt-4  pb-4")}>{props.chooseTiming}</p>
          <div className={cn("flex mt-2")}>
            <div className={cn("flex-shrink-0 ")}>
              <div
                className={cn(
                  "rounded-lg bg-gray-100 text-center px-6 py-1 text-sm cursor-pointer"
                )}
              >
                1 pm
              </div>
            </div>
            <div className={cn("flex-shrink-0 ml-2")}>
              <div
                className={cn(
                  "rounded-lg bg-gray-100 text-center px-6 py-1 text-sm cursor-pointer"
                )}
              >
                3 pm
              </div>
            </div>
            <div className={cn("flex-shrink-0 ml-2")}>
              <div
                className={cn(
                  "rounded-lg bg-gray-100 text-center px-6 py-1 text-sm cursor-pointer"
                )}
              >
                5 pm
              </div>
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

export default GladToHaveYou2;
