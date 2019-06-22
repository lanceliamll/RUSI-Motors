const express = require("express");
const router = express.Router();

//@ROUTE          here
//@DESCRIPTION    here
//@ACCESS         here
router.get("/", (req, res) => {
  res.send("motors");
});

module.exports = router;

//@ROUTE          here
//@DESCRIPTION    here
//@ACCESS         here
