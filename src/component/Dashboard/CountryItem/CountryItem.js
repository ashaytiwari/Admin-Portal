import React from 'react';

import styles from './CountryItem.module.scss';

function CountryItem(props) {

  const { data, onSelect } = props;

  const countryFlagAttributes = {
    src: data.flags.svg,
    className: styles.countryFlag
  };

  return (
    <div className={styles.countryItemContainer}>
      <img {...countryFlagAttributes} alt={'country-flag'} />
      <h5 className={styles.countryName}>{data.name.official}</h5>
    </div>
  );
}

export default CountryItem;