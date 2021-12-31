import React from "react";
import styles from "./HogwartsBody.module.scss";
import Gryffindor from "../../../../assets/images/harryPotter/gryffindor.png";
import Slytherin from "../../../../assets/images/harryPotter/slytherin.png";
import Ravenclaw from "../../../../assets/images/harryPotter/ravenclaw.png";
import Hufflepuff from "../../../../assets/images/harryPotter/hufflepuff.png";
import CommonRoom from "../../../../assets/images/harryPotter/houses.jpg";
import { useTranslation } from "react-i18next";
import HouseCard from "../HouseCard/HouseCard";

const HogwartsBody = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.body}>
      <h5>{t("hp:chooseRoom")}</h5>
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
  );
};

export default HogwartsBody;
