import React from "react";
import styles from "./BreakingBadCharacterCard.module.scss";

const BreakingBadCharacterCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <img src={props.data.img} alt={"character-avatar"} />
      </div>
      <div className={styles.cardBody}>
        <div className={`row ${styles.row}`}>
          <div className={"col-md-5"}>
            <h6 className={styles.label}>Name</h6>
          </div>
          <div className={"col-md-7"}>
            <h6>{props.data.name}</h6>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className={"col-md-5"}>
            <h6 className={styles.label}>Nickname</h6>
          </div>
          <div className={"col-md-7"}>
            <h6>{props.data.nickname || "Not Available"}</h6>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className={"col-md-5"}>
            <h6 className={styles.label}>Actor Name</h6>
          </div>
          <div className={"col-md-7"}>
            <h6>{props.data.portrayed || "Not Available"}</h6>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className={"col-md-5"}>
            <h6 className={styles.label}>Alive</h6>
          </div>
          <div className={"col-md-7"}>
            <h6>{props.data.status ? "Yes" : "No"}</h6>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className={"col-md-5"}>
            <h6 className={styles.label}>Occupation</h6>
          </div>
          <div className={"col-md-7"}>
            <h6>{props.data.occupation.join(" | ")}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingBadCharacterCard;
