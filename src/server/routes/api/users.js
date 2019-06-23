const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");
const authorized = require("../../middleware/authorized");

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
router.post(
  "/register",
  [
    check("username", "Username field is required.")
      .not()
      .isEmpty(),
    check("email", "Email field is required.")
      .not()
      .isEmpty(),
    check("email", "You should input a valid email address").isEmail(),
    check("password", "Password field is required.")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, email } = req.body;

    try {
      let user = await User.findOne({ username });
      let userCollection = await User.find();

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ message: "User already exists" }] });
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
  }
);

//@ROUTE          localhost:5000/api/users/login
//@DESCRIPTION    login a user
//@ACCESS         public

router.post(
  "/login",
  [
    check("username", "Username field is required.")
      .not()
      .isEmpty(),
    check("password", "Password field is required.")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      let user = await User.findOne({ username });

      if (!user) {
        return res
          .status(404)
          .json({ errors: [{ message: "Invalid Credentials" }] });
      }

      const isMatch = bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(404)
          .json({ errors: [{ message: "Invalid Credentials" }] });
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
    } catch (error) {}
  }
);

module.exports = router;

//@ROUTE          here
//@DESCRIPTION    here
//@ACCESS         here
