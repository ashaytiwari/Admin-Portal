import React, { useState } from 'react';

import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Cropper } from 'react-cropper';
import { useSnackbar } from "notistack";
import { BeatLoader } from 'react-spinners';

import DialogBox from 'component/UI/DialogBox/DialogBox';
import Button from 'component/UI/Button/Button';

import { convertDataURLToFile, getLocalStorage } from 'utilities/globalFunctions/globalFunctions';

import { updateUserProfile, uploadFile } from 'services/profileServices';

import styles from './ProfileEditor.module.scss';
import "cropperjs/dist/cropper.css";

function ProfileEditor(props) {

  const { open, profile, onClose, onUpdate } = props;

  const { enqueueSnackbar } = useSnackbar();

  const user = getLocalStorage();

  const [displayCropImageControl, setDisplayCropImageControl] = useState(false);
  const [image, setImage] = useState(null);
  const [cropper, setCropper] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleUploadImageControlClick() {

    document.getElementById("file-input").click();

  }

  function handleImageUpload(event) {

    event.preventDefault();

    let files;

    setDisplayCropImageControl(true);

    if (event.dataTransfer) {
      files = event.dataTransfer.files;
    } else if (event.target) {
      files = event.target.files;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(files[0]);

  }

  function getCropData() {

    if (cropper === null) {
      return;
    }

    const croppedImageDataURL = cropper.getCroppedCanvas().toDataURL();
    const croppedImageFile = convertDataURLToFile(croppedImageDataURL);

    return croppedImageFile;

  };

  function handleCancelControlClick() {

    setDisplayCropImageControl(false);
    setImage(null);
    setCropper(null);

  }

  function handleUpdateControlClick() {

    setIsLoading(true);

    const imageFile = getCropData();

    const imageFileBlob = new FormData();
    imageFileBlob.append("file", imageFile);

    uploadFile(imageFileBlob).then((res) => {

      if (res.data.statuscode === 200) {

        updateUserProfileImage(res.data.data);

      } else {

        setIsLoading(false);
        enqueueSnackbar(res.data.message, { variant: "error" });

      }
    });

  }

  function updateUserProfileImage(response) {

    const profileImageData = response[0];

    const param = {
      profile_unique_name: profileImageData.unique_file_name,
      profile_name: profileImageData.file_name,
      user_id: user.admin_id,
      actionby_id: user.admin_id
    };

    updateUserProfile(param).then((res) => {

      if (res.data.statuscode === 200) {
        setIsLoading(true);
        onUpdate();
        enqueueSnackbar(res.data.message, { variant: "success" });
      } else {
        setIsLoading(true);
        enqueueSnackbar(res.data.message, { variant: "error" });
      }

    });

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

    const cropperAttributes = {
      className: styles.profileImageCropper,
      zoomTo: 0.5,
      initialAspectRatio: 1,
      preview: '.img-preview',
      viewMode: 1,
      minCropBoxHeight: 10,
      minCropBoxWidth: 30,
      background: false,
      responsive: true,
      autoCropArea: 1,
      checkOrientation: false,
      guides: true,
      src: image,
      zoomOnWheel: false,
      onInitialized(instance) {
        setCropper(instance);
      }
    };

    const cancelButtonAttributes = {
      className: styles.cancelButton,
      onClick: handleCancelControlClick
    };

    const updateButtonControlClick = {
      className: styles.updateButton,
      onClick: handleUpdateControlClick
    };

    return (
      <div className={styles.cropImageContainer}>

        <Cropper {...cropperAttributes} />

        <div className={styles.updateImageContainer}>
          <Button {...cancelButtonAttributes}>Cancel</Button>
          <Button {...updateButtonControlClick}>Update</Button>
        </div>

      </div>
    );
  }

  function renderDialogContentBody() {

    return (
      <div className={styles.dialogContentBody}>

        {displayCropImageControl ? renderCropImageControl() : renderProfileImageControl()}

      </div>
    );

  }

  function renderDialogContent() {

    if (isLoading === true) {
      return (
        <div className={styles.spinnerContainer}>
          <BeatLoader size={25} color="#0898fc" />
        </div>
      );
    }

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