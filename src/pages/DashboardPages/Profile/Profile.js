import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import ProfileEditor from 'component/Dashboard/ProfileEditor/ProfileEditor';

import ProfileWallpaper from 'assets/images/wallpaper.webp';

import styles from './Profile.module.scss';

function Profile() {

  const [displayEditProfileImageEditor, setDisplayEditProfileImageEditor] = useState(false);

  const profileDetails = useSelector((state) => state.profile.userProfile);
  const profileDetail = profileDetails[0];

  function renderProfileImageSection() {

    const profileImageAttributes = {
      className: styles.profileImage,
      src: profileDetail?.profile_signed_url
    };

    const editorControlAttributes = {
      className: styles.editControl,
      onClick() {
        setDisplayEditProfileImageEditor((_displayEditor) => !_displayEditor);
      }
    };

    return (
      <div className={styles.profileImageOuterContainer}>

        <div className={styles.profileImageInnerContainer}>

          <img alt={'profile'} {...profileImageAttributes} />

          <div className={styles.overlayContent}>
            <IconButton {...editorControlAttributes}>
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

  function renderEditProfileEditor() {

    if (displayEditProfileImageEditor === false) {
      return;
    }

    const profileEditorProperties = {
      open: displayEditProfileImageEditor,
      profile: profileDetail,
      onClose(event) {
        setDisplayEditProfileImageEditor(false);
      }
    };

    return <ProfileEditor {...profileEditorProperties} />;

  }

  return (
    <div className={styles.profileContainer}>

      {renderProfileInfoSection()}

      {renderEditProfileEditor()}

    </div>
  );

}

export default Profile;