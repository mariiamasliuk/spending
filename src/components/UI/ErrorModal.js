import React from "react";
import Card from "./Card";
import Button from "./Button";
import style from "./ErrorModal.module.scss";

const ErrorModal = (props) => {
  return (
    <>
      <div className={style.backdrop} onClick={props.onErrorClick}></div>
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={props.onErrorClick}>OK</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
