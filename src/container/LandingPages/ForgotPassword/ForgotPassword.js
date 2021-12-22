import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import Logo from "../../../assets/images/logo.png";
import InputField from "../../../component/UI/InputField/InputField";
import Button from "../../../component/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { emailValidation } from "../../../utils/formValidations/formValidations";
import { forgotPassword } from "../../../services/authServices/authServices";
import { useSnackbar } from "notistack";
import Loader from "../../../component/Loader/Loader";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = t("formValidationMessage:required");
    } else if (emailValidation(values.email)) {
      errors.email = t("formValidationMessage:emailValid");
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validate,
    onSubmit: () => {
      setIsLoading(true);
      handleForgotPassword();
    }
  });

  const handleForgotPassword = () => {
    const param = {
      email_id: formik.values.email
    };
    forgotPassword(param).then((res) => {
      if (res.data.statuscode === 200) {
        localStorage.setItem("EmailAuth", formik.values.email);
        enqueueSnackbar(res.data.message, {
          variant: "success"
        });
        formik.resetForm();
        setIsLoading(false);
      } else {
        enqueueSnackbar(res.data.message, {
          variant: "error"
        });
        setIsLoading(false);
      }
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <img src={Logo} alt="logo" />
      <div className={styles.body}>
        <h3>{t("landingPages:forgotYourPassword")}</h3>
        <p className={styles.description}>
          {t("landingPages:pleaseEnter")}
          <br />
          {t("landingPages:willEmail")}
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.formGroup}>
            <InputField
              id={"email"}
              name={"email"}
              label={t("form:email")}
              variant={"outlined"}
              type={"email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email && formik.touched.email ? true : false}
              helperText={formik.errors.email}
              onBlur={formik.handleBlur}
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
