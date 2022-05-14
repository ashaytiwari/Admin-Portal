import React from 'react';

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';

import styles from './InformationCards.module.scss';

function InformationCards() {

  function renderIconByKey(key) {

    if (key === 'account') {
      return (
        <div className={`${styles.iconWrapper} ${styles.account}`}>
          <AccountBalanceWalletOutlinedIcon />
        </div>
      );
    }

    if (key === 'stories') {
      return (
        <div className={`${styles.iconWrapper} ${styles.stories}`}>
          <AutoStoriesOutlinedIcon />
        </div>
      );
    }

    return (
      <div className={`${styles.iconWrapper} ${styles.download}`}>
        <CloudDownloadOutlinedIcon />
      </div>
    );

  }

  function renderCard(key, value, label) {

    return (
      <div className={styles.informationCard}>

        {renderIconByKey(key)}

        <div className={styles.informationCardContent}>
          <span>{value}</span>
          <label>{label}</label>
        </div>

      </div>
    );
  }

  return (
    <div className={styles.informationCardsContainer}>

      {renderCard('account', '35,00,000', 'Account Balance')}
      {renderCard('stories', '24', 'Pending Auto Stories')}
      {renderCard('download', '799', 'Weekly Downloads')}

    </div>
  );
}

export default InformationCards;
