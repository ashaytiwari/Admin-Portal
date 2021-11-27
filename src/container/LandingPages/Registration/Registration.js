import React from "react";
import styles from "./Registration.module.scss";
import Logo from "../../../assets/images/logo.png";
import RegistrationImage from "../../../assets/images/registration.png";
import InputField from "../../../component/UI/InputField/InputField";
import PasswordField from "../../../component/UI/PasswordField/PasswordField";
import Button from "../../../component/UI/Button/Button";
import { useTranslation } from "react-i18next";

const Registration = () => {
  const { t } = useTranslation();

  return (
    <div className={`fluid-container ${styles.registrationContainer}`}>
      <div className={"row g-0"}>
        <div className={"col-md-5"}>
          <div className={styles.card}>
            <img src={Logo} alt={"logo"} />
            <div>
              <h3>{t("landingPages:registrationCardText")}</h3>
              <img
                src={RegistrationImage}
                alt={"registration"}
                className={styles.registrationImage}
              />
            </div>
          </div>
        </div>
        <div className={"col-md-7"}>
          <div className={styles.form}>
            <p className={styles.loginText}>
              {t("landingPages:alreadyHaveAccount")}{" "}
              <span>{t("actions:login")}</span>
            </p>
            <h3>{t("landingPages:getStarted")}</h3>
            <p>{t("landingPages:enterDetails")}</p>
            <div>
              <div className={`${styles.formControl} row`}>
                <div className={"col-md-6"}>
                  <InputField
                    id={"firstName"}
                    label={t("form:firstName")}
                    variant={"outlined"}
                    type={"text"}
                  />
                </div>
                <div className={"col-md-6"}>
                  <InputField
                    id={"lastName"}
                    label={t("form:lastName")}
                    variant={"outlined"}
                    type={"text"}
                  />
                </div>
              </div>
              <div className={styles.formControl}>
                <InputField
                  id={"email"}
                  label={t("form:email")}
                  variant={"outlined"}
                  type={"email"}
                />
              </div>
              <div className={styles.formControl}>
                <InputField
                  id={"mobile"}
                  label={t("form:mobileNumber")}
                  variant={"outlined"}
                  type={"number"}
                />
              </div>
              <div className={styles.formControl}>
                <PasswordField
                  id={"password"}
                  variant={"outlined"}
                  label={t("form:password")}
                />
              </div>
              <Button>{t("actions:register")}</Button>
              <p className={styles.terms}>
                {t("landingPages:byRegistering")}{" "}
                <span>{t("landingPages:termsOfService")}</span>{" "}
                {t("landingPages:and")}{" "}
                <span>{t("landingPages:privacyPolicy")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
