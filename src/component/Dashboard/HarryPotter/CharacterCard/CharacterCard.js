import React from "react";
import {
  dynamicBGColorToCardAvatar,
  extractAvatarCharactersFromName,
  extractCharacterType
} from "../../../../utilities/globalFunctions/globalFunctions";
import styles from "./CharacterCard.module.scss";

const CharacterCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        {props.data.image ? (
          <img src={props.data.image} alt={"character-avatar"} />
        ) : (
          <div
            className={styles.avatar}
            style={{
              backgroundColor: dynamicBGColorToCardAvatar(props.data.house)
            }}
          >
            <h4>{extractAvatarCharactersFromName(props.data.name)}</h4>
          </div>
        )}
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
            <h6 className={styles.label}>Species</h6>
          </div>
          <div className={"col-md-7"}>
            <h6>{props.data.species}</h6>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className={"col-md-5"}>
            <h6 className={styles.label}>Actor Name</h6>
          </div>
          <div className={"col-md-7"}>
            <h6>{props.data.actor || "Not Available"}</h6>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className={"col-md-5"}>
            <h6 className={styles.label}>Alive</h6>
          </div>
          <div className={"col-md-7"}>
            <h6>{props.data.alive ? "Yes" : "No"}</h6>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className={"col-md-5"}>
            <h6 className={styles.label}>Character Type</h6>
          </div>
          <div className={"col-md-7"}>
            <h6>
              {extractCharacterType(
                props.data.hogwartsStudent,
                props.data.hogwartsStaff
              )}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
