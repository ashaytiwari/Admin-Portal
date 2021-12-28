import React, { useState, useEffect } from "react";
import styles from "./Pagination.module.scss";
import { IconButton } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

const Pagination = ({ data, dataLimit, RenderComponent, WrapperComponent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);

  console.log(totalPages, "TotalPages");

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / dataLimit));
    if (currentPage === Math.ceil(data.length / dataLimit)) {
      setIsNextDisabled(true);
    } else {
      setIsNextDisabled(false);
    }
  }, [currentPage, data.length, dataLimit]);

  useEffect(() => {
    if (currentPage === 1) {
      setIsPrevDisabled(true);
    } else {
      setIsPrevDisabled(false);
    }
  }, [currentPage]);

  const navigateToFirstPage = () => {
    setCurrentPage(1);
  };

  const navigateToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const navigateToNextPage = () => {
    if (!isNextDisabled) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const navigateToPrevPage = () => {
    if (!isPrevDisabled) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    console.log(startIndex, endIndex);
    return data?.slice(startIndex, endIndex);
  };

  return (
    <div className={styles.wrapper}>
      <WrapperComponent>
        {getPaginatedData()?.map((item, index) => (
          <RenderComponent data={item} />
        ))}
      </WrapperComponent>
      <div className={`${styles.footer} d-flex`}>
        <IconButton onClick={navigateToFirstPage}>
          <FirstPageIcon />
        </IconButton>
        <IconButton onClick={navigateToPrevPage}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <p>
          {currentPage} of {totalPages}
        </p>
        <IconButton onClick={navigateToNextPage}>
          <KeyboardArrowRightIcon />
        </IconButton>
        <IconButton onClick={navigateToLastPage}>
          <LastPageIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Pagination;
