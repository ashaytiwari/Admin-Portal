import React, { useState } from 'react';

import { IconButton, Tooltip } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

import { sortCountryList } from './utilities';

import { topInstalledCountryList } from 'assets/data/topInstalledCountryListData';

import styles from './TopInstalledCountryList.module.scss';

function TopInstalledCountryList() {

  const [sort, setSort] = useState(null); // null for no sort option is selected, 0 for ascending sort and 1 for descending sort

  function handleSortControlClick() {

    if (sort === null) {
      return setSort(0); // no sort -> ascending sort
    }

    if (sort === 0) {
      return setSort(1); // ascending sort -> descending sort
    }

    return setSort(0); // descending sort -> ascending sort

  }

  function renderCountryItem(country, index) {

    const countryItemAttributes = {
      className: styles.countryItem,
      key: index
    };

    const countryImageAttributes = {
      src: country.flags.svg,
      className: styles.countryImage
    };

    const countryImageAlternativeText = `${country.name.common}-flag`;

    return <div {...countryItemAttributes}>
      <img {...countryImageAttributes} alt={countryImageAlternativeText} />
      <label>{country.name.common}</label>
      <span>{country.downloads}k</span>
    </div>;

  }

  function renderCountryList() {

    const countryList = sortCountryList(sort, topInstalledCountryList);

    return (
      <div className={styles.countryListWrapper}>
        {
          countryList.map((country, index) => (
            renderCountryItem(country, index)
          ))
        }
      </div>
    );

  }

  function renderSectionHeader() {

    const sortControlAttributes = {
      className: styles.sortControl,
      onClick() {
        handleSortControlClick();
      }
    };

    return (
      <div className={styles.sectionHeader}>

        <h5>Top Installed Countries</h5>

        <Tooltip title="sort countries list">
          <IconButton {...sortControlAttributes}>
            <UnfoldMoreIcon />
          </IconButton>
        </Tooltip>

      </div>
    );

  }

  return (
    <div className={styles.topInstalledCountryListContainer}>

      {renderSectionHeader()}

      {renderCountryList()}

    </div>
  );

}

export default TopInstalledCountryList;