import React, { useState, useRef } from 'react';

import { IconButton } from '@mui/material';

import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import CloseIcon from '@mui/icons-material/Close';

import CreatePDFEditor from 'component/Dashboard/PDFPlayzone/CreatePDFEditor/CreatePDFEditor';
import Button from 'component/UI/Button/Button';
import DialogBox from 'component/UI/DialogBox/DialogBox';
import PDFViewerComponent from 'component/Dashboard/PDFPlayzone/PDFViewer/PDFViewer';

import styles from './PDFPlayzone.module.scss';

function PDFPlayzone() {

  const dialogContainerReference = useRef(null);

  const [displayPDFControls, setDisplayPDFControls] = useState(false);
  const [pdfConfig, setPDFConfig] = useState(null);
  const [displayPDFViewer, setDisplayPDFViewer] = useState(false);

  function createPDF(data) {

    setDisplayPDFControls(true);

    setPDFConfig(data);

  }

  function openPDFViewer() {

    setDisplayPDFViewer(true);

  }

  function renderPDFControls() {

    if (displayPDFControls === false) {
      return;
    }

    return <Button onClick={openPDFViewer}>View PDF</Button>;

  }

  function renderPDFViewer() {

    if (displayPDFViewer === false) {
      return;
    }

    const dialogAttributes = {
      width: 'xl',
      open: displayPDFViewer,
      onClose() {
        setDisplayPDFViewer(false);
      }
    };

    const closeDialogControlAttributes = {
      className: styles.closeDialogControl,
      onClick() {
        setDisplayPDFViewer(false);
      }
    };

    return (
      <div ref={dialogContainerReference}>
        <DialogBox {...dialogAttributes}>

          <div className={styles.dialogHeader}>
            <h3>{pdfConfig.heading}</h3>
            <IconButton {...closeDialogControlAttributes}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className={styles.dialogBody}>
            <PDFViewerComponent data={pdfConfig} />
          </div>

        </DialogBox>
      </div>
    );

  }

  return (
    <div className={styles.pdfPlayzoneContainer}>

      <div className={styles.pdfContentContainer}>
        <h3 className={styles.playzoneHeading}>PDF Playzone</h3>
        <label className={styles.playzoneLabel}>Let's create pdf</label>
        <PictureAsPdfOutlinedIcon className={styles.pdfIcon} />
      </div>

      <CreatePDFEditor onCreate={createPDF} />

      {renderPDFControls()}

      {renderPDFViewer()}

    </div>
  );
}

export default PDFPlayzone;