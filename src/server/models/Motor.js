const mongoose = require("mongoose");

const MotorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  priceFrom: {
    type: String,
    required: true
  },
  priceTo: {
    type: String,
    required: true
  },
  motorModel: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  width: {
    type: String,
    required: true
  },
  length: {
    type: String,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Motor = mongoose.model("motor", MotorSchema);
