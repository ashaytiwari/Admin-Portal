import React from 'react';

import { Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import styles from './TestimonialCard.module.scss';

function TestimonialCard(props) {

  const { testimonial } = props;

  const profilePictureAttributes = {
    src: testimonial?.avatar,
    className: styles.profilePicture
  };

  const profilePictureDescription = `${testimonial?.name} Profile Picture`;

  const ratingProperties = {
    name: 'read-only',
    value: testimonial?.rating,
    readOnly: true,
    sx: {
      "& .MuiRating-iconEmpty": {
        color: '#637381'
      }
    }
  };

  return (
    <div className={styles.testimonialCardContainer}>

      <div className={styles.profilePictureContainer}>
        <img {...profilePictureAttributes} alt={profilePictureDescription} />
      </div>

      <div className={styles.authorInfoWrapper}>
        <h4 className={styles.authorName}>{testimonial?.name}</h4>
        <span className={styles.authorPosition}>{testimonial?.designation} {testimonial?.location}</span>
        <Rating {...ratingProperties} />
      </div>

      <div className={styles.divider}></div>

      <div className={styles.authorMessageWrapper}>
        <FormatQuoteIcon className={styles.quoteIcon} />
        <p className={styles.authorMessage}>{testimonial?.message}</p>
      </div>

    </div>
  )
}

export default TestimonialCard;