import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "./Dropdown.module.scss";

const Dropdown = (props) => {
  return (
    <FormControl fullWidth className={styles.formControl}>
      <InputLabel id="demo-simple-select-label"></InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        label="Age"
        // onChange={handleChange}
        className={styles.dropdown}
        variant={props.variant}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
