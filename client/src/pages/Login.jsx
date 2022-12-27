import React from "react";

function Login() {
  return (
    <React.Fragment>
      <div className="login">
        <div className="loginPicture"></div>
        <h2>Welcome Back</h2>
        <form className="loginContainer">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
        <button className="registerButton " type="submit">
          Sign In
        </button>
        <p>
          Dont't I have an account? <span>Sign Up</span>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Login;
