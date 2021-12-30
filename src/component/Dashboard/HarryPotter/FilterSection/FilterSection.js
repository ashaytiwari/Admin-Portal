import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import styles from "./FilterSection.module.scss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Popover } from "@mui/material";

const popupData = [
  {
    title: "All",
    value: "all"
  },
  {
    title: "Students",
    value: "students"
  },
  {
    title: "Staff",
    value: "staff"
  }
];

const FilterSection = () => {
  const [popupAnchor, setPopupAnchor] = useState(null);
  const [filterType, setFilterType] = useState("all");

  const handleOpen = (event) => {
    setPopupAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setPopupAnchor(null);
  };

  const handleFilterSelection = (value) => {
    setFilterType(value);
    handleClose();
  };

  const open = Boolean(popupAnchor);
  const popoverId = open ? "filter-popover" : undefined;

  return (
    <>
      <Button className={styles.filterBtn} onClick={handleOpen}>
        {filterType}
        {open ? (
          <ExpandLessIcon className={styles.chevronIcon} />
        ) : (
          <ExpandMoreIcon className={styles.chevronIcon} />
        )}
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
          {popupData.map((item, index) => (
            <p onClick={() => handleFilterSelection(item.value)}>
              {item.title}
            </p>
          ))}
        </div>
      </Popover>
    </>
  );
};

export default FilterSection;
