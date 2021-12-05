import React, { useState } from "react";
import styles from "./Login.module.scss";
import Logo from "../../../assets/images/logo.png";
import LoginImage from "../../../assets/images/login.png";
import InputField from "../../../component/UI/InputField/InputField";
import PasswordField from "../../../component/UI/PasswordField/PasswordField";
import Button from "../../../component/UI/Button/Button";
import { useTranslation } from "react-i18next";
import { loginService } from "../../../services/authServices/authServices";
import { emailValidation } from "../../../utils/formValidations/formValidations";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState(null);
  const [passwordHelperText, setPasswordHelperText] = useState(null);

  const { t } = useTranslation();

  const validateEmail = () => {
    if (!email) {
      setIsEmailError(true);
      setEmailHelperText(t("formValidationMessage:emailRequired"));
    } else if (emailValidation(email)) {
      setIsEmailError(true);
      setEmailHelperText(t("formValidationMessage:emailValid"));
    } else {
      setIsEmailError(false);
      setEmailHelperText(null);
    }
  };

  const validatePassword = () => {
    if (!password) {
      setIsPasswordError(true);
      setPasswordHelperText(t("formValidationMessage:passwordRequired"));
    } else {
      setIsPasswordError(false);
      setPasswordHelperText(null);
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail();
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };

  const loginHandler = () => {};

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
            <p className={styles.enterDetails}>
              {t("landingPages:enterDetails")}
            </p>
            <div className={styles.formContainer}>
              <div className={styles.formGroup}>
                <InputField
                  id={"email"}
                  label={t("form:email")}
                  variant={"outlined"}
                  type={"email"}
                  value={email}
                  onChange={(e) => onEmailChange(e)}
                  error={isEmailError}
                  helperText={emailHelperText}
                  onBlur={validateEmail}
                />
              </div>
              <div className={styles.formGroup}>
                <PasswordField
                  id={"password"}
                  variant={"outlined"}
                  label={t("form:password")}
                  value={password}
                  onChange={(e) => onPasswordChange(e)}
                  error={isPasswordError}
                  helperText={passwordHelperText}
                  onBlur={validatePassword}
                />
              </div>
              <p className={styles.forgetPassText}>
                {t("landingPages:forgotPassword")}
              </p>
              <Button onClick={loginHandler} disabled={!email || !password}>
                {t("actions:login")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
