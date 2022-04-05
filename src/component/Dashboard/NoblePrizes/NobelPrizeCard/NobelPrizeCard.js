import React from 'react';

import {
  extractLaureatesNameAsString,
  extractLaureatesMotivationAsString,
  decidePrizeLogoPathBasedOnCategory,
  generateRandomHexadecimalColorCode
} from 'utilities/globalFunctions/globalFunctions';

import styles from './NobelPrizeCard.module.scss';

function NobelPrizeCard(props) {

  const { prize } = props;

  const laureatesName = extractLaureatesNameAsString(prize.laureates);
  const laureatesMotivation = extractLaureatesMotivationAsString(prize.laureates);

  function renderPrizeLogo() {

    const prizeLogoContainerAttributes = {
      className: styles.prizeLogoContainer,
      style: {
        backgroundColor: generateRandomHexadecimalColorCode()
      }
    };

    const prizeLogoAttributes = {
      className: styles.prizeLogo,
      src: decidePrizeLogoPathBasedOnCategory(prize.category)
    };

    return <div {...prizeLogoContainerAttributes}>
      <img {...prizeLogoAttributes} alt={'prize-logo'} />
    </div>;
  }

  const laureatesMotivationAttributes = {
    dangerouslySetInnerHTML: {
      __html: laureatesMotivation
    },
    className: styles.motivation
  };

  return (
    <div className={styles.nobelPrizeCard}>
      <div className="row">

        <div className="col-md-9">
          <h2 className={styles.category}>{prize.categoryFullName.en}</h2>
          <hr />
          <h4 className={styles.nameAndAwardYear}>{laureatesName || 'Not available'} - {prize.awardYear}</h4>
          <h5 className={styles.amount}>{prize.prizeAmount} prize amount</h5>
          <div {...laureatesMotivationAttributes}></div>
        </div>

        <div className="col-md-3">
          {renderPrizeLogo()}
        </div>

      </div>
    </div>
  );
}

export default NobelPrizeCard;