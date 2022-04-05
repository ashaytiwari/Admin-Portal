import React from 'react';

import BackNavigationSubHeader from 'component/Headers/BackNavigationSubHeader/BackNavigationSubHeader';

import NoblePrizeLogo from 'assets/images/noblePrize/nobelPrizeLogo.png';

import styles from './NobelPrizesHistory.module.scss';

function NobelPrizesHistory() {

  const backNavigationSubHeaderProperties = {
    title: 'Nobel Prizes',
    src: NoblePrizeLogo
  };

  return (
    <div>

      <BackNavigationSubHeader {...backNavigationSubHeaderProperties} />

    </div>
  );
}

export default NobelPrizesHistory;