import React from "react";
import styles from "../../Test/styles/Card.module.css";
import cn from "classnames";

function CardShadow(props) {
  return (
    <div className={cn("p-4", styles.mainContainer, props.className)}>
      {props.children}
    </div>
  );
}

export default CardShadow;
