// create a custom middleware to pass the session data before the multer middleware
function addSessionData(request, response, next) {
  if (request.session.user) {
    request.sessionData = request.session.user.email;
  }
  next();
}

module.exports = addSessionData;
