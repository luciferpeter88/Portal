const express = require("express");
const router = express.Router();
const { connection } = require("mongoose");

router.get("/", async (request, response) => {
  // getting all data from the database
  const data = await connection.db.collection("users").find().toArray();
  // return everything exept,passwor,id and v properties
  const filter = data.map(({ password, _id, __v, ...res }) => res);
  //   console.log(filter);
  //   if (request.session.user) {
  //     console.log(request.session.user);
  //   }

  response.send(filter);
});

module.exports = router;
