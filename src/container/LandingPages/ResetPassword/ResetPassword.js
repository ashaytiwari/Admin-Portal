import React from "react";
import styles from "./ResetPassword.module.scss";
import Logo from "../../../assets/images/logo.png";
import { useParams } from "react-router-dom";
import PasswordField from "../../../component/UI/PasswordField/PasswordField";
import Button from "../../../component/UI/Button/Button";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { validatePassword } from "../../../utils/formValidations/formValidations";

const ResetPassword = () => {
  const params = useParams();
  const { t } = useTranslation();
  const sessionEmail = localStorage.getItem("Email");

  const validate = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = t("formValidationMessage:required");
    } else if (validatePassword(values.password)) {
      errors.password = t("formValidationMessage:passwordLength");
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = t("formValidationMessage:required");
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = t("formValidationMessage:passwordNotMatched");
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""
    },
    validate,
    onSubmit: () => {
      console.log(params.tokenId, sessionEmail);
    }
  });

  return (
    <div className={styles.wrapper}>
      <img src={Logo} alt="logo" />
      <div className={styles.body}>
        <h3>Reset Password</h3>
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
          <div className={styles.formGroup}>
            <PasswordField
              id={"password"}
              name={"password"}
              variant={"outlined"}
              label={"Password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={
                formik.errors.password && formik.touched.password ? true : false
              }
              helperText={formik.errors.password}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className={styles.formGroup}>
            <PasswordField
              id={"confirmPassword"}
              name={"confirmPassword"}
              variant={"outlined"}
              label={"Confirm Password"}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? true
                  : false
              }
              helperText={formik.errors.confirmPassword}
              onBlur={formik.handleBlur}
            />
          </div>
          <Button type={"submit"}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
