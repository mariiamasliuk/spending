import React from "react";
import style from "./Card.module.scss";

function Card(props) {
  return (
    <div className={`${style.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
