const express = require("express");
const router = express.Router();
const { connection } = require("mongoose");
const User = require("../mongoose/regSchema");

router.get("/", async (request, response) => {
  // getting all data from the database
  const data = await connection.db.collection("users").find().toArray();
  // return everything exept,passwor,id and v properties
  const filter = data.map(({ password, _id, __v, ...res }) => res);

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
    department,
  } = request.body;

  // update the user data in the database
  User.findOneAndUpdate(
    { email: email },
    {
      $set: {
        userName: name,
        phoneNumber: phoneNum,
        personalInfo: {
          age: age,
          location: location,
        },
        parentsInfo: {
          fatherName: fatherName,
          fatherPhoneNum: fatherPhone,
          motherName: motherName,
          motherPhoneNum: motherPhone,
        },
        medicalHistory: medical,
        allergies: allergies,
        appointment: appointment,
        department: department,
      },
    },
    { new: true },
    async (err, doc) => {
      if (err) {
        // handle error
      } else {
        const data = await connection.db.collection("users").find().toArray();
        // return everything exept,passwor,id and v properties
        const filter = data.map(({ password, _id, __v, ...res }) => res);
        response.send(filter);
      }
    }
  );
});

router.delete("/", async (request, response) => {
  const { email } = request.query;
  if (email !== undefined) {
    User.deleteOne({ email: email }, function (err) {
      if (err) return handleError(err);
      // deleted at most one user document
    });
    response.send(email);
  }
});

module.exports = router;
