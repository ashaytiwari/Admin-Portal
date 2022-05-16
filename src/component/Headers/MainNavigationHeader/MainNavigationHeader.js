import React, { useState, useRef } from 'react';

import { IconButton } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import useOnClickOutside from 'utilities/hooks/useOnClickOutside';

import NotificationPopup from './NotificationPopup/NotificationPopup';

import styles from './MainNavigationHeader.module.scss';

function MainNavigationHeader() {

  const notificationControlContainerReference = useRef(null);

  const [displayNotificationPopup, setDisplayNotificationPopup] = useState(false);

  function closeNotificationPopup() {

    setDisplayNotificationPopup(false);

  }

  useOnClickOutside(notificationControlContainerReference, closeNotificationPopup);

  function renderHeaderText() {

    return <h5 className={styles.headerText}>Fundo | The Fun play zone</h5>;

  }

  function renderNotificationControl() {

    const notificationControlAttributes = {
      className: styles.notificationControl,
      onClick() {
        setDisplayNotificationPopup((_displayNotificationPopup) => !_displayNotificationPopup);
      }
    };

    const notificationControlContainerAttributes = {
      className: styles.notificationControlContainer,
      ref: notificationControlContainerReference
    };

    return (
      <div {...notificationControlContainerAttributes}>

        <IconButton {...notificationControlAttributes}>
          <NotificationsNoneOutlinedIcon />
        </IconButton>

        {displayNotificationPopup && <NotificationPopup />}

      </div>
    );

  }

  return (
    <div className={styles.mainNavigationHeader}>

      {renderHeaderText()}

      <div className={styles.headerControls}>

        {renderNotificationControl()}

      </div>

    </div>
  );

}

export default MainNavigationHeader;