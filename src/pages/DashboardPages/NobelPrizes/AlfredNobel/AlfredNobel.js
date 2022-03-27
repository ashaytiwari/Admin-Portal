import React from 'react';

import NoblePrizeLogo from '../../../../assets/images/noblePrize/nobelPrizeLogo.png';

import AboutAlfredNobel from '../../../../component/Dashboard/NoblePrizes/AboutAlfredNobel/AboutAlfredNobel';
import BackNavigationSubHeader from "../../../../component/Headers/BackNavigationSubHeader/BackNavigationSubHeader";

const AlfredNobel = () => {

  const backNavigationSubHeaderProperties = {
    title: 'Alfred Nobel',
    src: NoblePrizeLogo
  };

  return (
    <div>

      <BackNavigationSubHeader {...backNavigationSubHeaderProperties} />

      <AboutAlfredNobel />

    </div>
  );
}

export default AlfredNobel;