import React, { useState, useEffect } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
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
    page: 0
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

    getInfinitePhotos(rootState.page + 1)
      .then((res) => {

        if (res.status === 200) {

          setRootState((_rootState) => {
            return {
              ..._rootState,
              loading: false,
              photos: [..._rootState.photos, ...res.data],
              page: rootState.page + 1
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
      })
      .catch((exception) => {
        // eslint-disable-next-line no-console
        console.log(exception);
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

  function renderSpinner() {

    if (rootState.loading === false) {
      return;
    }

    return <h4 className={styles.loadingText}>Loading....</h4>;

  }

  function renderList() {

    const infiniteScrollAttributes = {
      dataLength: rootState.photos.length,
      next: loadPhotos,
      hasMore: true,
      loader: renderSpinner(),
      className: styles.photosList
    };

    return (
      <div className={styles.photosListContainer}>
        <InfiniteScroll {...infiniteScrollAttributes}>
          {
            rootState.photos.map((photo, index) => (
              renderPhotoCard(photo, index)
            ))
          }
        </InfiniteScroll>
      </div>
    );

  }

  return (
    <div id={styles.infiniteScrollingMain}>
      {renderHeader()}
      {renderList()}
    </div>
  );

}

export default InfiniteScrolling;