import React from "react";
import { useNavigate } from "react-router-dom";
import { breakingBadFeatureData } from "../../../../assets/data/breakingBadFeatureData";
import styles from "./BreakingBadFeature.module.scss";

const BreakingBadFeature = () => {
  const navigate = useNavigate();

  const navigateHandler = (link) => {
    navigate(link);
  };

  return (
    <div className={styles.featureBody}>
      <h5>Wanna go to</h5>
      <div className="row">
        {breakingBadFeatureData.map((data) => (
          <div className={`col-md-4`}>
            <div
              className={styles.card}
              onClick={() => navigateHandler(data.link)}
            >
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
