import React from "react";

function Register() {
  return (
    <div>
      <div className="registerContainer">
        <div className="registerPiccontainer"></div>
        <form className="registerMain">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone number" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </form>
        <button className="registerButton" type="submit">
          Sign up
        </button>
        <p>
          Already have an account? <span>Sign In</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
