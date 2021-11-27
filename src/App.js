import "./App.scss";
import Login from "./container/LandingPages/Login/Login";
import React, { useState, useEffect } from "react";
import ThemeToggler from "./component/ThemeToggler/ThemeToggler";
import Registration from "./container/LandingPages/Registration/Registration";
import "./i18n/i18n";

const App = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(defaultDark ? "dark" : "light");

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

  return (
    <div data-theme={theme}>
      <Login />
      {/* <Registration /> */}
      <ThemeToggler setTheme={setTheme} />
    </div>
  );
};

export default App;
