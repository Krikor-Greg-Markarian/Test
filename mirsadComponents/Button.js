import React from "react";
import cn from "classnames";

function Button(props) {
  return (
    <div>
      <button className={cn("bg-black text-green-300 rounded-full px-9 py-1.5 text-center")}>Button</button>
    </div>
  );
}

export default Button;
