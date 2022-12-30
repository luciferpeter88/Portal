const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const login = require("./routes/auth");
const registration = require("./routes/register");
app.use([
  cors(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
]);

app.use("/login", login);
app.use("/registration", registration);

app.listen(4000, () => {
  console.log("server is running");
});
