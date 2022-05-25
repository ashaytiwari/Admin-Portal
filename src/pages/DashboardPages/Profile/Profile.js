import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import ProfileEditor from 'component/Dashboard/ProfileEditor/ProfileEditor';

import { getUserProfileInformation } from 'services/profileServices';

import { getLocalStorage } from 'utilities/globalFunctions/globalFunctions';

import { setUserProfile } from 'redux/actions/profile.actions';

import ProfileWallpaper from 'assets/images/wallpaper.webp';

import styles from './Profile.module.scss';

function Profile() {

  const userProfile = getLocalStorage();

  const dispatch = useDispatch();

  const [displayEditProfileImageEditor, setDisplayEditProfileImageEditor] = useState(false);

  const profileDetails = useSelector((state) => state.profile.userProfile);
  const profileDetail = profileDetails[0];

  function updateProfile() {

    getUserProfileInformation(userProfile.admin_id).then((res) => {

      if (res.data.statuscode === 200) {

        dispatch(setUserProfile(res.data.data));

        setDisplayEditProfileImageEditor(false);

      }
    });
  }

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
      },
      onUpdate: updateProfile
    };

    return <ProfileEditor {...profileEditorProperties} />;

  }

  if (typeof profileDetail === 'undefined') {
    return <div></div>;
  }

  return (
    <div className={styles.profileContainer}>

      {renderProfileInfoSection()}

      {renderEditProfileEditor()}

    </div>
  );

}

export default Profile;