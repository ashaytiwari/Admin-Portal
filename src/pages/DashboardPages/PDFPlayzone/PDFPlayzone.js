import React from 'react';

import CreatePDFEditor from 'component/Dashboard/PDFPlayzone/CreatePDFEditor/CreatePDFEditor';

import styles from './PDFPlayzone.module.scss';

function PDFPlayzone() {

  return (
    <div className={styles.pdfPlayzoneContainer}>

      <h3 className={styles.playzoneHeading}>PDF Playzone</h3>
      <label className={styles.playzoneLabel}>Let's create pdf</label>

      <CreatePDFEditor />

    </div>
  );
}

export default PDFPlayzone;