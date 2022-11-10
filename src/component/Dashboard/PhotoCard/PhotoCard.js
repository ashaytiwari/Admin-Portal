import React from 'react';

import styles from './PhotoCard.module.scss';

function PhotoCard(props) {

  const { photo } = props;

  const thumbnailImageAttributes = {
    src: photo.thumbnailUrl,
    className: styles.photoThumbnail
  };

  return (
    <div className={styles.photoCardMain}>
      <img {...thumbnailImageAttributes} alt='thumbnail' />
      <label className={styles.photoText}>{photo.id} - {photo.title}</label>
    </div>
  );

}

export default PhotoCard;