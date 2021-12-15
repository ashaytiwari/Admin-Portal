import React from "react";
import styles from "./NotFound.module.scss";
import NotFoundImg from "../../assets/images/404.png";
import Button from "../../component/UI/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <img src={NotFoundImg} alt={"not-found"} />
      <h3>Page Not Found</h3>
      <p>
        Oops! The page you are looking for does not exist. It might have been{" "}
        <br />
        moved or deleted.
      </p>
      <Button className={styles.goToBtn} onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
