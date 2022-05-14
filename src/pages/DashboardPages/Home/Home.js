import React from "react";

import Banners from "component/Dashboard/Home/Banners/Banners";
import InformationCards from "component/Dashboard/Home/InformationCards/InformationCards";

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Banners />
      <InformationCards />
    </div>
  );
};

export default Home;
