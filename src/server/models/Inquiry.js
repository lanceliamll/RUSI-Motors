const mongoose = require("mongoose");

const InquirySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  fullName: {
    type: String
  },
  address: {
    type: String
  },
  motorMode: {
    type: String
  },
  fromTime: {
    type: Date
  },
  toTime: {
    type: Date
  },
  randomCode: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Inquiry = mongoose.model("inquiry", InquirySchema);
