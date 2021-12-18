import "./App.scss";
import React, { useState, useEffect } from "react";
import ThemeToggler from "./component/ThemeToggler/ThemeToggler";
import { SnackbarProvider } from "notistack";
import config from "./config/config.json";
import { Slide, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./i18n/i18n";
import RouteComponent from "./router/RouteComponent";
import NetworkDetector from "./component/NetworkDetector/NetworkDetector";

const App = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(defaultDark ? "dark" : "light");
  const notistackRef = React.createRef();

  // function to get color theme from storage
  const getLocalStorageData = async () => {
    const storageTheme = localStorage.getItem("COLOR_THEME");

    if (storageTheme) {
      setTheme(storageTheme);
    }
  };

  useEffect(() => {
    getLocalStorageData();
  }, []);

  /**
   * function to close snackbar notifications
   * @param {*} key
   * @returns close snackbar action
   */
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  }; // end of onClickDismiss

  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: config.SNACKBAR.VERTICAL_POSITION,
        horizontal: config.SNACKBAR.HORIZONTAL_POSITION
      }}
      preventDuplicate={config.SNACKBAR.PREVENT_DUPLICATE}
      autoHideDuration={config.SNACKBAR.AUTOHIDE_DURATION_IN_MILI_SECOND}
      TransitionComponent={Slide}
      ref={notistackRef}
      action={(key) => (
        <IconButton onClick={onClickDismiss(key)}>
          <CloseIcon style={{ color: "#fff" }} />
        </IconButton>
      )}
    >
      <div data-theme={theme}>
        <RouteComponent />
        <ThemeToggler setTheme={setTheme} />
        <NetworkDetector />
      </div>
    </SnackbarProvider>
  );
};

export default App;
