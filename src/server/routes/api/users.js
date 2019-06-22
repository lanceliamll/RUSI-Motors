const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("wow");
  }
);

module.exports = router;

//@ROUTE          here
//@DESCRIPTION    here
//@ACCESS         here
