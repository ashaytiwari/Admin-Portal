import React from "react";
import styles from "./NotFound.module.scss";
import NotFoundImg from "../../assets/images/404.png";
import Button from "../../component/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <img src={NotFoundImg} alt={"not-found"} />
      <h3>{t("landingPages:pageNotFound")}</h3>
      <p>
        {t("landingPages:oopsPage1")}
        {""}
        <br />
        {t("landingPages:oopsPage2")}
      </p>
      <Button className={styles.goToBtn} onClick={() => navigate(-1)}>
        {t("actions:back")}
      </Button>
    </div>
  );
};

export default NotFound;
