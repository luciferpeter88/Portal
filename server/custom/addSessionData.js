// create a custom middleware to pass the session data before the multer middleware
function addSessionData(request, response, next) {
  if (request.session.user) {
    // accessing the session data(request.session.user) what I have set in the auth.js file and set it to  request.sessionData
    // this custom middleware function has to run before the multer middleware
    request.sessionData = request.session.user.email;
    // set the user to the session
    request.user = request.session.user;
  }
  next();
}
// note!!
// if I use middleware functions for specific routes,then these middlewares run first and then the middleware functions that are enabled globally!!!
module.exports = addSessionData;
