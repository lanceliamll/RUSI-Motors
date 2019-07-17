const express = require("express");
const router = express.Router();
const authorized = require("../../middleware/authorized");
const Inquiry = require("../../models/Inquiry");
const uuidv4 = require("uuid/v4");
const validateInquiryInput = require("../../validation/inquireMotor");

//@ROUTE          localhost:5000/api/inquiry
//@DESCRIPTION    query all inquiries
//@ACCESS         private
router.get("/", authorized, async (req, res) => {
  try {
    let inquiries = await Inquiry.find().sort({ date: -1 });

    if (!inquiries) {
      return res.json({ message: "No inquiries found!" });
    }
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@ROUTE          localhost:5000/api/inquiry/:id/
//@DESCRIPTION    get inquiry by id
//@ACCESS         private
router.get("/:id", authorized, async (req, res) => {
  const { id } = req.params;
  try {
    let inquiry = await Inquiry.findById(id);

    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@ROUTE          localhost:5000/api/inquiry/code/:randomCode
//@DESCRIPTION    get inquiry by randomCode provided.
//@ACCESS         private

router.get("/code/:randomCode", authorized, async (req, res) => {
  const { randomCode } = req.params;

  try {
    let inquiryByCode = await Inquiry.findOne({ randomCode });

    if (!inquiryByCode) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    res.json(inquiryByCode);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@ROUTE          localhost:5000/api/inquiry
//@DESCRIPTION    create a inquiry
//@ACCESS         private
router.post("/create", authorized, async (req, res) => {
  const { isValid, errors } = validateInquiryInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { fullName, address, motorModel } = req.body;
  const { id } = req.user;

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

//@ROUTE          localhost:5000/api/inquiry/:id
//@DESCRIPTION    update inquiry
//@ACCESS         private

router.put("/:id", authorized, async (req, res) => {
  const { id } = req.params;
  const { fullName, address } = req.body;
  try {
    let inquiry = await Inquiry.findById(id);

    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry Not Found" });
    }

    await inquiry.updateOne({
      fullName,
      address
    });

    res.json({ message: "Updated" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@ROUTE          localhost:5000/api/inquiry/:id
//@DESCRIPTION    delete specific inquiry
//@ACCESS         private

router.delete("/:id", authorized, async (req, res) => {
  const { id } = req.params;

  try {
    let inquiry = await Inquiry.findByIdAndDelete(id);

    if (!inquiry) {
      return res.status(404).json({ message: "No Inquiry found" });
    }

    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@ROUTE          localhost:5000/api/inquiry
//@DESCRIPTION    delete all
//@ACCESS         private
router.delete("/", authorized, async (req, res) => {
  try {
    await Inquiry.deleteMany();

    res.json({ message: "Deleted all the data" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
