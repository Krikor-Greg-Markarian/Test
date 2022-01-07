import React from "react";
import cn from "classnames";
import SvgrLocation from "../svgrMirsad/SvgrLocation";
import SvgrLevel from "../svgrMirsad/SvgrLevel";
function Profile(props) {
  return (
    <div>
      <div className={cn("bg-gray-200 rounded-xl p-5")}>
        <div className={cn("grid grid-cols-2")}>
          <div className={cn("col-span-1")}>
            <p className={cn("font-bold")}>Welcome Ahmad!{props.greetings}</p>
            <div className={cn("flex mt-1")}>
              <div className={cn("flex-shrink-0 mt-1")}>
                <SvgrLocation />
              </div>
              <div className={cn("flex-shrink-0 ml-2")}>
                <p className={cn("text-gray-400")}>
                  RIYADH, Saudia Arabia{props.location}
                </p>
              </div>
            </div>
            <div className={cn("flex")}>
              <div className={cn("flex-shrink-0 mt-1")}>
                <SvgrLevel />
              </div>
              <div className={cn("flex-shrink-0 ml-2")}>
                <p className={cn("text-gray-400")}>Level 8{props.level}</p>
              </div>
            </div>
          </div>
          <div className={cn("col-span-1")}>
            <img
              className={cn("w-20 h-20 rounded-full float-right")}
              src={props.imageUrl}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
