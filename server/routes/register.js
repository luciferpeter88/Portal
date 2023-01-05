const express = require("express");
const router = express.Router();
// import the connection from the config.db
require("../config/db");
const { connection, default: mongoose } = require("mongoose");

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
      response.send({ isAuthenticated: false });
    } else {
      // create a Scheme for users
      const regUserScheme = new mongoose.Schema({
        userName: String,
        email: String,
        phoneNumber: String,
        password: String,
      });
      // create an object for inserting data to the db
      const user = {
        userName: username,
        email: email,
        phoneNumber: phonenumber,
        password: password,
      };

      const User = mongoose.model("User", regUserScheme);
      User.create(user, (err, doc) => {
        if (err) {
          console.log(err);
        } else {
          console.log(doc);
          response.send({ isAuthenticated: true });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
