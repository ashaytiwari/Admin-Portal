import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import styles from "./PasswordField.module.scss";

const PasswordField = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl variant={props.variant} className={styles.formControl}>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <OutlinedInput
        id={props.id}
        type={showPassword ? "text" : "password"}
        value={props.value}
        onChange={props.onChange}
        autoComplete="off"
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
      />
    </FormControl>
  );
};

export default PasswordField;
