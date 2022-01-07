import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { breakingBadFeatureData } from "../../../../assets/data/breakingBadFeatureData";
import { translateFeatureNameForBD } from "../../../../utils/globalFunctions/globalFunctions";
import styles from "./BreakingBadFeature.module.scss";

const BreakingBadFeature = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateHandler = (link) => {
    navigate(link);
  };

  return (
    <div className={styles.featureBody}>
      <h5>{t("breakingBad:wannaGoTo")}</h5>
      <div className="row">
        {breakingBadFeatureData.map((data) => (
          <div className={`col-md-4`}>
            <div
              className={styles.card}
              onClick={() => navigateHandler(data.link)}
            >
              <div className={styles.cardHeader}>
                <h6>{translateFeatureNameForBD(data.title, t)}</h6>
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
