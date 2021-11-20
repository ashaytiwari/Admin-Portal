import { TextField } from "@mui/material";
import React from "react";
import styles from "./InputField.module.scss";

const InputField = (props) => {
  return (
    <TextField
      id={props.id}
      type={props.type}
      label={props.label}
      variant={props.variant}
      className={props.className ? props.className : styles.input}
      value={props.value}
      onChange={props.onChange}
      autoComplete="off"
    />
  );
};

export default InputField;
