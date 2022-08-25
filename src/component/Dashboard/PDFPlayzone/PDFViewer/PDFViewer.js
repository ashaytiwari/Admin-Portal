import React from 'react';

import { Document, Page, Text, Image, Link, View, PDFViewer } from '@react-pdf/renderer';

import styles from './PDFViewer.stylesheet';

function PDFViewerComponent(props) {

  const { data } = props;

  function renderHeading() {
    return <Text style={styles.heading}>{data.heading}</Text>;
  }

  function renderSubHeading() {
    return <Text style={styles.subHeading}>{data.subHeading}</Text>;
  }

  function renderImage() {

    const pdfImageAttributes = {
      src: data.image,
      style: styles.pdfImage
    };

    return <Image {...pdfImageAttributes} />;

  }

  function renderLink() {

    if (data.link === '') {
      return;
    }

    const linkAttributes = {
      src: data.link,
      style: styles.pdfLink
    };

    return <Link {...linkAttributes}>Click here!</Link>;

  }

  function renderDescriptions() {

    if (data.description.length === 0) {
      return;
    }

    return (
      <View style={styles.pdfDescriptionContainer}>
        {
          data.description.map((item, index) => (
            <Text style={styles.description} key={index}>{item}</Text>
          ))
        }
      </View>
    );
  }

  return (
    <PDFViewer>
      <Document title={data.title}>
        <Page style={styles.pdfContainer} wrap={true}>
          {renderHeading()}
          {renderSubHeading()}
          {renderImage()}
          {renderLink()}
          {renderDescriptions()}
        </Page>
      </Document>
    </PDFViewer>

  );
}

export default PDFViewerComponent;