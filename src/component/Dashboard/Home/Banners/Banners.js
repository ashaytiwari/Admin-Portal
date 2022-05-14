import React from 'react';

import { Carousel } from 'react-bootstrap';
import IosShareIcon from '@mui/icons-material/IosShare';

import { bannerData } from 'assets/data/bannerData';

import styles from './Banners.module.scss';

function Banners() {

  function handleCarouselNavigationControlClick(banner) {

    window.open(banner.url, "_blank");

  }

  function renderBannerItem(banner, index) {

    const carouselItemProperties = {
      className: styles.carouselItem,
      key: index
    };

    const carouselImageProperties = {
      src: banner.imageURL,
      className: styles.carouselImage
    };

    const carouselNavigationControlAttributes = {
      className: styles.carouselNavigationControl,
      onClick() {
        handleCarouselNavigationControlClick(banner);
      }
    };

    return (
      <Carousel.Item {...carouselItemProperties}>

        <img {...carouselImageProperties} alt={banner.title} />

        <Carousel.Caption className={styles.carouselCaption}>
          <h3 className={styles.carouselTitle}>{banner.title}
            <IosShareIcon {...carouselNavigationControlAttributes} />
          </h3>
        </Carousel.Caption>

      </Carousel.Item>
    );

  }

  const carouselProperties = {
    indicators: false,
    interval: 4000,
    className: styles.carousel
  };

  return (

    <Carousel {...carouselProperties}>
      {
        bannerData.map((banner, index) => (
          renderBannerItem(banner, index)
        ))
      }
    </Carousel>

  );
}

export default Banners;