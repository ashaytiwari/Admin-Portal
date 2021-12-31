import React from "react";
import styles from "./HarryPotterAbout.module.scss";
import HogwartsPoster from "../../../../assets/images/harryPotter/hogwarts.jpg";
import Button from "../../../UI/Button/Button";
import { useTranslation } from "react-i18next";

const HarryPotterAbout = () => {
  const { t } = useTranslation();

  const navigateToWizardingWorld = () => {
    window.open("https://www.wizardingworld.com/", "_blank");
  };

  return (
    <div className={styles.about}>
      <img src={HogwartsPoster} alt={"hogwarts-poster"} />
      <h5>{t("hp:about")}</h5>
      <p>{t("hp:about1")}</p>
      <p>{t("hp:about2")}</p>
      <p>{t("hp:about3")}</p>
      <div className={"text-center mt-5"}>
        <Button className={styles.wayBtn} onClick={navigateToWizardingWorld}>
          {t("hp:wannaGoTo")}
        </Button>
      </div>
    </div>
  );
};

export default HarryPotterAbout;
