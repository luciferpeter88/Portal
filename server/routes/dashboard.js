const express = require("express");
const router = express.Router();
const { connection } = require("mongoose");
const User = require("../mongoose/regSchema");

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

router.put("/", (request, response) => {
  // get the data from the client
  const {
    name,
    phoneNum,
    age,
    location,
    fatherName,
    fatherPhone,
    motherName,
    motherPhone,
    medical,
    allergies,
    appointment,
    email,
  } = request.body;
  console.log(email);
  // overwriting the data
  // User.findOneAndUpdate(
  //   { email: email },
  //   {
  //     $set: {
  //       userName: name,
  //       phoneNumber: phoneNum,
  //       personalInfo: {
  //         age: age,
  //         location: location,
  //       },
  //       parentsInfo: {
  //         fatherName: fatherName,
  //         fatherPhoneNum: fatherPhone,
  //         motherName: motherName,
  //         motherPhoneNum: motherPhone,
  //       },
  //       medicalHistory: medical,
  //       allergies: allergies,
  //     },
  //   },
  //   { new: true },
  //   async (err, doc) => {
  //     if (err) {
  //       // handle error
  //     } else {
  //       // send back to the updated data
  //       const data = await connection.db.collection("users").find().toArray();
  //       // return everything exept,passwor,id and v properties
  //       const filter = data.map(({ password, _id, __v, ...res }) => res);
  //       // send back the updated value to the client

  //       response.send(filter);
  //     }
  //   }
  // );
});

module.exports = router;
