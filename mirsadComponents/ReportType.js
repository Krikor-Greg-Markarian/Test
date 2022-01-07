import React from "react";
import cn from "classnames";

function ReportType(props) {
  return (
    <div className={cn("bg-white rounded-lg p-6")}>
      <p className={cn("pb-3")}>report type</p>
      <form className={cn("pb-2")} action=''>
        <select
          className={cn(
            "w-full rounded-xl p-2 bg-white border-2 text-gray-400 border-gray-100"
          )}
          name=''
          id=''
        >
          <option value=''>what type of infringement is it ?</option>
        </select>
      </form>
      <form action=''>
        <select
          className={cn(
            "w-full rounded-xl p-2 bg-white border-2 text-gray-400 border-gray-100"
          )}
          name=''
          id=''
        >
          <option value=''>choose between the</option>
        </select>
      </form>
    </div>
  );
}

export default ReportType;
