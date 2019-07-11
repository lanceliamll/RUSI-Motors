const express = require("express");
const router = express.Router();
const authorized = require("../../middleware/authorized");
const Inquiry = require("../../models/Inquiry");
const uuidv4 = require("uuid/v4");

//@ROUTE          localhost:5000/api/inquiry
//@DESCRIPTION    create a inquiry
//@ACCESS         private
router.post("/create", authorized, async (req, res) => {
  const { fullName, address, motorModel } = req.body;
  const { id } = req.body;

  try {
    let random = await uuidv4();

    let newInquiry = await new Inquiry({
      fullName,
      address,
      motorModel,
      randomCode: random,
      user: id
    });
    await newInquiry.save();
    res.json(newInquiry);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@ROUTE          localhost:5000/api/inquiry
//@DESCRIPTION    query all inquiries
//@ACCESS         private
router.get("/", authorized, async (req, res) => {
  try {
    let inquiries = await Inquiry.find().sort({ date: -1 });

    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
