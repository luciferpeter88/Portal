const mongoose = require("mongoose");
const express = require("express");
const app = express();
const url =
  "mongodb+srv://Peter:12345@portal.1xoweve.mongodb.net/Portal?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const db = mongoose.connect(url, connectionParams);

module.exports = db;
