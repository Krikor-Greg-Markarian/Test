import React from "react";
import cn from "classnames";
function TermsCondBox(props) {
  return (
    <div className={cn("flex")}>
      <div className={cn("flex-shrink")}>
        <input type='checkbox' />
      </div>
      <div className={cn("flex-shrink-0 ml-3")}>
        <p>
        {props.agree}
          <span className={cn("font-bold underline")}>
           {props.terms}
            <span className={cn("font-normal no-underline")}>
            {props.and}
            </span>
            {props.privacyPolicy}
          </span>
        </p>
      </div>
    </div>
  );
}

export default TermsCondBox;
