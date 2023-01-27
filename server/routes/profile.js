const express = require("express");
const router = express.Router();
const addSessionData = require("../custom/addSessionData");
const User = require("../mongoose/regSchema");

// import the multer middleware
const upload = require("../custom/multer");
router.get("/", (request, response) => {
  // if the session has been set send the details to the client
  if (request.session.user) {
    // send everything but omit the id and v properties
    const { _id, __v, ...rest } = request.session.user;
    response.send(rest);
  } else {
    response.send("no data!");
  }
});

// run the addSession fuction first and then the multer middleware in order to access the request.sessionData in the multer middleware,
//so I can create dynamic folder for every registered user in the multer middleware
router.put("/", addSessionData, upload.single("file"), (request, response) => {
  // user inputs from the client side
  const email = request.sessionData;
  const { name, age, location, phone } = request.body;
  let avatar = request.file;
  let picturesource;
  // if we have not got a picture, then set the avatar to an empty string
  if (!avatar.filename) {
    avatar = "";
  }
  // if we got the picture,then define where it is located
  picturesource = `http://localhost:4000/${email}/${avatar.filename}`;

  // update the user data in the database
  User.findOneAndUpdate(
    { email: email },
    {
      $set: {
        userName: name,
        phoneNumber: phone,
        avatar: picturesource || avatar,
        personalInfo: {
          age: age,
          location: location,
        },
      },
    },
    { new: true },
    (err, doc) => {
      if (err) {
        // handle error
      } else {
        // set the session data with the updated value
        request.session.user = {
          ...request.session.user,
          userName: name,
          phoneNumber: phone,
          avatar: picturesource || avatar,
          personalInfo: {
            age: age,
            location: location,
          },
        };
        // send back the updated value to the client
        const { _id, __v, ...rest } = request.session.user;
        response.send(rest);
      }
    }
  );
});

module.exports = router;
