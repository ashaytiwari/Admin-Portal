import React from 'react';

import Logo from 'assets/images/logo1.png';

import styles from './NewsFeed.module.scss';

function NewsFeed(props) {

  const { news } = props;

  function renderFeedHeader() {

    const logoAttributes = {
      src: Logo,
      className: styles.logo
    };

    return (
      <div className={styles.newsFeedHeader}>

        <div className={styles.logoWrapper}>
          <img {...logoAttributes} alt={'fundo-logo'} />
        </div>

        <div className={styles.headerContent}>
          <label>{news.news_title}</label>
          <span>{news.creation_time}</span>
        </div>

      </div>
    );

  }

  function renderNewsFeedContent() {

    const newsFeedContentImageAttributes = {
      src: news.news_image_signed_url,
      className: styles.newsFeedImage
    };

    return (
      <div className={styles.newsFeedContent}>
        <h5>{news.news_sub_description}</h5>
        <p>{news.news_short_description}</p>
        <img {...newsFeedContentImageAttributes} alt={'new-feed'} />
      </div>
    );

  }

  function renderNewsFeedReadOnControl() {

    const readOnControlAttributes = {
      href: news.news_url,
      className: styles.readOnControl,
      target: '_blank'
    };

    return (
      <div className={styles.newsFeedReadOnControlContainer}>
        <a {...readOnControlAttributes}>Read On</a>
      </div>
    );
  }

  return (
    <div className={styles.newsFeedContainer}>

      {renderFeedHeader()}

      {renderNewsFeedContent()}

      {renderNewsFeedReadOnControl()}

    </div>
  );
}

export default NewsFeed;