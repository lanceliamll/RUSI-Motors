const Validator = require("validator");
const isEmpty = require("./is-empty.js");

module.exports = function validateAddMotor(data) {
  //INITIALIZE ERRORS
  let errors = {};

  //INITIALIZE THE STRINGS TO BE EMPTY FIRST
  data.motorModel = !isEmpty(data.motorModel) ? data.motorModel : "";
  data.image = !isEmpty(data.image) ? data.image : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.height = !isEmpty(data.height) ? data.height : "";
  data.weight = !isEmpty(data.weight) ? data.weight : "";
  data.width = !isEmpty(data.width) ? data.width : "";
  data.length = !isEmpty(data.length) ? data.length : "";

  //CHECK IF THE FIELDS IS FILLED OUT
  if (Validator.isEmpty(data.motorModel)) {
    errors.motorModel = "Motor Model field is required";
  }

  if (Validator.isEmpty(data.image)) {
    errors.image = "Image field is required";
  }

  if (Validator.isEmpty(data.type)) {
    errors.type = "Type field is required";
  }

  if (Validator.isEmpty(data.height)) {
    errors.height = "Height field is required";
  }

  if (Validator.isEmpty(data.weight)) {
    errors.weight = "Weight field is required";
  }

  if (Validator.isEmpty(data.width)) {
    errors.width = "Width field is required";
  }

  if (Validator.isEmpty(data.length)) {
    errors.length = "Length field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
