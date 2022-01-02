import React, { useState, useEffect } from "react";
import Button from "../UI/Button/Button";
import styles from "./FilterSection.module.scss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Popover } from "@mui/material";

const FilterSection = (props) => {
  const [popupAnchor, setPopupAnchor] = useState(null);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    if (props.initialValue) {
      setFilterType(props.initialValue);
    }
  }, [props.initialValue]);

  const handleOpen = (event) => {
    setPopupAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setPopupAnchor(null);
  };

  const handleFilterSelection = (data) => {
    setFilterType(data.value);
    handleClose();
    props.onFilterChange(data);
  };

  const open = Boolean(popupAnchor);
  const popoverId = open ? "filter-popover" : undefined;

  return (
    <>
      <Button className={styles.filterBtn} onClick={handleOpen}>
        {filterType}
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={popupAnchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <div className={styles.popover}>
          {props.data.map((item, index) => (
            <p onClick={() => handleFilterSelection(item)}>{item.title}</p>
          ))}
        </div>
      </Popover>
    </>
  );
};

export default FilterSection;
