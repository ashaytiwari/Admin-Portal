import { TextField } from "@mui/material";
import React from "react";
import styles from "./InputField.module.scss";

const InputField = (props) => {
  return (
    <TextField
      id={props.id}
      name={props.name}
      type={props.type}
      label={props.label}
      variant={props.variant}
      className={props.className ? props.className : styles.input}
      value={props.value}
      onChange={props.onChange}
      autoComplete="off"
      error={props.error}
      helperText={props.helperText}
      onBlur={props.onBlur}
    />
  );
};

export default InputField;
