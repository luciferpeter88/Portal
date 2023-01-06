const mongoose = require("mongoose");

// create a Scheme for users
const regUserScheme = new mongoose.Schema({
  userName: String,
  email: String,
  phoneNumber: String,
  password: String,
});

const User = mongoose.model("User", regUserScheme);

module.exports = User;
