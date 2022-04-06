import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from "notistack";

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { setCountryList } from 'redux/actions/common.actions';

import { getCountryList } from 'services/commonServices';

import Loader from 'component/Loader/Loader';
import AutoComplete from 'component/UI/Autocomplete/Autocomplete';
import CountryItem from 'component/Dashboard/CountryItem/CountryItem';

import styles from './SearchCountry.module.scss';

function SearchCountry() {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const countryData = useSelector((state) => state.common.countryList);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    loadCountryList();

    return () => {

      dispatch(setCountryList([]));

    };

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

  const autoCompleteProperties = {
    data: countryData,
    RenderElement: CountryItem,
    onSelect(country) {
      console.log(country);
    }
  };

  return (
    <div className={styles.searchCountryContainer}>

      <div className={'text-center'}>
        <h3 className={styles.searchCountryHeading}>Search Country!!!</h3>
        <p className={styles.searchCountryText}>You can search a country by it's name</p>
      </div>

      <div className={styles.searchCountryControlContainer}>
        <SearchOutlinedIcon className={styles.searchIcon} />
        <AutoComplete {...autoCompleteProperties} />
      </div>

    </div>
  );
}

export default SearchCountry;