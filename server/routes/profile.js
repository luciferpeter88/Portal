const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  if (request.session.user) {
    response.send(request.session);
  } else {
    response.send("no data!");
  }
});

module.exports = router;
