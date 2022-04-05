import React from 'react';

import { useSelector } from 'react-redux';

import FullWidthRectangularCardSkeleton from 'component/SkeletonLoaders/FullWidthRectangularCardSkeleton/FullWidthRectangularCardSkeleton';

import NobelPrizeCard from '../NobelPrizeCard/NobelPrizeCard';
import NobelPrizePagination from '../NobelPrizePagination/NobelPrizePagination';

import styles from './NoblePrizesList.module.scss';

function NoblePrizesList(props) {

  const nobelPrizesList = useSelector((state) => state.common.nobelPrizesData);

  const {
    pageNumber,
    totalPages,
    isLoading,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage
  } = props;

  if (isLoading === true) {
    return <FullWidthRectangularCardSkeleton />;
  }

  function renderNobelPrizeCard(prize, index) {

    const nobelPrizeCardProperties = {
      prize,
      key: index
    };

    return <NobelPrizeCard {...nobelPrizeCardProperties} />;
  }

  const nobelPrizePaginationProperties = {
    pageNumber,
    totalPages,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage
  };

  return (
    <div className={styles.nobelPrizesListContainer}>

      <div className={styles.nobelPrizeList}>
        {
          nobelPrizesList.map((prize, index) => (
            renderNobelPrizeCard(prize, index)
          ))
        }
      </div>

      <NobelPrizePagination {...nobelPrizePaginationProperties} />

    </div>
  );
}

export default NoblePrizesList;