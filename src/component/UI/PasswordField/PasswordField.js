import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import styles from "./PasswordField.module.scss";

const PasswordField = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl variant={props.variant} className={styles.formControl}>
      <InputLabel
        htmlFor={props.id}
        className={props.error ? styles.errorLabel : styles.label}
      >
        {props.label}
      </InputLabel>
      <OutlinedInput
        id={props.id}
        type={showPassword ? "text" : "password"}
        value={props.value}
        onChange={props.onChange}
        autoComplete="off"
        onBlur={props.onBlur}
        onKeyUp={props.onKeyUp}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((prevState) => !prevState)}
              edge="end"
            >
              {!showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        error={props.error}
      />
      {props.error && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormControl>
  );
};

export default PasswordField;
