import React from "react";
import styles from "./Hogwarts.module.scss";
import HogwartsLogo from "../../../../assets/images/harryPotter/hogwartsLogo.png";
import Gryffindor from "../../../../assets/images/harryPotter/gryffindor.png";
import Slytherin from "../../../../assets/images/harryPotter/slytherin.png";
import Ravenclaw from "../../../../assets/images/harryPotter/ravenclaw.png";
import Hufflepuff from "../../../../assets/images/harryPotter/hufflepuff.png";
import CommonRoom from "../../../../assets/images/harryPotter/houses.jpg";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

const Hogwarts = () => {
  const location = useLocation();
  const { t } = useTranslation();

  if (location.pathname !== "/dashboard/harryPotter") {
    return <Outlet />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h4>{t("hp:hogwarts")}</h4>
          <p>{t("hp:hogwartsTitle")}</p>
        </div>
        <img src={HogwartsLogo} alt={"logo"} />
      </div>
      <div className={styles.body}>
        <div className={styles.row}>
          <HouseCard
            image={Gryffindor}
            title={t("hp:gryffindor")}
            background={styles.gryffindorBG}
            keys={"gryffindor"}
          />
          <HouseCard
            image={Slytherin}
            title={t("hp:slytherin")}
            background={styles.slytherinBG}
            keys={"slytherin"}
          />
        </div>
        <div className={styles.row}>
          <HouseCard
            image={Ravenclaw}
            title={t("hp:ravenclaw")}
            background={styles.ravenclawBG}
            keys={"ravenclaw"}
          />
          <HouseCard
            image={Hufflepuff}
            title={t("hp:hufflepuff")}
            background={styles.hufflepuffBG}
            keys={"hufflepuff"}
          />
        </div>
        <div className={styles.row}>
          <HouseCard
            image={CommonRoom}
            title={t("hp:commonRoom")}
            background={styles.commonBg}
            keys={"commonRoom"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hogwarts;
