import React from 'react';

import { IconButton } from "@mui/material";

import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import styles from './NobelPrizePagination.module.scss';

function NobelPrizePagination(props) {

  const { pageNumber, totalPages, onNextPage, onPreviousPage, onFirstPage, onLastPage } = props;

  const firstPageButtonAttributes = {
    onClick: onFirstPage,
    className: styles.actionBtn
  };

  const previousPageButtonAttributes = {
    onClick: onPreviousPage,
    className: styles.actionBtn
  };

  const nextPageButtonAttributes = {
    onClick: onNextPage,
    className: styles.actionBtn
  };

  const lastPageButtonAttributes = {
    onClick: onLastPage,
    className: styles.actionBtn
  };

  return (
    <div className={styles.nobelPrizePaginationContainer}>

      <IconButton {...firstPageButtonAttributes}>
        <FirstPageIcon />
      </IconButton>

      <IconButton {...previousPageButtonAttributes}>
        <KeyboardArrowLeftIcon />
      </IconButton>

      <p className={styles.infoText}>{pageNumber} of {totalPages} Pages</p>

      <IconButton {...nextPageButtonAttributes}>
        <KeyboardArrowRightIcon />
      </IconButton>

      <IconButton {...lastPageButtonAttributes}>
        <LastPageIcon />
      </IconButton>

    </div>
  );
}

export default NobelPrizePagination;