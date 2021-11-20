import React from "react";
import styles from "./Login.module.scss";
import Logo from "../../../assets/images/logo.png";
import LoginImage from "../../../assets/images/login.png";
import InputField from "../../../component/UI/InputField/InputField";
import PasswordField from "../../../component/UI/PasswordField/PasswordField";
import Button from "../../../component/UI/Button/Button";

const Login = () => {
  return (
    <div className={`fluid-container ${styles.loginContainer}`}>
      <div className={"row g-0"}>
        <div className={"col-md-5"}>
          <div className={styles.card}>
            <img src={Logo} alt="logo" />
            <div>
              <h3>Hi, Welcome Back</h3>
              <img src={LoginImage} alt="login" className={styles.loginImage} />
            </div>
          </div>
        </div>
        <div className={"col-md-7"}>
          <div className={styles.loginForm}>
            <p className={styles.registrationText}>
              Don't have an account? <span> Get started </span>
            </p>
            <h3>Sign in to Portal</h3>
            <p>Enter your details below.</p>
            <div className={styles.formContainer}>
              <div className={styles.formGroup}>
                <InputField
                  id={"email"}
                  label={"Email Address"}
                  variant={"outlined"}
                  type={"email"}
                />
              </div>
              <div className={styles.formGroup}>
                <PasswordField
                  id={"password"}
                  variant={"outlined"}
                  label={"Password"}
                />
              </div>
              <p className={styles.forgetPassText}>Forgot Password?</p>
              <Button>Login</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
