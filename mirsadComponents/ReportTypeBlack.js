import React from "react";
import cn from "classnames";

function ReportTypeBlack(props) {
  return (
    <div className={cn("bg-white rounded-lg p-6")}>
      <p className={cn("pb-3")}>{props.text}</p>
      <form className={cn("pb-2")} action=''>
        <select
          className={cn(
            "w-full rounded-xl p-2 bg-white border-2 text-black border-gray-100"
          )}
          name=''
          id=''
        >
          <option value=''>traffic violation</option>
        </select>
      </form>
      <form action=''>
        <select
          className={cn(
            "w-full rounded-xl p-2 bg-white border-2 text-black border-gray-100"
          )}
          name=''
          id=''
        >
          <option value=''>seatbelt</option>
        </select>
      </form>
    </div>
  );
}

export default ReportTypeBlack;
