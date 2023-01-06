import React from "react";
import register from "../assets/registerpic.png";
import { context } from "../components/Context";
import axios from "axios";

function Register() {
  // getting data from the initial state from the reducer
  const {
    state: { userRegistration },
    dispatch,
  } = React.useContext(context);
  // a function for getting data from the user, and pass it to the reducer function to handle it
  function gettinInputs(e) {
    dispatch({
      type: "USER_INPUT_REG",
      inputs: {
        value: e.target.value,
        type: e.target.name,
      },
    });
  }
  // a function to submit the form and checking for various condition and pass it to the reducer based on those conditions
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
          // the post.data.isEmailreserved is the response from the server
          // if the response is false that means the user succesfully registered themself to the website
          // because the email is not taken, but if its true,that means the email address exists in the db,so the registartion process was not succesfull
          dispatch({
            type: "USER_REGITRATION",
            isEmailReserved: post.data.isEmailReserved,
          });
          console.log(post.data);
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
          <h3>{userRegistration.isEmailReserved}</h3>
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
