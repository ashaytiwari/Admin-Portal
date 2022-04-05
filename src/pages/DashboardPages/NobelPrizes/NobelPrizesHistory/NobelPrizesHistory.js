import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

import { getNobelPrizesListByPageNumber } from 'services/commonServices';
import { setNobelPrizesData } from 'redux/actions/common.actions';

import BackNavigationSubHeader from 'component/Headers/BackNavigationSubHeader/BackNavigationSubHeader';
import NobelPrizesList from 'component/Dashboard/NoblePrizes/NoblePrizesList/NoblePrizesList';

import NoblePrizeLogo from 'assets/images/noblePrize/nobelPrizeLogo.png';

import styles from './NobelPrizesHistory.module.scss';

function NobelPrizesHistory() {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();
  const pageId = params.id;

  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(pageId);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {

    getNobelPrizesData();

    return () => {
      dispatch(setNobelPrizesData([]));
    };

  }, [dispatch]);

  const getNobelPrizesData = () => {

    let page = pageNumber;
    const pageOffset = (--page) * 25;

    setIsLoading(true);

    getNobelPrizesListByPageNumber(pageOffset).then((res) => {
      console.log(res);
      if (res.status === 200) {

        const data = res.data;
        const _totalPages = Math.ceil(data.meta.count / 25);

        setTotalPages(_totalPages);
        setIsLoading(false);

        dispatch(setNobelPrizesData(data.nobelPrizes));

      }
      else {

        setIsLoading(false);

        enqueueSnackbar(res.statusText, { variant: "error" });

      }
    });

  };

  const handleNextPageNavigation = () => {

    let page = pageNumber;

    if (page === totalPages) {
      page = -1;
    }

    page++;

    setPageNumber(page);

  };

  const handlePreviousPageNavigation = () => {

    let page = pageNumber;

    if (page === 1) {
      page = totalPages;
    }

    page--;

    setPageNumber(page);

  };

  const backNavigationSubHeaderProperties = {
    title: 'Nobel Prizes',
    src: NoblePrizeLogo
  };

  const nobelPrizesListProperties = {
    pageNumber,
    totalPages,
    isLoading,
    onNextPage: handleNextPageNavigation,
    onPreviousPage: handlePreviousPageNavigation
  };

  return (
    <div>

      <BackNavigationSubHeader {...backNavigationSubHeaderProperties} />

      <NobelPrizesList {...nobelPrizesListProperties} />

    </div>
  );
}

export default NobelPrizesHistory;