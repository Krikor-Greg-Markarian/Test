import React from "react";
import cn from "classnames";
function GreenBackgroundButton(props) {
  return (
    <div>
      <button
        className={cn(
          "bg-green-300 text-black rounded-full px-3 py-1.5 text-center"
        )}
      >
        {props.buttonName}
      </button>
    </div>
  );
}

export default GreenBackgroundButton;
