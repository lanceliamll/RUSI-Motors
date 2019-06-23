const express = require("express");
const router = express.Router();
const authorized = require("../../middleware/authorized");

//@ROUTE          here
//@DESCRIPTION    here
//@ACCESS         here
router.get("/", authorized, (req, res) => {
  res.send("motors");
});

module.exports = router;

//@ROUTE          here
//@DESCRIPTION    here
//@ACCESS         here
