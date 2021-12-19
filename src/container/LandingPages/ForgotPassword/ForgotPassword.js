import React from "react";
import styles from "./ForgotPassword.module.scss";
import Logo from "../../../assets/images/logo.png";
import InputField from "../../../component/UI/InputField/InputField";
import Button from "../../../component/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <img src={Logo} alt="logo" />
      <div className={styles.body}>
        <h3>{t("landingPages:forgotYourPassword")}</h3>
        <p>
          {t("landingPages:pleaseEnter")}
          <br />
          {t("landingPages:willEmail")}
        </p>
        <form>
          <div className={styles.formGroup}>
            <InputField
              id={"email"}
              name={"email"}
              label={t("form:email")}
              variant={"outlined"}
              type={"email"}
            />
          </div>
          <div className={styles.formGroup}>
            <Button type={"submit"}>{t("landingPages:resetPassword")}</Button>
          </div>
          <div className={styles.formGroup}>
            <Button
              className={styles.backBtn}
              onClick={() => navigate("/login")}
            >
              {t("actions:back")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
