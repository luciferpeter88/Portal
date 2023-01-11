function middleware(request, response, next) {
  // shared middleware function
  request.userData = {};
  console.log(request.url);
  next();
}

module.exports = middleware;
