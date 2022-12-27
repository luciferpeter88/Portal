import React from "react";

function Register() {
  return (
    <div>
      <div className="registerContainer">
        <h2 className="registerh2">Create Your Account</h2>
        <form className="registerMain">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone number" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </form>
        <button type="submit">Sign up</button>
        <p>Already have an account? Sign In</p>
      </div>
    </div>
  );
}

export default Register;
