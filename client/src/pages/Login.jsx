import React from "react";
import login from "../assets/loginB.png";
import axios from "axios";

function Login() {
  const [userLogin, setUserLogin] = React.useState({
    email: "",
    password: "",
  });

  function getDetails(e) {
    // console.log(e.target.type);
    setUserLogin((prev) => {
      return { ...prev, [e.target.type]: e.target.value };
    });
  }
  const data = {
    name: userLogin.email,
    password: userLogin.password,
  };
  function handleClick(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <React.Fragment>
      <div className="login">
        <div className="loginPicture">
          <img src={login} alt="login" />
        </div>
        <form className="loginContainer">
          <h2>Welcome Back</h2>
          <input
            value={userLogin.email}
            onChange={getDetails}
            type="email"
            placeholder="Email"
          />
          <input
            value={userLogin.password}
            onChange={getDetails}
            type="password"
            placeholder="Password"
          />
          <button
            className="registerButton "
            type="submit"
            onClick={handleClick}
          >
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
