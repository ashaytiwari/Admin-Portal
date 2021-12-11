import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={
        props.disabled
          ? styles.disabledBtn
          : `${styles.button} ${props.className}`
      }
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
