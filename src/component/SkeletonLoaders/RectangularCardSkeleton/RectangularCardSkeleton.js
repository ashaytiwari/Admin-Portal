import React from "react";
import { Skeleton } from "@mui/material";
import styles from "./RectangularCardSkeleton.module.scss";

const RectangularCardSkeleton = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={"row"}>
      {array.map((item, index) => (
        <div className={`col-md-4 ${styles.wrapper}`} key={index}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            className={styles.cardSkeleton}
          />
        </div>
      ))}
    </div>
  );
};

export default RectangularCardSkeleton;
