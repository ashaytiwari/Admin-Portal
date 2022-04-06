import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import { getNobelPrizesListByPageNumber } from 'services/commonServices';
import { setNobelPrizesData } from 'redux/actions/common.actions';

import BackNavigationSubHeader from 'component/Headers/BackNavigationSubHeader/BackNavigationSubHeader';
import NobelPrizesList from 'component/Dashboard/NoblePrizes/NoblePrizesList/NoblePrizesList';

import NoblePrizeLogo from 'assets/images/noblePrize/nobelPrizeLogo.png';

function NobelPrizesHistory() {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();
  const navigate = useNavigate();

  const pageNumber = params.id;

  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {

    scrollToTop();

    getNobelPrizesData();

    return () => {
      dispatch(setNobelPrizesData([]));
    };

  }, [dispatch, pageNumber]);

  const scrollToTop = () => {

    window.scrollTo(0, 0);

  };

  const getNobelPrizesData = () => {

    let page = pageNumber;
    const pageOffset = (--page) * 25;

    setIsLoading(true);

    getNobelPrizesListByPageNumber(pageOffset).then((res) => {

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

    if (+page === totalPages) {
      page = 0;
    }

    page++;

    navigatePage(page);

  };

  const handlePreviousPageNavigation = () => {

    let page = pageNumber;

    if (+page === 1) {
      page = totalPages + 1;
    }

    page--;

    navigatePage(page);

  };

  const handleFirstPageNavigation = () => {

    let page = 1;

    navigatePage(page);

  };

  const handleLastPageNavigation = () => {

    let page = totalPages;

    navigatePage(page);

  };

  const navigatePage = (page) => {

    navigate(`/dashboard/nobelPrizes/${page}`);

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
    onPreviousPage: handlePreviousPageNavigation,
    onFirstPage: handleFirstPageNavigation,
    onLastPage: handleLastPageNavigation
  };

  return (
    <div>

      <BackNavigationSubHeader {...backNavigationSubHeaderProperties} />

      <NobelPrizesList {...nobelPrizesListProperties} />

    </div>
  );
}

export default NobelPrizesHistory;