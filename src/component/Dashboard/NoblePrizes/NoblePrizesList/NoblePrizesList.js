import React from 'react';

import { useSelector } from 'react-redux';

import FullWidthRectangularCardSkeleton from 'component/SkeletonLoaders/FullWidthRectangularCardSkeleton/FullWidthRectangularCardSkeleton';

import NobelPrizeCard from '../NobelPrizeCard/NobelPrizeCard';

import styles from './NoblePrizesList.module.scss';

function NoblePrizesList(props) {

  const nobelPrizesList = useSelector((state) => state.common.nobelPrizesData);

  const { pageNumber, totalPages, isLoading, onNextPage, onPreviousPage } = props;

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

  return (
    <div className={styles.nobelPrizesListContainer}>
      {
        nobelPrizesList.map((prize, index) => (
          renderNobelPrizeCard(prize, index)
        ))
      }
    </div>
  );
}

export default NoblePrizesList;