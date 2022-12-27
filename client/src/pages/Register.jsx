import React from "react";
import register from "../assets/registerpic.png";

function Register() {
  return (
    <div>
      <div className="registerContainer">
        <div className="registerPiccontainer">
          <img src={register} />
        </div>
        <form className="registerMain">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone number" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button className="registerButton" type="submit">
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
