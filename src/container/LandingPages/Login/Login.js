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
import { useFormik } from "formik";

const Login = () => {
  const { t } = useTranslation();

  const validate = (values) => {
    const errors = {};
    // validating email
    if (!values.email) {
      errors.email = t("formValidationMessage:required");
    } else if (emailValidation(values.email)) {
      errors.email = t("formValidationMessage:emailValid");
    }

    // validating password
    if (!values.password) {
      errors.password = t("formValidationMessage:required");
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      loginHandler();
    }
  });

  const loginHandler = () => {
    const param = {
      email_id: formik.values.email,
      password: formik.values.password
    };
    loginService(param).then((res) => {
      console.log(res);
    });
  };

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
            <form
              className={styles.formContainer}
              onSubmit={formik.handleSubmit}
            >
              <div className={styles.formGroup}>
                <InputField
                  id={"email"}
                  name={"email"}
                  label={t("form:email")}
                  variant={"outlined"}
                  type={"email"}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={
                    formik.errors.email && formik.touched.email ? true : false
                  }
                  helperText={formik.errors.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={styles.formGroup}>
                <PasswordField
                  id={"password"}
                  name={"password"}
                  variant={"outlined"}
                  label={t("form:password")}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.errors.password && formik.touched.password
                      ? true
                      : false
                  }
                  helperText={formik.errors.password}
                  onBlur={formik.handleBlur}
                />
              </div>
              <p className={styles.forgetPassText}>
                {t("landingPages:forgotPassword")}
              </p>
              <Button type={"submit"}>{t("actions:login")}</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
