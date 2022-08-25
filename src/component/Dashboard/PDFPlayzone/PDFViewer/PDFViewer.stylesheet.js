import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  pdfContainer: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Helvetica'
  },
  heading: {
    fontSize: 25,
    fontWeight: 800,
    textAlign: 'center'
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center'
  },
  pdfImage: {
    width: '100%',
    borderRadius: 5,
    margin: '20 auto 20 auto'
  },
  pdfLink: {
    fontSize: 12,
    textDecoration: 'underline'
  },
  pdfDescriptionContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  description: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'light'
  }
});

export default styles;