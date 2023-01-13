const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const login = require("./routes/auth");
const registration = require("./routes/register");
const profile = require("./routes/profile");
// applying these middlewares for the entire application
app.use([
  cors(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
]);
// route for handeling login route
app.use("/login", login);
// route for handeling the registration route
app.use("/registration", registration);
// route for handeling the profile route
app.use("/profile", profile);
app.listen(4000, () => {
  console.log("server is running");
});
