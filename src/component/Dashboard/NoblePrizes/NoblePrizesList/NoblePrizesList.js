import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import FullWidthRectangularCardSkeleton from 'component/SkeletonLoaders/FullWidthRectangularCardSkeleton/FullWidthRectangularCardSkeleton';

import NobelPrizeCard from '../NobelPrizeCard/NobelPrizeCard';
import NobelPrizePagination from '../NobelPrizePagination/NobelPrizePagination';

import { ReactComponent as NoContentFoundIcon } from 'assets/images/noContentIcon.svg';

import styles from './NoblePrizesList.module.scss';
import Button from 'component/UI/Button/Button';

function NoblePrizesList(props) {

  const navigate = useNavigate();

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

  function renderNoItemsFoundContent() {

    const goToFirstPageControlAttributes = {
      onClick() {
        navigate('/dashboard/nobelPrizes/1');
      }
    };

    return <div className={styles.noItemsFoundContainer}>

      <div className={`text-center ${styles.noItemsFoundContent}`}>
        <NoContentFoundIcon className={styles.noItemsFoundImage} />
        <h4 className={styles.noItemsFoundText}>Nothing to show here yet!</h4>
        <Button {...goToFirstPageControlAttributes}>Go to a First Page</Button>
      </div>

    </div>;

  }

  function renderNobelPrizeListContent() {

    if (nobelPrizesList.length === 0) {
      return renderNoItemsFoundContent();
    }

    const nobelPrizePaginationProperties = {
      pageNumber,
      totalPages,
      onNextPage,
      onPreviousPage,
      onFirstPage,
      onLastPage
    };

    return <React.Fragment>

      <div className={styles.nobelPrizeList}>
        {
          nobelPrizesList.map((prize, index) => (
            renderNobelPrizeCard(prize, index)
          ))
        }
      </div>

      <NobelPrizePagination {...nobelPrizePaginationProperties} />

    </React.Fragment>;
  }

  return (
    <div className={styles.nobelPrizesListContainer}>

      {renderNobelPrizeListContent()}

    </div>
  );
}

export default NoblePrizesList;