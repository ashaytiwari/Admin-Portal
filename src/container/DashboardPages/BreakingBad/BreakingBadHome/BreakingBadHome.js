import React from "react";
import styles from "./BreakingBadHome.module.scss";
import BreakingLogo from "../../../../assets/images/breakingBad/breaking.png";
import BreakingBadBody from "../../../../component/Dashboard/BreakingBad/BreakingBadBody/BreakingBadBody";
import BreakingBadFeature from "../../../../component/Dashboard/BreakingBad/BreakingBadFeature/BreakingBadFeature";

const BreakingBadHome = () => {
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
