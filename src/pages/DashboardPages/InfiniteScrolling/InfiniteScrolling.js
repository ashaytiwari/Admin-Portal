import React, { useState, useEffect } from 'react';

import { useSnackbar } from 'notistack';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

import { getInfinitePhotos } from 'services/commonServices';

import PhotoCard from 'component/Dashboard/PhotoCard/PhotoCard';

import styles from './InfiniteScrolling.module.scss';

function InfiniteScrolling() {

  const { enqueueSnackbar } = useSnackbar();

  const [rootState, setRootState] = useState({
    loading: false,
    photos: [],
    page: 1
  });

  useEffect(() => {

    loadPhotos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadPhotos() {

    setRootState((_rootState) => {
      return {
        ..._rootState,
        loading: true
      };
    });

    getInfinitePhotos(rootState.page).then((res) => {

      if (res.status === 200) {

        setRootState((_rootState) => {
          return {
            ..._rootState,
            loading: false,
            photos: res.data
          };
        });

      } else {

        setRootState((_rootState) => {
          return {
            ..._rootState,
            loading: false
          };
        });

        enqueueSnackbar(res.statusText, { variant: "error" });

      }
    });

  }

  function renderHeader() {

    return (
      <div className={styles.header}>
        <h4>Infinite Scrolling Demo</h4>
        <AllInclusiveIcon className={styles.infiniteIcon} />
      </div>
    );

  }

  function renderPhotoCard(photo, index) {

    const photoCardAttributes = {
      key: index,
      photo
    };

    return <PhotoCard {...photoCardAttributes} />;

  }

  function renderList() {

    return (
      <div className={styles.photosList}>
        {
          rootState.photos.map((photo, index) => (
            renderPhotoCard(photo, index)
          ))
        }
      </div>
    );

  }

  // if (rootState.loading === true) {
  //   return ;
  // }

  return (
    <div id={styles.infiniteScrollingMain}>
      {renderHeader()}
      {renderList()}
    </div>
  );

}

export default InfiniteScrolling;