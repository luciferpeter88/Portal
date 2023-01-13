const express = require("express");
const router = express.Router();
require("../config/db");
const { connection } = require("mongoose");
const bcrypt = require("bcrypt");

router.post("/", async (request, response) => {
  try {
    // request from the client
    const { email, password } = request.body;
    // getting data from the database
    const data = await connection.db.collection("users").find().toArray();
    // console.log(data);
    // finding the existing user by its email
    const user = data.find((user) => user.email === email);
    // getting the index of the user
    const indexOfuser = data.indexOf(user);
    // verifying the email address with the password,it can be true,false or can not get it
    // if it is true,then the given email and password is matching.
    // if it is false, the given password is not matching with the email address.
    // if it is can not get it, that means we do not have that email address in our database
    let verify =
      indexOfuser !== -1
        ? await bcrypt.compare(password, data[indexOfuser].password)
        : "Can not get it";

    if (verify === true) {
      const { userName, email, phoneNumber } = data[indexOfuser];
      response.send({ isAuthenticated: true });
    } else if (verify === false) {
      response.send({ isAuthenticated: false });
    } else {
      response.send({ isAuthenticated: false });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
