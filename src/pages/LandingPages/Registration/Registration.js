import React, { useState } from "react";
import styles from "./Registration.module.scss";
import Logo from "../../../assets/images/logo.png";
import RegistrationImage from "../../../assets/images/registration.png";
import InputField from "../../../component/UI/InputField/InputField";
import PasswordField from "../../../component/UI/PasswordField/PasswordField";
import Button from "../../../component/UI/Button/Button";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  emailValidation,
  validateMobileNumber,
  validatePassword
} from "../../../utilities/formValidations/formValidations";
import { registrationService } from "../../../services/authServices";
import Loader from "../../../component/Loader/Loader";
import { useSnackbar } from "notistack";
import {
  getLocalStorage,
  setLocalStorage
} from "../../../utilities/globalFunctions/globalFunctions";

const Registration = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const user = getLocalStorage();

  const [isLoading, setIsLoading] = useState(false);

  const validate = (values) => {
    const errors = {};
    // validating firstName
    if (!values.firstName) {
      errors.firstName = t("formValidationMessage:required");
    }

    // validating lastName
    if (!values.lastName) {
      errors.lastName = t("formValidationMessage:required");
    }

    // validating email
    if (!values.email) {
      errors.email = t("formValidationMessage:required");
    } else if (emailValidation(values.email)) {
      errors.email = t("formValidationMessage:emailValid");
    }

    // validating mobile number
    if (!values.mobileNumber) {
      errors.mobileNumber = t("formValidationMessage:required");
    } else if (validateMobileNumber(values.mobileNumber)) {
      errors.mobileNumber = t("formValidationMessage:validMobileNo");
    }

    // validating password
    if (!values.password) {
      errors.password = t("formValidationMessage:required");
    } else if (validatePassword(values.password)) {
      errors.password = t("formValidationMessage:passwordLength");
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: ""
    },
    validate,
    onSubmit: () => {
      setIsLoading(true);
      registrationHandler();
    }
  });

  const registrationHandler = () => {
    const param = {
      user_id: 0,
      first_name: formik.values.firstName,
      last_name: formik.values.lastName,
      mobile_number: formik.values.mobileNumber,
      email_id: formik.values.email,
      hash_password: formik.values.password,

      profile_unique_name: null,
      profile_name: null,
      gender_enum_id: null,
      dob: null,
      home_address: null,
      city_id: null,
      regional_id: null,
      country_id: null,
      post_code: null,

      user_education_json: null,

      work_availability: null,

      resume_file_unique_name: null,
      resume_file_name: null,

      job_type_id: null,

      specialization_id: null,
      interested_work_id: null,
      industry_field_id: null,
      company_location_id: null,
      work_abroad_id: null,

      certificate_file_uinque_name: null,
      ceritficate_file_name: null,

      user_work_experience_json: null,

      user_abroad_json: null,

      user_schlorship_json: null,
      user_language_json: null,
      user_salary_json: null
    };

    registrationService(param).then((res) => {
      if (res.data.statuscode === 200) {
        setLocalStorage(res.data?.data[0]);
        formik.resetForm();
        enqueueSnackbar(res.data.message, {
          variant: "success"
        });
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

  if (user) {
    return <Navigate replace to={"/dashboard"} />;
  }

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
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <p className={styles.loginText}>
              {t("landingPages:alreadyHaveAccount")} {""}
              <span onClick={() => navigate("/login")}>
                {t("actions:login")}
              </span>
            </p>
            <h3>{t("landingPages:getStarted")}</h3>
            <p className={styles.detailsText}>
              {t("landingPages:enterDetails")}
            </p>
            <div>
              <div className={`${styles.formControl} row`}>
                <div className={"col-md-6"}>
                  <InputField
                    id={"firstName"}
                    name={"firstName"}
                    label={t("form:firstName")}
                    variant={"outlined"}
                    type={"text"}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.errors.firstName && formik.touched.firstName
                        ? true
                        : false
                    }
                    helperText={formik.errors.firstName}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className={"col-md-6"}>
                  <InputField
                    id={"lastName"}
                    name={"lastName"}
                    label={t("form:lastName")}
                    variant={"outlined"}
                    type={"text"}
                    values={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.errors.lastName && formik.touched.lastName
                        ? true
                        : false
                    }
                    helperText={formik.errors.lastName}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className={styles.formControl}>
                <InputField
                  id={"email"}
                  name={"email"}
                  label={t("form:email")}
                  variant={"outlined"}
                  type={"email"}
                  values={formik.values.email}
                  onChange={formik.handleChange}
                  error={
                    formik.errors.email && formik.touched.email ? true : false
                  }
                  helperText={formik.errors.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={styles.formControl}>
                <InputField
                  id={"mobileNumber"}
                  name={"mobileNumber"}
                  label={t("form:mobileNumber")}
                  variant={"outlined"}
                  type={"number"}
                  values={formik.values.mobileNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.errors.mobileNumber && formik.touched.mobileNumber
                      ? true
                      : false
                  }
                  helperText={formik.errors.mobileNumber}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={styles.formControl}>
                <PasswordField
                  id={"password"}
                  name={"password"}
                  variant={"outlined"}
                  label={t("form:password")}
                  values={formik.values.password}
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
              <Button type={"submit"}>{t("actions:register")}</Button>
              <p className={styles.terms}>
                {t("landingPages:byRegistering")}{" "}
                <span>{t("landingPages:termsOfService")}</span>{" "}
                {t("landingPages:and")}{" "}
                <span>{t("landingPages:privacyPolicy")}</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
