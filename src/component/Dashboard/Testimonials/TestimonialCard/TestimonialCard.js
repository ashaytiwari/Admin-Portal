import React, { useEffect, useState } from 'react';

import { IconButton, Rating, Tooltip } from '@mui/material';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import styles from './TestimonialCard.module.scss';

function TestimonialCard(props) {

  const { testimonial } = props;
  const testimonialAudio = testimonial?.audio;

  const [audioPlaying, setAudioPlaying] = useState(false);

  const [audio, setAudio] = useState(null);

  useEffect(() => {

    if (audio === null) {
      return;
    }

    audio.addEventListener('ended', () => pauseAudio());

    return () => {
      audio.removeEventListener('ended', () => pauseAudio());
      pauseAudio();
    }

  }, [audio]);

  useEffect(() => {

    if (testimonialAudio) {
      setAudio(new Audio(testimonialAudio));
    }

    setAudioPlaying(false);

  }, [testimonialAudio]);

  const handleAudioControlClick = () => {

    if (audioPlaying === true) {
      pauseAudio();
    } else {
      playAudio();
    }

  }

  const playAudio = () => {

    audio.play();
    setAudioPlaying(true);

  }

  const pauseAudio = () => {

    audio.pause();
    setAudioPlaying(false);

  }

  console.log(audio);

  const profilePictureAttributes = {
    src: testimonial?.avatar,
    className: styles.profilePicture
  };

  const profilePictureDescription = `${testimonial?.name} Profile Picture`;

  const ratingProperties = {
    name: 'read-only',
    value: testimonial?.rating || 4,
    readOnly: true,
    sx: {
      "& .MuiRating-iconEmpty": {
        color: '#637381'
      }
    }
  };

  const audioToggleControlProperties = {
    className: styles.audioToggleControl,
    onClick: handleAudioControlClick
  };

  let audioToggleControlTooltip = 'Play audio';

  if (audioPlaying === true) {
    audioToggleControlTooltip = 'Pause audio';
  }


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

      <div className={styles.audioControlWrapper}>
        <Tooltip title={audioToggleControlTooltip}>
          <IconButton {...audioToggleControlProperties}>
            {audioPlaying === true ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </Tooltip>
      </div>

    </div>
  )
}

export default TestimonialCard;