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
  motorModel: {
    type: String
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
