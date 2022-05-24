import React, { useState } from 'react';

import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import DialogBox from 'component/UI/DialogBox/DialogBox';

import styles from './ProfileEditor.module.scss';

function ProfileEditor(props) {

  const { open, profile, onClose } = props;

  const [displayCropImageControl, setDisplayCropImageControl] = useState(false);

  function handleUploadImageControlClick() {

    document.getElementById("file-input").click();

  }

  function handleImageUpload(event) {

    setDisplayCropImageControl(true);
    console.log(event);

  }

  function renderDialogHeader() {

    const closeDialogControlAttributes = {
      className: styles.dialogCloseControl,
      onClick: onClose
    };

    return (
      <div className={styles.dialogHeader}>
        <h5>Profile</h5>
        <IconButton {...closeDialogControlAttributes}>
          <CloseIcon />
        </IconButton>
      </div>
    );
  }

  function renderProfileImageControl() {

    const profileImageAttributes = {
      src: profile?.profile_signed_url,
      className: styles.profileImage
    };

    const fileInputAttributes = {
      id: 'file-input',
      type: 'file',
      style: {
        display: 'none'
      },
      accept: 'image/*',
      onChange(event) {
        handleImageUpload(event);
      }
    };

    const uploadImageControlAttributes = {
      className: styles.uploadImageControl,
      onClick: handleUploadImageControlClick
    };

    return (
      <div className={styles.profileImageControl}>

        <div className={styles.profileImageWrapper}>
          <img {...profileImageAttributes} alt={'profile'} />
        </div>

        <button {...uploadImageControlAttributes}>Upload Image</button>
        <input {...fileInputAttributes} />

      </div>
    );
  }

  function renderCropImageControl() {

  }

  function renderDialogContentBody() {

    return (
      <div className={styles.dialogContentBody}>

        {displayCropImageControl ? renderCropImageControl() : renderProfileImageControl()}

      </div>
    );

  }

  function renderDialogContent() {

    return (
      <div className={styles.dialogContentContainer}>

        {renderDialogHeader()}

        {renderDialogContentBody()}

      </div>
    );
  }

  const dialogBoxProperties = {
    width: 'md',
    open,
    onClose
  };

  return (
    <DialogBox {...dialogBoxProperties}>
      {renderDialogContent()}
    </DialogBox>
  );
}

export default ProfileEditor;