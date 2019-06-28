const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const authorized = require("../../middleware/authorized");

//VALIDATION FOR THE REGISTER INPUT
const validateRegisterInput = require("../../validation/register");
//VALIDATION FOR THE LOGIN INPUT
const validateLoginInput = require("../../validation/login");

//@ROUTE          localhost:5000/api/users
//@DESCRIPTION    get current user
//@ACCESS         private

router.get("/", authorized, async (req, res) => {
  const { id } = req.user;

  try {
    let user = await User.findById(id).select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//@ROUTE          localhost:5000/api/users/register
//@DESCRIPTION    register a user
//@ACCESS         public
router.post("/register", async (req, res) => {
  //GET THE ERRORS AND ISVALID FROM THE VALIDATE REGISTER INPUT VIA DESTRUCTURING
  const { errors, isValid } = validateRegisterInput(req.body);

  //CHECK VALIDATION IF ITS VALID
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { username, password, email } = req.body;

  try {
    let user = await User.findOne({ username });
    let userCollection = await User.find();

    if (user) {
      errors.user = "User already exists";
      return res.status(400).json(errors);
    } else {
      //hash password
      const hashedPassword = await bcrypt.hash(password, 12);

      if (userCollection.length === 0) {
        user = await new User({
          username,
          email,
          password: hashedPassword,
          isAdmin: true
        });
      } else {
        user = await new User({
          username,
          email,
          password: hashedPassword
        });
      }
    }
    await user.save();

    const payload = {
      user: {
        id: user.id,
        isAdmin: user.isAdmin
      }
    };

    //Sign JWT
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: "1hr" },
      (err, token) => {
        if (err) throw err;
        res.json({
          token
        });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@ROUTE          localhost:5000/api/users/login
//@DESCRIPTION    login a user
//@ACCESS         public

router.post("/login", async (req, res) => {
  //GET THE ERRORS AND ISVALID FROM THE VALIDATE LOGIN INPUT VIA DESTRUCTURING
  const { errors, isValid } = validateLoginInput(req.body);

  //VALIDATION IF NOT VALID
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });

    if (!user) {
      errors.user = "Invalid Credentials";
      return res.status(404).json(errors);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      errors.user = "Invalid Credentials";
      return res.status(404).json(errors);
    }

    const payload = {
      user: {
        id: user.id,
        isAdmin: user.isAdmin
      }
    };

    //Sign JWT
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: "1hr" },
      (err, token) => {
        if (err) throw err;
        res.json({
          token
        });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;

//@ROUTE          here
//@DESCRIPTION    here
//@ACCESS         here
