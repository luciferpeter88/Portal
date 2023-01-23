function deleteCookie() {
  document.cookie = "isAuthenticated=; max-age=0; path=/;";
  window.location.reload();
}

export default deleteCookie;
