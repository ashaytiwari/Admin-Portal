import React from 'react';

import { useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import ProfileWallpaper from 'assets/images/wallpaper.webp';

import styles from './Profile.module.scss';

function Profile() {

  const profileDetails = useSelector((state) => state.profile.userProfile);
  const profileDetail = profileDetails[0];

  function renderProfileImageSection() {

    const profileImageAttributes = {
      className: styles.profileImage,
      src: profileDetail?.profile_signed_url
    };

    return (
      <div className={styles.profileImageOuterContainer}>

        <div className={styles.profileImageInnerContainer}>

          <img alt={'profile'} {...profileImageAttributes} />

          <div className={styles.overlayContent}>
            <IconButton className={styles.editControl}>
              <EditIcon fontSize='large' />
            </IconButton>
          </div>

        </div>

      </div>
    );
  }

  function renderProfileInfoSection() {

    const wallpaperImageAttributes = {
      className: styles.profileWallpaper,
      src: ProfileWallpaper
    };

    return (
      <div className={styles.profileInfoSection}>

        <img {...wallpaperImageAttributes} alt={'profile-wallpaper'} />

        {renderProfileImageSection()}

        <div className={styles.profileNameAndEmail}>
          <h5>{profileDetail?.user_name}</h5>
          <span>{profileDetail?.email_id}</span>
        </div>

      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      {renderProfileInfoSection()}
    </div>
  );

}

export default Profile;