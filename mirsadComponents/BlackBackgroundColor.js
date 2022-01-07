import React from "react";
import cn from "classnames";
function BlackBackgroundColor(props) {
  return (
    <div>
      <button
        className={cn(
          "bg-black text-green-300 rounded-full px-3 py-1.5 text-center"
        )}
      >
        {props.buttonName}
      </button>
    </div>
  );
}

export default BlackBackgroundColor;
