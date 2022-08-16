import React from 'react';

import { useNavigate } from 'react-router-dom';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';

import styles from './PDFPlayzone.module.scss';

function PDFPlayzone() {

  const navigate = useNavigate();

  function renderPlayzoneControl(heading, Icon, path) {

    const playzoneControlAttributes = {
      className: styles.playzoneControl,
      onClick() {
        navigate(path);
      }
    };

    return (
      <div {...playzoneControlAttributes}>
        <div className={styles.controlHeader}>
          <h6>{heading}</h6>
        </div>
        <div className={styles.controlBody}>
          <Icon className={styles.playzoneIcon} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pdfPlayzoneContainer}>

      <h3 className={styles.playzoneHeading}>PDF Playzone</h3>

      <div className={styles.playzoneControls}>
        {renderPlayzoneControl('Create PDF', AddBoxOutlinedIcon, '/dashboard/create-pdf')}
        {renderPlayzoneControl('View PDF', PreviewOutlinedIcon, '/dashboard/create-pdf')}
      </div>

    </div>
  );
}

export default PDFPlayzone;