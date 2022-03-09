import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import TestimonialCard from '../TestimonialCard/TestimonialCard';

import styles from './TestimonialsContainer.module.scss';

function TestimonialsContainer() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const testimonials = useSelector((state) => state.common.testimonialData);

  const handlePreviousControl = () => {

    let currentIndex = selectedIndex;

    if (selectedIndex === 0) {
      currentIndex = testimonials.length;
    }

    currentIndex--;

    setSelectedIndex(currentIndex);

  }

  const handleNextControl = () => {

    let currentIndex = selectedIndex;

    if (currentIndex === testimonials.length - 1) {
      currentIndex = -1;
    }

    currentIndex++;

    setSelectedIndex(currentIndex);

  }

  const testimonialPreviousControlAttributes = {
    className: styles.testimonialNavigationControl,
    onClick: handlePreviousControl,
  };

  const testimonialNextControlAttributes = {
    className: styles.testimonialNavigationControl,
    onClick: handleNextControl
  };

  const testimonialCardProperties = {
    testimonial: testimonials[selectedIndex]
  };

  return (
    <div className="row">
      <div className="col-md-2 text-center">
        <IconButton {...testimonialPreviousControlAttributes}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </div>
      <div className="col-md-8">
        <TestimonialCard {...testimonialCardProperties} />
      </div>
      <div className="col-md-2 text-center">
        <IconButton {...testimonialNextControlAttributes}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default TestimonialsContainer;