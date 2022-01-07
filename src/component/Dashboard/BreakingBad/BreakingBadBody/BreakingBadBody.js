import React from "react";
import styles from "./BreakingBadBody.module.scss";
import Poster from "../../../../assets/images/breakingBad/poster.jpg";
import { useTranslation } from "react-i18next";

const BreakingBadBody = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.body}>
      <div className={"text-center"}>
        <img src={Poster} alt={"breaking-bad-poster"} />
      </div>
      <h5>{t("breakingBad:about")}</h5>
      <p>{t("breakingBad:about1")}</p>
      <p>{t("breakingBad:about2")}</p>
      <p>{t("breakingBad:about3")}</p>
    </div>
  );
};

export default BreakingBadBody;
