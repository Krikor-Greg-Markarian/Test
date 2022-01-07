import React from "react";
import cn from "classnames";

function ReportSubmitted(props) {
  return (
    <div>
      <p className={cn("text-xl text-center")}>{props.title}</p>
      <p className={cn("text-center text-xl")}>
        {props.been}{" "}
        <span className={cn("text-green-300 font-bold text-xl")}>
          {props.submitted}
        </span>
      </p>
    </div>
  );
}

export default ReportSubmitted;
