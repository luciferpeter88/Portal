import React from "react";
import login from "../assets/loginB.png";
import axios from "axios";
import { context } from "../components/Context";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const {
    state: { userLogin },
    dispatch,
  } = React.useContext(context);

  async function postLogin(e) {
    e.preventDefault();
    // make a request to the server with the email and password
    try {
      const post = await axios.post(
        "http://localhost:4000/login",
        {
          email: userLogin.email,
          password: userLogin.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // post.data is an object where the response from the server is located
      dispatch({
        type: "USER_AUTHENTICATION",
        isAuthenticated: post.data.isAuthenticated,
      });

      // console.log(post.data);

      // if the response from the server is admin, navigate to the protectedDashboard
      if (post.data.isAuthenticated === "admin") {
        navigate("/dashboard");
      } else {
        // if the response true or false navigate to the protected pages!
        navigate("/profile");
      }
      // if the server response is true, the user is succesfully authenticated and she/he will be navigated to the protected route
    } catch (error) {
      console.log(error);
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
          <h3>{userLogin.response}</h3>
          <input
            value={userLogin.email}
            onChange={(e) =>
              dispatch({
                type: "USERINPUT_LOGIN",
                input: { type: e.target.type, value: e.target.value },
              })
            }
            type="email"
            placeholder="Email"
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
            placeholder="Password"
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
