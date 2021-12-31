import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./HogwartsHeader.module.scss";
import HogwartsLogo from "../../../../assets/images/harryPotter/hogwartsLogo.png";

const HogwartsHeader = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <div>
        <h4>{t("hp:hogwarts")}</h4>
        <p>{t("hp:hogwartsTitle")}</p>
      </div>
      <img src={HogwartsLogo} alt={"logo"} />
    </div>
  );
};

export default HogwartsHeader;
