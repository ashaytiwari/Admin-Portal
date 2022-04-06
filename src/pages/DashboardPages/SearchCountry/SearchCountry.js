import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from "notistack";

import { setCountryList } from 'redux/actions/common.actions';

import { getCountryList } from 'services/commonServices';

import styles from './SearchCountry.module.scss';

function SearchCountry() {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

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

  return (
    <div>SearchCountry</div>
  );
}

export default SearchCountry;