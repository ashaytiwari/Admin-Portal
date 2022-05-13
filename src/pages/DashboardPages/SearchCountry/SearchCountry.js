import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from "notistack";

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { setCountryList } from 'redux/actions/common.actions';

import { getCountryList } from 'services/commonServices';

import Loader from 'component/Loader/Loader';
import AutoComplete from 'component/UI/Autocomplete/Autocomplete';
import CountryItem from 'component/Dashboard/SearchCountry/CountryItem/CountryItem';
import CountryView from 'component/Dashboard/SearchCountry/CountryView/CountryView';

import { handleFilterChange } from './utilities';

import styles from './SearchCountry.module.scss';

function SearchCountry() {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const countryData = useSelector((state) => state.common.countryList);

  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState(null);

  useEffect(() => {

    loadCountryList();

    return () => {

      dispatch(setCountryList([]));

    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadCountryList = () => {

    setIsLoading(true);

    getCountryList().then((res) => {

      if (res.status === 200) {

        dispatch(setCountryList(res.data));

        setIsLoading(false);

      } else {

        setIsLoading(false);

        enqueueSnackbar(res.statusText, { variant: "error" });

      }
    });
  };

  if (isLoading === true) {
    return <Loader />;
  }

  function renderCountryView() {

    if (country === null) {
      return;
    }

    const countryViewProperties = {
      country
    };

    return <CountryView {...countryViewProperties} />;
  }

  const autoCompleteProperties = {
    data: countryData,
    RenderElement: CountryItem,
    onSelect(country) {
      setCountry(country);
    },
    onFilter(data, filterKey) {
      return handleFilterChange(data, filterKey);
    }
  };

  return (
    <div className={styles.searchCountryContainer}>

      <div className={'text-center'}>
        <h3 className={styles.searchCountryHeading}>Search Country!!!</h3>
        <p className={styles.searchCountryText}>To see a country details, you can search country by it's name</p>
      </div>

      <div className={styles.searchCountryControlContainer}>
        <SearchOutlinedIcon className={styles.searchIcon} />
        <AutoComplete {...autoCompleteProperties} />
      </div>

      {renderCountryView()}

    </div>
  );
}

export default SearchCountry;