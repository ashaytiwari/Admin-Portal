import isUrl from "is-url";

export function validateForm(values) {

  const errors = {};

  if (values.title === '') {
    errors.title = 'Required';
  }

  if (values.heading === '') {
    errors.heading = 'Required';
  }

  if (values.subHeading === '') {
    errors.subHeading = 'Required';
  }

  if (values.image !== '' && validateURL(values.image) === false) {
    errors.image = 'Enter valid image address.';
  }

  if (values.link !== '' && validateURL(values.link) === false) {
    errors.image = 'Enter valid link url.';
  }

  return errors;
}

function validateURL(url) {

  if (isUrl(url) === false) {

    let maybeURL = `https://${url}`;

    if (isUrl(maybeURL) === false) {
      return false;
    }

    return true;

  }

  return true;

}