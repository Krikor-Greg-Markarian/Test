import React from "react";
import cn from "classnames";

function DescriptionBox(props) {
  return (
    <div>
      <div className={cn("bg-white rounded-lg p-6")}>
        <p className={cn("pb-3")}>{props.text}</p>
        <div className={cn("border-2 border-gray-200 rounded-xl")}>
          <textarea
            className={cn("p-3")}
            placeholder='write your description about mirsad resport here'
            name=''
            id=''
            cols='40'
            rows='10'
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
