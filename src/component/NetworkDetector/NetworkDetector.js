import React, { useState, useEffect } from "react";
import styles from "./NetworkDetector.module.scss";
import Online from "../../assets/images/network.png";
import Offline from "../../assets/images/noNetwork.png";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

const NetworkDetector = () => {
  const { t } = useTranslation();
  const [isInternetConnected, setIsInternetConnected] = useState(false);

  useEffect(() => {
    handleConnectionChange();
    window.addEventListener("online", handleConnectionChange);
    window.addEventListener("offline", handleConnectionChange);
    return () => {
      window.removeEventListener("online", handleConnectionChange);
      window.removeEventListener("offline", handleConnectionChange);
    };
  }, []);

  const handleConnectionChange = () => {
    const connection = navigator.onLine ? "online" : "offline";
    if (connection === "online") {
      fetch("//google.com", {
        mode: "no-cors"
      })
        .then(() => {
          setIsInternetConnected(true);
        })
        .catch(() => setIsInternetConnected(false));
    } else {
      setIsInternetConnected(false);
    }
  };

  return (
    <Tooltip
      title={
        isInternetConnected
          ? t("common:connectedToInternet")
          : t("common:connectionLost")
      }
      arrow
    >
      <div className={styles.networkCard}>
        {isInternetConnected ? (
          <img src={Online} alt="online" />
        ) : (
          <img src={Offline} alt="offline" />
        )}
      </div>
    </Tooltip>
  );
};

export default NetworkDetector;
