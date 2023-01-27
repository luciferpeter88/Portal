const mongoose = require("mongoose");

// create a Scheme for users
const regUserScheme = new mongoose.Schema({
  userName: String,
  email: String,
  phoneNumber: String,
  password: String,
  avatar: String,
  personalInfo: {
    age: String,
    location: String,
  },
  parentsInfo: {
    fatherName: String,
    fatherPhoneNum: String,
    motherName: String,
    motherPhoneNum: String,
  },
  medicalHistory: String,
  allergies: String,
});

const User = mongoose.model("User", regUserScheme);

module.exports = User;
