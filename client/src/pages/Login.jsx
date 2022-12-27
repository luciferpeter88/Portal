import React from "react";
import login from "../assets/loginB.png";

function Login() {
  return (
    <React.Fragment>
      <div className="login">
        <div className="loginPicture">
          <img src={login} />
        </div>
        <form className="loginContainer">
          <h2>Welcome Back</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="registerButton " type="submit">
            Sign In
          </button>
          <p>
            Dont't have an account? <span>Sign Up</span>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
