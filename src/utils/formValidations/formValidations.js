/**
 * function to validate email
 * @param {*} email
 * @returns true/false
 */
export const emailValidation = (email) => {
  if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * function to validate indian mobile number
 * @param {*} mobileNumber
 * @returns true/false
 */
export const validateMobileNumber = (mobileNumber) => {
  let regex = new RegExp(/^[6-9]\d{9}$/);

  if (regex.test(mobileNumber)) {
    return false;
  } else {
    return true;
  }
}; //end of validateMobileNumber

/**
 * function to validate password length
 * @param {*} password
 * @returns true/false
 */
export const validatePassword = (password) => {
  if (password.length >= 8) {
    return false;
  } else {
    return true;
  }
}; // end of validatePassword
