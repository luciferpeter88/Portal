const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const login = require("./routes/auth");
const registration = require("./routes/register");
const profile = require("./routes/profile");
// applying these middlewares for the entire application
app.use([bodyParser.urlencoded({ extended: false }), bodyParser.json()]);
app.use(cookieParser());

app.use(
  cors({
    origin: true,
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret",
    name: "session",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);
app.use(express.static("pictures"));

// route for handeling login route
app.use("/login", login);
// route for handeling the registration route
app.use("/registration", registration);
// route for handeling the profile route
app.use("/profile", profile);
app.listen(4000, () => {
  console.log("server is running");
});
