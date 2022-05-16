import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { openPlatformSettings } from 'event-system';

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { removeDataFromLocalStorage } from 'utilities/globalFunctions/globalFunctions';

import styles from './ProfilePopup.module.scss';

function ProfilePopup(props) {

  const { onClose } = props;

  const navigate = useNavigate();

  const profileDetails = useSelector((state) => state.profile.userProfile);
  const profileDetail = profileDetails[0];

  function navigationHandler(path) {

    onClose();

    navigate(path);

  }

  function handleSettingsControlClick() {

    onClose();

    document.dispatchEvent(openPlatformSettings);

  }

  function logoutHandler() {

    removeDataFromLocalStorage();

    navigationHandler('/login');

  }

  function renderDashedBorder() {

    return <div className={styles.dashedBorder}></div>;

  }

  function renderProfileDetails() {

    return (
      <div className={styles.profileDetails}>
        <label>{profileDetail.user_name}</label>
        <span>{profileDetail.email_id}</span>
      </div>
    );
  }

  function renderProfilePopupOptions() {

    const homeControlAttributes = {
      className: styles.profilePopupOption,
      onClick() {
        navigationHandler('/dashboard');
      }
    };

    const profileControlAttributes = {
      className: styles.profilePopupOption,
      onClick() {
        navigationHandler('/dashboard/profile');
      }
    };

    const settingsControlAttributes = {
      className: styles.profilePopupOption,
      onClick() {
        handleSettingsControlClick();
      }
    };

    return (
      <div className={styles.profilePopupOptions}>

        <div {...homeControlAttributes}>
          <span>Home</span>
        </div>

        <div {...profileControlAttributes}>
          <span>Profile</span>
        </div>

        <div {...settingsControlAttributes}>
          <span>Settings</span>
        </div>
      </div>
    );
  }

  function renderLogoutControl() {

    const logoutControlAttributes = {
      className: styles.logoutControl,
      onClick: logoutHandler
    };

    return (
      <div {...logoutControlAttributes}>
        <LogoutOutlinedIcon className={styles.logoutIcon} />
        <span>Logout</span>
      </div>
    );

  }

  return (
    <div className={styles.profilePopupContainer}>

      {renderProfileDetails()}

      {renderDashedBorder()}

      {renderProfilePopupOptions()}

      {renderDashedBorder()}

      {renderLogoutControl()}

    </div>
  );

}

export default ProfilePopup;