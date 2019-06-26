const Validator = require("validator");
const isEmpty = require("./is-empty.js");

module.exports = function validateLoginInput(data) {
  //INITIALIZE ERRORS
  let errors = {};

  //INITIALIZE THE STRINGS TO BE EMPTY FIRST
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //CHECK IF THE FIELDS IS FILLED OUT
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }
  //CHECK IF THE FIELDS IS FILLED OUT
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
