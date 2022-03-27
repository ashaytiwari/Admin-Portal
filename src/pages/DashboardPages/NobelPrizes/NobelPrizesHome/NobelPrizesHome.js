import React from 'react';

import NoblePrizeLogo from '../../../../assets/images/noblePrize/nobelPrizeLogo.png';

import AboutNoblePrizes from '../../../../component/Dashboard/NoblePrizes/AboutNoblePrizes/AboutNoblePrizes';
import NoblePrizesFeatures from '../../../../component/Dashboard/NoblePrizes/NoblePrizesFeatures/NoblePrizesFeatures';

import styles from './NobelPrizesHome.module.scss';

const NobelPrizesHome = () => {

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <h4>Noble Prizes</h4>
        <img src={NoblePrizeLogo} alt={'nobel-prize-logo'} />
      </div>

      <AboutNoblePrizes />

      <NoblePrizesFeatures />

    </div>
  )

}

export default NobelPrizesHome;