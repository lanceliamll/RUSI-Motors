const Validator = require("validator");
const isEmpty = require("./is-empty.js");

module.exports = function validateInquiryInput(data) {
  //INITIALIZE ERRORS
  let errors = {};

  //INITIALIZE THE STRINGS TO BE EMPTY FIRST
  data.fullName = !isEmpty(data.fullName) ? data.fullName : "";
  data.address = !isEmpty(data.address) ? data.address : "";

  //CHECK IF THE FIELDS IS FILLED OUT
  if (Validator.isEmpty(data.fullName)) {
    errors.fullName = "Full Name field is required";
  }
  //CHECK IF THE FIELDS IS FILLED OUT
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
