import React from 'react';

import styles from './CountryItem.module.scss';

function CountryItem(props) {

  const { data, selected, onSelect } = props;

  const countryFlagAttributes = {
    src: data.flags.svg,
    className: styles.countryFlag
  };

  const countryItemContainerAttributes = {
    className: `${styles.countryItemContainer}`,
    onClick() {
      onSelect(data);
    }
  };

  if (selected === true) {
    countryItemContainerAttributes.className += ` ${styles.selected}`;
  }

  return (
    <div {...countryItemContainerAttributes}>
      <img {...countryFlagAttributes} alt={'country-flag'} />
      <h5 className={styles.countryName}>{data.name.official}</h5>
    </div>
  );
}

export default CountryItem;