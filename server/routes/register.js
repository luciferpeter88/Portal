const express = require("express");
const router = express.Router();
// import the connection from the config.db
require("../config/db");
// import the user schema
const User = require("../mongoose/regSchema");
const { connection } = require("mongoose");
// import bcrypt to hash the password
const bcrypt = require("bcrypt");

router.post("/", async (request, response) => {
  try {
    // get the data from mongoDB
    const data = await connection.db.collection("users").find().toArray();
    // get the email,username,phonenum and password property from the client side
    const { email, username, phonenumber, password } = request.body;
    // checking the email in the database
    const findEmail = data.some((db) => db.email === email);
    // if the email exists in the db,than we are not going to allow to register the user
    if (findEmail) {
      response.send({ isEmailReserved: true });
    } else {
      // create an object for inserting data to the db
      const user = {
        userName: username,
        email: email,
        phoneNumber: phonenumber,
        password: await bcrypt.hash(password, 10),
      };

      User.create(user, (err, doc) => {
        if (err) {
          console.log(err);
        } else {
          console.log(doc);
          response.send({ isEmailReserved: false });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
