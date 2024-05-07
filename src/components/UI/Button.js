import React from "react";
import style from "./Button.module.scss";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={`${style.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
