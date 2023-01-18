function getCookie() {
  // getting the cookie from the server response
  let isAuth = document.cookie?.split("=")[1];
  return Boolean(isAuth);
}

export default getCookie;
