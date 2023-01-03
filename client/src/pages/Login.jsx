import React from "react";
import login from "../assets/loginB.png";
import axios from "axios";
import { context } from "../components/Context";
function Login() {
  const {
    state: { userLogin },
    dispatch,
  } = React.useContext(context);

  async function postLogin(e) {
    e.preventDefault();
    if (
      !userLogin.email ||
      !userLogin.password ||
      !userLogin.email.includes("@")
    ) {
      dispatch({ type: "EMPTY_INPUT" });
    } else {
      try {
        const post = await axios.post("http://localhost:4000/login", {
          email: userLogin.email,
          password: userLogin.password,
        });

        dispatch({
          type: "USER_AUTHENTICATION",
          isAuthenticated: post.data.isAuthenticated,
        });

        // if the server response is true, the user is succesfully authenticated and she/he will be navigated to the protected route
      } catch (error) {
        console.log(error);
      }
    }
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
            onChange={(e) =>
              dispatch({
                type: "USERINPUT_LOGIN",
                input: { type: e.target.type, value: e.target.value },
              })
            }
            type="email"
            placeholder={
              userLogin.emailValidation ? userLogin.emailValidation : "Email"
            }
          />
          <input
            value={userLogin.password}
            onChange={(e) =>
              dispatch({
                type: "USERINPUT_LOGIN",
                input: { type: e.target.type, value: e.target.value },
              })
            }
            type="password"
            placeholder={
              userLogin.passwordValidation
                ? userLogin.passwordValidation
                : "Password"
            }
          />
          <button className="registerButton " type="submit" onClick={postLogin}>
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
