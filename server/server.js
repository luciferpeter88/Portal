const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const cors = require("cors");
const login = require("./routes/auth");
const registration = require("./routes/register");
const profile = require("./routes/profile");
const userD = require("./middleware/userDetails");
// applying these middlewares for the entire application
app.use([
  cors(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
]);
// use the router to handle all the requests that come in
app.use("/", router);
// middleware function for the profile and login routes only
router.use("/profile", userD);
router.use("/login", userD);
// route for handeling login route
app.use("/login", login);
// route for handeling the registration route
app.use("/registration", registration);
// route for handeling the profile route
app.use("/profile", profile);
app.listen(4000, () => {
  console.log("server is running");
});
