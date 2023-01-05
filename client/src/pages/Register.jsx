import React from "react";
import register from "../assets/registerpic.png";
import { context } from "../components/Context";
import axios from "axios";

function Register() {
  const {
    state: { userRegistration },
    dispatch,
  } = React.useContext(context);
  // console.log(userRegistration);
  function gettinInputs(e) {
    dispatch({
      type: "USER_INPUT_REG",
      inputs: {
        value: e.target.value,
        type: e.target.name,
      },
    });
  }

  async function submitFrom(e) {
    e.preventDefault();
    // destructuring properties from the userRegistration object
    const { userName, email, phoneNumber, password, confirmPassword } =
      userRegistration;

    switch (true) {
      case !userName || !email || !phoneNumber || !password || !confirmPassword:
        dispatch({ type: "EMPTY_INPUT_REG" });
        break;
      case password !== confirmPassword:
        dispatch({ type: "NOT_MATCHING_PASSWORD" });
        break;
      case !email.includes("@"):
        dispatch({ type: "NOT_VALID_EMAIL" });
        break;
      default:
        try {
          const post = await axios.post("http://localhost:4000/registration", {
            username: userName,
            email: email,
            phonenumber: phoneNumber,
            password: password,
            confirmPassword: confirmPassword,
          });
          console.log(post.data);
          dispatch({
            type: "USER_REGITRATION",
            isEmailReserved: post.data.isEmailReserved,
          });

          // if the server response is true, the user is succesfully registered to the website
        } catch (error) {
          console.log(error);
        }
    }
  }

  return (
    <div>
      <div className="registerContainer">
        <div className="registerPiccontainer">
          <img src={register} alt="register_pic" />
        </div>
        <form className="registerMain">
          <input
            value={userRegistration.userName}
            onChange={gettinInputs}
            type="text"
            name="userName"
            placeholder={
              userRegistration.userNameValidation
                ? userRegistration.userNameValidation
                : "Username"
            }
          />
          <input
            value={userRegistration.email}
            onChange={gettinInputs}
            type="email"
            name="email"
            placeholder={
              userRegistration.emailValidation
                ? userRegistration.emailValidation
                : "Email"
            }
          />
          <input
            value={userRegistration.phoneNumber}
            onChange={gettinInputs}
            type="number"
            name="phoneNumber"
            placeholder={
              userRegistration.phoneNumberValidation
                ? userRegistration.phoneNumberValidation
                : "Phone number"
            }
          />
          <input
            value={userRegistration.password}
            onChange={gettinInputs}
            type="password"
            name="password"
            placeholder={
              userRegistration.passwordValidation
                ? userRegistration.passwordValidation
                : "Password"
            }
          />
          <input
            value={userRegistration.confirmPassword}
            onChange={gettinInputs}
            type="password"
            name="confirmPassword"
            placeholder={
              userRegistration.confirmPasswordValidation
                ? userRegistration.confirmPasswordValidation
                : "Confirm password"
            }
          />
          <button onClick={submitFrom} className="registerButton" type="submit">
            Sign up
          </button>
          <p>
            Already have an account? <span>Sign In</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
