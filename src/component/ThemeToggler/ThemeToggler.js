import React, { useState } from "react";
import styles from "./ThemeToggler.module.scss";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { IconButton, Backdrop } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggler = (props) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const panelHandler = () => {
    setIsPanelOpen((prevState) => !prevState);
  };

  // function to switch color themes
  const switchTheme = (theme) => {
    const newTheme = theme;
    localStorage.setItem("COLOR_THEME", newTheme);
    props.setTheme(newTheme);
  };

  return (
    <div className={styles.themeToggler}>
      {isPanelOpen ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isPanelOpen}
        >
          <div className={styles.themePanel}>
            <div className={styles.header}>
              <h6>Settings</h6>
              <IconButton onClick={panelHandler} className={styles.closeBtn}>
                <CloseIcon />
              </IconButton>
            </div>

            <div className={styles.modeSection}>
              <h6 className={styles.title}>Mode</h6>
              <div className={"row"}>
                <div className={"col-md-6"}>
                  <div
                    className={`${styles.card} ${styles.lightBg}`}
                    onClick={() => switchTheme("light")}
                  >
                    <LightModeIcon />
                  </div>
                </div>
                <div className={"col-md-6"} onClick={() => switchTheme("dark")}>
                  <div className={`${styles.card} ${styles.darkBg}`}>
                    <DarkModeIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Backdrop>
      ) : (
        <div className={styles.themeBtn} onClick={panelHandler}>
          <SettingsSuggestIcon />
        </div>
      )}
    </div>
  );
};

export default ThemeToggler;
