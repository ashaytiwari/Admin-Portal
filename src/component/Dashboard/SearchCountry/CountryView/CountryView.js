import React from 'react';

import GoogleMap from 'assets/images/country/googleMap.png';
import OpenStreetMap from 'assets/images/country/openStreetMap.png';

import styles from './CountryView.module.scss';

function CountryView(props) {

  const { country } = props;

  const latitudeAndLongitude = country.latlng.join(' | ');

  const countryFlagAttributes = {
    src: country.flags.svg,
    className: styles.countryFlag
  };

  function renderLabelAndValue(label, value) {

    return <div className={styles.row}>
      <label className={styles.rowLabel}>{label} :</label>
      <p className={styles.rowValue}>{value}</p>
    </div>;

  }

  function renderTag(label, backgroundColor) {

    const tagAttributes = {
      className: styles.countryTag,
      style: {
        backgroundColor
      }
    };

    return <span {...tagAttributes}>{label}</span>;

  }

  function renderUNMemberTag() {

    if (country.unMember === false) {
      return;
    }

    return renderTag('UN Member', '#82B6D9');

  }

  function renderLandLockedTag() {

    if (country.landlocked === false) {
      return;
    }

    return renderTag('Landlocked Country', '#A0E77D');
  }

  function renderCountryDependencyTag() {

    if (country.independent === false) {
      return renderTag('Dependent Country', '#EED7A1');
    }

    return renderTag('Independent Country', '#ffdc73');
  }

  function renderCountryTags() {

    return <React.Fragment>
      {renderUNMemberTag()}
      {renderLandLockedTag()}
      {renderCountryDependencyTag()}
    </React.Fragment>;

  }

  const navigateToLink = (url) => {

    window.open(url, "_blank");

  };

  const googleMapControlAttributes = {
    className: styles.googleMapControl,
    src: GoogleMap,
    onClick() {
      navigateToLink(country.maps.googleMaps);
    }
  };

  const openStreetMapControlAttributes = {
    className: styles.openStreetMapControl,
    src: OpenStreetMap,
    onClick() {
      navigateToLink(country.maps.openStreetMaps);
    }
  };

  return (
    <div className={styles.countryViewContainer}>

      <div className={styles.header}>
        <h5 className={styles.countryName}>{country.name.official}</h5>
        <img {...countryFlagAttributes} alt={'country-flag'} />
      </div>

      <div className={`d-flex flex-wrap ${styles.tagsContainer}`}>
        {renderCountryTags()}
      </div>

      <div className={styles.countryViewBody}>
        {renderLabelAndValue('Capital', country.capital[0])}
        {renderLabelAndValue('Continent', country.continents[0])}
        {renderLabelAndValue('Latitude and Longitude', latitudeAndLongitude)}
        {renderLabelAndValue('Region', country.region)}
        {renderLabelAndValue('Subregion', country.subregion)}
        {renderLabelAndValue('Population', country.population)}
        {renderLabelAndValue('Start of Week', country.startOfWeek)}
      </div>

      <div className={`d-flex ${styles.footer}`}>
        <img {...googleMapControlAttributes} alt={'google-map-icon'} />
        <img {...openStreetMapControlAttributes} alt={'open-street-map-icon'} />
      </div>

    </div>
  );
}

export default CountryView;