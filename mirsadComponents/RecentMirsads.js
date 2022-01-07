import React from "react";
import cn from "classnames";
import Button from "./Button";
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
        <Button />
        <p>long title of the case goes here</p>
        <p>category</p>
        <div className={cn("flex justify-center items-center pt-2 pb-2")}>
          <hr className={cn("w-9/12")}></hr>
        </div>
        <div className={cn("grid grid-cols-2")}>
          <div className={cn("col-span-1")}>
            <p>01/02/2021</p>
          </div>
          <div className={cn("col-span-1")}>
            <p>04:51 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentMirsads;
