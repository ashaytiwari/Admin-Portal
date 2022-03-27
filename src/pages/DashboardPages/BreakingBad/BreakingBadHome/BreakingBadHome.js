import React from "react";
import styles from "./BreakingBadHome.module.scss";
import BreakingLogo from "../../../../assets/images/breakingBad/breaking.png";
import BreakingBadBody from "../../../../component/Dashboard/BreakingBad/BreakingBadBody/BreakingBadBody";
import BreakingBadFeature from "../../../../component/Dashboard/BreakingBad/BreakingBadFeature/BreakingBadFeature";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BreakingBadHome = () => {
  const location = useLocation();
  const { t } = useTranslation();

  if (location.pathname !== "/dashboard/breakingBad") {
    return <Outlet />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>{t("breakingBad:breakingBad")}</h4>
        <img src={BreakingLogo} alt={"breaking-bad-logo"} />
      </div>
      <BreakingBadBody />
      <BreakingBadFeature />
    </div>
  );
};

export default BreakingBadHome;
