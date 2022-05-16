import React from 'react';

import { Skeleton } from '@mui/material';

import styles from './FullWidthRectangularCardSkeleton.module.scss';

function FullWidthRectangularCardSkeleton() {

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const skeletonProperties = {
    animation: 'wave',
    variant: 'rectangular',
    className: styles.cardSkeleton
  };

  return (
    <div className={styles.fullWidthRectangularCardSkeletonContainer}>
      {
        array.map((item, index) => (
          <Skeleton {...skeletonProperties} key={index} />
        ))
      }
    </div>
  );
}

export default FullWidthRectangularCardSkeleton;