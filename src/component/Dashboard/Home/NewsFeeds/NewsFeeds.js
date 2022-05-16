import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from "notistack";

import { getNewsFeedList } from 'services/commonServices';
import { setNewsFeedList } from 'redux/actions/common.actions';

import FullWidthRectangularCardSkeleton from 'component/SkeletonLoaders/FullWidthRectangularCardSkeleton/FullWidthRectangularCardSkeleton';

import NewsFeed from './NewsFeed/NewsFeed';

import styles from './NewsFeeds.module.scss';

function NewsFeeds() {

  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const newsFeedsList = useSelector((state) => state.common.newsFeedList);

  useEffect(() => {

    getNewsFeeds();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getNewsFeeds() {

    setLoading(true);

    getNewsFeedList().then((res) => {

      if (res.data.statuscode === 200) {

        dispatch(setNewsFeedList(res.data.data));

        setLoading(false);

      } else {

        setLoading(false);

        enqueueSnackbar(res.statusText, { variant: "error" });
      }

    });
  }

  function renderNewsFeedCard(news, index) {

    const newsFeedProperties = {
      key: index,
      news
    };

    return <NewsFeed {...newsFeedProperties} />;

  }

  if (loading === true) {
    return <FullWidthRectangularCardSkeleton />;
  }

  return (
    <div className={styles.newsFeedsContainer}>
      {
        newsFeedsList.map((news, index) => (
          renderNewsFeedCard(news, index)
        ))
      }
    </div>
  );
}

export default NewsFeeds;