import React from "react";
import styles from "./Registration.module.scss";
import Logo from "../../../assets/images/logo.png";
import RegistrationImage from "../../../assets/images/registration.png";
import InputField from "../../../component/UI/InputField/InputField";
import PasswordField from "../../../component/UI/PasswordField/PasswordField";
import Button from "../../../component/UI/Button/Button";

const Registration = () => {
  return (
    <div className={`fluid-container ${styles.registrationContainer}`}>
      <div className={"row g-0"}>
        <div className={"col-md-5"}>
          <div className={styles.card}>
            <img src={Logo} alt={"logo"} />
            <div>
              <h3>Manage the job more effectively with Portal</h3>
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
              Already have an account? <span>Login</span>
            </p>
            <h3>Get started with Portal</h3>
            <p>Enter your details below.</p>
            <div>
              <div className={`${styles.formControl} row`}>
                <div className={"col-md-6"}>
                  <InputField
                    id={"firstName"}
                    label={"First Name"}
                    variant={"outlined"}
                    type={"text"}
                  />
                </div>
                <div className={"col-md-6"}>
                  <InputField
                    id={"lastName"}
                    label={"Last Name"}
                    variant={"outlined"}
                    type={"text"}
                  />
                </div>
              </div>
              <div className={styles.formControl}>
                <InputField
                  id={"email"}
                  label={"Email Address"}
                  variant={"outlined"}
                  type={"email"}
                />
              </div>
              <div className={styles.formControl}>
                <InputField
                  id={"mobile"}
                  label={"Mobile Number"}
                  variant={"outlined"}
                  type={"number"}
                />
              </div>
              <div className={styles.formControl}>
                <PasswordField
                  id={"password"}
                  variant={"outlined"}
                  label={"Password"}
                />
              </div>
              <Button>Register</Button>
              <p className={styles.terms}>
                By registering, I agree to Portal <span>Terms of Service</span>{" "}
                and <span>Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
