import React from "react";
import cn from "classnames";
function Button2(props) {
  return (
    <div>
      <div className={cn(props.className)}>
        <button>{props.buttonName}</button>
      </div>
    </div>
  );
}

export default Button2;
