const express = require("express");
const router = express.Router();

router.post("/", (request, response) => {
  const data = request.body;
  console.log(data);
  response.send({ isAuthenticated: true });
});

module.exports = router;
