import React from "react";
import { breakingBadFeatureData } from "../../../../assets/data/breakingBadFeatureData";
import styles from "./BreakingBadFeature.module.scss";

const BreakingBadFeature = () => {
  return (
    <div className={styles.featureBody}>
      <h5>Wanna go to</h5>
      <div className="row">
        {breakingBadFeatureData.map((data) => (
          <div className={`col-md-4`}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h6>{data.title}</h6>
              </div>
              <div className={styles.cardBody}>
                <data.icon className={styles.icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakingBadFeature;
