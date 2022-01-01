import React from "react";
import styles from "./BreakingBadEpisodeCard.module.scss";
import moment from "moment";

const BreakingBadEpisodeCard = (props) => {
  console.log(props.data);
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h6>{props.data.title}</h6>
      </div>
      <div className={styles.cardBody}>
        <div className="row">
          <div className="col-md-4">
            <p className={styles.label}>Season</p>
          </div>
          <div className="col-md-8">
            <p className={styles.value}>{props.data.season}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p className={styles.label}>Episode</p>
          </div>
          <div className="col-md-8">
            <p className={styles.value}>{props.data.episode}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p className={styles.label}>AIR Date</p>
          </div>
          <div className="col-md-8">
            <p className={styles.value}>
              {moment(props.data.air_date).format("Do MMMM YYYY")}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p className={styles.label}>Main Characters</p>
          </div>
          <div className="col-md-8">
            <p className={styles.value}>
              {props.data.characters.slice(0, 6).join(" | ")}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingBadEpisodeCard;
