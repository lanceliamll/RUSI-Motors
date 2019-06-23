const express = require("express");
const router = express.Router();
const Motor = require("../../models/Motor");
const authorized = require("../../middleware/authorized");

//@ROUTE          here
//@DESCRIPTION    here
//@ACCESS         here
router.get("/", authorized, (req, res) => {
  res.send("motors");
});

//@ROUTE          localhost:5000/api/motors/create
//@DESCRIPTION    create a motor
//@ACCESS         private
router.post("/create", authorized, async (req, res) => {
  const { motorModel, image, type, weight, height, length, width } = req.body;
  const { id } = req.user;

  try {
    let motor = await Motor.findOne({ motorModel });

    if (motor) {
      return status(400).json({ message: "Exists" });
    }

    newMotor = await new Motor({
      motorModel,
      image,
      type,
      weight,
      height,
      length,
      width,
      user: id
    });

    await newMotor.save();

    res.json(newMotor);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@ROUTE          localhost:5000/api/motors/edit/:id
//@DESCRIPTION    edit a motor info
//@ACCESS         private
router.put("/edit/:id", authorized, async (req, res) => {
  const { motorModel, image, type, weight, height, length, width } = req.body;
  const { id } = req.params;

  try {
    await Motor.findById(id).updateOne({
      motorModel,
      image,
      type,
      weight,
      height,
      length,
      width
    });
    res.json({ message: "Updated" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;

//@ROUTE          here
//@DESCRIPTION    here
//@ACCESS         here
