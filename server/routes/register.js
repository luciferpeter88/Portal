const express = require("express");
const router = express.Router();

router.post("/", (request, response) => {
  response.send("Registration");
});

module.exports = router;
