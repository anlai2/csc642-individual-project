const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};
  console.log(data);
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.address = !isEmpty(data.address) ? data.address : '';
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
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'Address field is required';
  }

  if (!Validator.isLength(data.address, { min: 2, max: 40 })) {
    errors.address = 'Address must be between 2 and 40 alphanumeric characters';
  }

  if (!Validator.isLength(data.zipcode, { min: 5, max: 5 })) {
    errors.zipcode = 'Zipcode must be 5 numbers';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
