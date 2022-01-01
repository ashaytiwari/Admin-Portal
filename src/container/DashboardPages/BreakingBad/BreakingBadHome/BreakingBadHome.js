import React from "react";
import styles from "./BreakingBadHome.module.scss";
import BreakingLogo from "../../../../assets/images/breakingBad/breaking.png";
import BreakingBadBody from "../../../../component/Dashboard/BreakingBad/BreakingBadBody/BreakingBadBody";
import BreakingBadFeature from "../../../../component/Dashboard/BreakingBad/BreakingBadFeature/BreakingBadFeature";
import { Outlet, useLocation } from "react-router-dom";

const BreakingBadHome = () => {
  const location = useLocation();

  if (location.pathname !== "/dashboard/breakingBad") {
    return <Outlet />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Breaking Bad</h4>
        <img src={BreakingLogo} alt={"breaking-bad-logo"} />
      </div>
      <BreakingBadBody />
      <BreakingBadFeature />
    </div>
  );
};

export default BreakingBadHome;
