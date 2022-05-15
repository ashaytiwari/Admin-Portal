import React from "react";

import Banners from "component/Dashboard/Home/Banners/Banners";
import InformationCards from "component/Dashboard/Home/InformationCards/InformationCards";
import TopInstalledCountryList from "component/Dashboard/Home/TopInstalledCountryList/TopInstalledCountryList";

import styles from './Home.module.scss';

const Home = () => {

  return (
    <div className={styles.homeContainer}>

      <Banners />

      <InformationCards />

      <div className={styles.homeBodyContainer}>
        <h3>Hare krishna</h3>
        <TopInstalledCountryList />
      </div>

    </div>
  );

};

export default Home;
