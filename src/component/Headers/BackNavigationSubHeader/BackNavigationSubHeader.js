import React from "react";
import styles from "./BackNavigationSubHeader.module.scss";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const BackNavigationSubHeader = (props) => {
  const navigate = useNavigate();

  const handleBackNavigation = () => {
    navigate(-1);
  };

  return (
    <div className={styles.header}>
      <div>
        <IconButton className={styles.backBtn} onClick={handleBackNavigation}>
          <KeyboardBackspaceIcon />
        </IconButton>
        <h4>{props.title}</h4>
      </div>
      <img src={props.src} alt={"logo"} />
    </div>
  );
};

export default BackNavigationSubHeader;
