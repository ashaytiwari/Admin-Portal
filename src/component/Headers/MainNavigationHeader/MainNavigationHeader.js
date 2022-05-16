import React, { useState, useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from "notistack";

import { IconButton, Skeleton } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { getUserProfileInformation } from 'services/profileServices';

import useOnClickOutside from 'utilities/hooks/useOnClickOutside';
import { getLocalStorage } from 'utilities/globalFunctions/globalFunctions';

import { setUserProfile } from 'redux/actions/profile.actions';

import NotificationPopup from './NotificationPopup/NotificationPopup';
import ProfilePopup from './ProfilePopup/ProfilePopup';

import styles from './MainNavigationHeader.module.scss';

function MainNavigationHeader() {

  const userProfile = getLocalStorage();

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const notificationControlContainerReference = useRef(null);
  const profileControlContainerReference = useRef(null);

  const [displayNotificationPopup, setDisplayNotificationPopup] = useState(false);
  const [displayProfilePopup, setDisplayProfilePopup] = useState(false);

  const profileDetails = useSelector((state) => state.profile.userProfile);

  useEffect(() => {

    getUserProfile();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function closeNotificationPopup() {

    setDisplayNotificationPopup(false);

  }

  useOnClickOutside(notificationControlContainerReference, closeNotificationPopup);

  function getUserProfile() {

    getUserProfileInformation(userProfile.admin_id).then((res) => {

      if (res.data.statuscode === 200) {

        dispatch(setUserProfile(res.data.data));

      } else {

        enqueueSnackbar(res.statusText, { variant: "error" });

      }
    });
  }

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

  function renderProfileControl() {

    const profileControlAttributes = {
      className: styles.profileControlContainer,
      ref: profileControlContainerReference
    };

    const profileImageSkeletonProperties = {
      animation: "wave",
      variant: "rectangular",
      className: styles.profileImageSkeleton
    };

    const profileImageAttributes = {
      className: styles.profileImage,
      src: profileDetails[0]?.profile_signed_url,
      onClick() {
        setDisplayProfilePopup((_displayProfilePopup) => !_displayProfilePopup);
      }
    };

    const profileImageAlternativeText = `${profileDetails[0]?.user_name} profile`;

    return (
      <div {...profileControlAttributes}>

        {
          profileDetails.length === 0 ?
            <Skeleton {...profileImageSkeletonProperties} /> :
            (
              <div className={styles.profileImageWrapper}>
                <img alt={profileImageAlternativeText} {...profileImageAttributes} />
              </div>
            )
        }

        {displayProfilePopup && <ProfilePopup />}
      </div>
    );

  }

  return (
    <div className={styles.mainNavigationHeader}>

      {renderHeaderText()}

      <div className={styles.headerControls}>

        {renderNotificationControl()}

        {renderProfileControl()}

      </div>

    </div>
  );

}

export default MainNavigationHeader;