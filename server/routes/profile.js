const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  // if the session has been set send the details to the client
  if (request.session.user) {
    // send everything but omit the id and v properties
    const { _id, __v, ...rest } = request.session.user;
    console.log(rest);
    response.send(rest);
  } else {
    response.send("no data!");
    console.log("no data!");
  }
});

router.put("/", (request, response) => {
  console.log(request.body);

  response.send("ok");
});

module.exports = router;
