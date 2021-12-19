import React from "react";
import styles from "./ErrorPage.module.scss";
import { useNavigate } from "react-router-dom";
import ErrorRobot from "../../assets/images/errorRobot.png";
import Button from "../../component/UI/Button/Button";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={`fluid-container ${styles.wrapper}`}>
      <div className={"row"}>
        <div className={`col-md-7 ${styles.contentSection}`}>
          <h3>{t("landingPages:internalServerError")}</h3>
          <p>
            {t("landingPages:oopsError1")} <br />
            {t("landingPages:oopsError2")}
          </p>
          <Button className={styles.goToBtn} onClick={() => navigate(-1)}>
            {t("actions:back")}
          </Button>
        </div>
        <div className={"col-md-5"}>
          <img src={ErrorRobot} alt={"error"} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
