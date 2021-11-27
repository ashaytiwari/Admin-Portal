import React from "react";
import styles from "./Login.module.scss";
import Logo from "../../../assets/images/logo.png";
import LoginImage from "../../../assets/images/login.png";
import InputField from "../../../component/UI/InputField/InputField";
import PasswordField from "../../../component/UI/PasswordField/PasswordField";
import Button from "../../../component/UI/Button/Button";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className={`fluid-container ${styles.loginContainer}`}>
      <div className={"row g-0"}>
        <div className={"col-md-5"}>
          <div className={styles.card}>
            <img src={Logo} alt="logo" />
            <div>
              <h3>{t("landingPages:welcome")}</h3>
              <img src={LoginImage} alt="login" className={styles.loginImage} />
            </div>
          </div>
        </div>
        <div className={"col-md-7"}>
          <div className={styles.loginForm}>
            <p className={styles.registrationText}>
              {t("landingPages:dontHaveAccount")}{" "}
              <span> {t("landingPages:getStart")} </span>
            </p>
            <h3>{t("landingPages:signToPortal")}</h3>
            <p>{t("landingPages:enterDetails")}</p>
            <div className={styles.formContainer}>
              <div className={styles.formGroup}>
                <InputField
                  id={"email"}
                  label={t("form:email")}
                  variant={"outlined"}
                  type={"email"}
                />
              </div>
              <div className={styles.formGroup}>
                <PasswordField
                  id={"password"}
                  variant={"outlined"}
                  label={t("form:password")}
                />
              </div>
              <p className={styles.forgetPassText}>
                {t("landingPages:forgotPassword")}
              </p>
              <Button>{t("actions:login")}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
