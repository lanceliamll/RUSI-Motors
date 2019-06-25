const express = require("express");
const router = express.Router();
const Motor = require("../../models/Motor");
const authorized = require("../../middleware/authorized");

//@ROUTE          localhost:5000/api/motors
//@DESCRIPTION    query all motors
//@ACCESS         private

router.get("/", authorized, async (req, res) => {
  try {
    let motors = await Motor.find();

    if (!motors) {
      return res.status(404).json({ message: "No motors found" });
    }

    res.json(motors);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@ROUTE          localhost:5000/api/motors/:id
//@DESCRIPTION    query motor by id
//@ACCESS         private

router.get("/:id", authorized, async (req, res) => {
  const { id } = req.params;

  try {
    let motor = await Motor.findById(id);

    if (!motor) {
      return res.status(404).json({ message: "Motor not found" });
    }

    res.json(motor);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
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

//@ROUTE          localhost:5000/api/motors/:id
//@DESCRIPTION    delete a specific motor by id
//@ACCESS         private

router.delete("/:id", authorized, async (req, res) => {
  const { id } = req.params;

  try {
    let motor = await Motor.findById(id);

    if (!motor) {
      return res.status(404).json({ message: "Motor not found" });
    }

    await motor.remove();

    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;

//@ROUTE          here
//@DESCRIPTION    here
//@ACCESS         here
