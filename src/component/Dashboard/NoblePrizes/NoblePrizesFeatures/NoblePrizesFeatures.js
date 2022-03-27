import React from 'react';

import { useNavigate } from "react-router-dom";

import { nobelPrizeFeaturesData } from '../../../../assets/data/noblePrizeFeatureData';

import styles from './NoblePrizesFeatures.module.scss';

const NoblePrizesFeatures = () => {

  const navigate = useNavigate();

  const navigateHandler = (link) => {
    navigate(link);
  };

  return (
    <div className={styles.featureBody}>
      <h5>Wanna know more about?</h5>
      <div className={styles.featureContainer}>
        <div className={`row ${styles.featureRow}`}>
          {nobelPrizeFeaturesData.map((data) => (
            <div className={`col-md-6`}>
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
    </div>
  )
}

export default NoblePrizesFeatures;