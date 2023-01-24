const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const addSessionData = require("../custom/addSessionData");
// multer for uploading images to the server
const multer = require("multer");
// join the current path with the uploads
const uploads = path.join(__dirname, "..", "pictures");

// if the upload folder does not exist,create one
if (!fs.existsSync(uploads)) {
  fs.mkdirSync(uploads);
}

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    // create a dynamic folder based on session data
    let dynamicFolder;
    let folderPath;
    // if the session is existing, create a dynamic folder with the name of the user's email
    if (request.sessionData) {
      dynamicFolder = request.sessionData;
      console.log(dynamicFolder);
      folderPath = path.join(uploads, dynamicFolder);
      // if it does not exist,create one
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
    }

    cb(null, folderPath);
  },
  filename: (request, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get("/", (request, response) => {
  // if the session has been set send the details to the client
  if (request.session.user) {
    // send everything but omit the id and v properties
    const { _id, __v, ...rest } = request.session.user;
    response.send(rest);
  } else {
    response.send("no data!");
    console.log("no data!");
  }
});

router.put("/", addSessionData, upload.single("file"), (request, response) => {
  // console.log(request.sessionData);
  // console.log(request.body);
  // console.log(request.file);

  response.send("ok");
});

module.exports = router;
