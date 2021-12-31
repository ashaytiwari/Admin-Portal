import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HouseCard.module.scss";

const HouseCard = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${props.background} ${styles.houseCard}`}
      onClick={() =>
        navigate(`/dashboard/harryPotter/${props.keys}`, { state: props })
      }
    >
      <img src={props.image} alt={props.title} />
      <h6>{props.title}</h6>
    </div>
  );
};

export default HouseCard;
