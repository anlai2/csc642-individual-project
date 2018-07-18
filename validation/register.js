const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};
  console.log(data);
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.zipcode = !isEmpty(data.zipcode) ? data.zipcode : '';
  data.phone = !isEmpty(data.phone) ? data.phone : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.firstName, { min: 2, max: 40 })) {
    errors.firstName = 'First name must be between 2 and 40 characters';
  }

  if (!Validator.isLength(data.lastName, { min: 2, max: 40 })) {
    errors.lastName = 'Last name must be between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First name field is required';
  } else if (!data.firstName.match(/^[A-z]+$/)) {
    errors.firstName = 'First name must only be alphabet characters';
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last name field is required';
  } else if (!data.lastName.match(/^[A-z]+$/)) {
    errors.lastName = 'Last name must only be alphabet characters';
  }

  if (
    !Validator.isLength(
      data.email,
      { min: 2, max: 40 } && data.email.length !== 0
    )
  ) {
    errors.email = 'Email must be between 2 and 40 alphanumeric characters';
  }

  if (!Validator.isEmail(data.email) && data.email.length >= 1) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'Address field is required';
  } else if (!Validator.isLength(data.address, { min: 2, max: 40 })) {
    errors.address = 'Address must be between 2 and 40 alphanumeric characters';
  }

  if (!Validator.isLength(data.zipcode, { min: 5, max: 5 })) {
    errors.zipcode = 'Zipcode must be 5 numbers';
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'Phone number is required';
  } else if (
    !data.phone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
  ) {
    errors.phone = 'Phone number must be valid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  if (!data.terms) {
    errors.terms = 'Must agree to our terms and conditions';
  }

  if (!data.recaptcha) {
    errors.recaptcha = "Must prove you don't speak binary";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
