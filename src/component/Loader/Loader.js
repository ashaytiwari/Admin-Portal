import React from "react";
import { HashLoader } from "react-spinners";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <HashLoader size={120} color="#0898fc" />
    </div>
  );
};

export default Loader;
