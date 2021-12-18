import React from "react";
import styles from "./ErrorPage.module.scss";
import { useNavigate } from "react-router-dom";
import ErrorRobot from "../../assets/images/errorRobot.png";
import Button from "../../component/UI/Button/Button";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={`fluid-container ${styles.wrapper}`}>
      <div className={"row"}>
        <div className={`col-md-7 ${styles.contentSection}`}>
          <h3>500 Internal Server Error</h3>
          <p>
            Oops! Something went wrong. Sorry for the inconvenience <br /> we're
            working on it
          </p>
          <Button className={styles.goToBtn} onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </div>
        <div className={"col-md-5"}>
          <img src={ErrorRobot} alt={"error"} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
