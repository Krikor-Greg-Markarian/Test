import React from "react";
import cn from "classnames";
import Button2 from "./Button2";
function RecentMirsads(props) {
  return (
    <div
      className={cn("bg-white rounded-xl container mx-auto w-5/12 shadow-xl")}
    >
      <img
        className={cn("rounded-t-xl")}
        src='https://cdn.pixabay.com/photo/2021/10/07/15/12/wine-6688901__480.jpg'
        alt=''
      />

      <div className={cn("p-4")}>
        <Button2
          buttonName={props.buttonName}
          className={cn(
            "bg-yellow-400 text-center text-sm text-white rounded-full w-5/12"
          )}
        />
        <p className={cn("font-bold text-sm")}>{props.title}</p>
        <p className={cn(" text-sm pb-3 border-b-2")}>{props.category}</p>
        <div
          className={cn("flex justify-center items-center pt-2 pb-2 ")}
        ></div>
        <div className={cn("grid grid-cols-2")}>
          <div className={cn("col-span-1")}>
            <p className={cn("text-gray-400 text-sm")}>{props.date}</p>
          </div>
          <div className={cn("col-span-1")}>
            <p className={cn("text-gray-400 text-sm")}>{props.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentMirsads;
