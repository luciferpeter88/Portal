import React from "react";
import { context } from "../Context";
import Overlay from "./Overlay";
import axios from "axios";

function Modal() {
  const { state, dispatch } = React.useContext(context);
  const { profile } = state;
  const [user, setUser] = React.useState({
    name: "",
    age: "",
    location: "",
    phone: "",
    avatar: "",
  });
  console.log(user);

  async function handleSubmit(e) {
    dispatch({ type: "UPDATE_DATA_USER_FIRST" });
    e.preventDefault();

    try {
      const response = await axios.put("http://localhost:4000/profile", user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  // function for updating the user inputs
  function onChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  // function for updating picture
  function onUpload(e) {
    setUser({ ...user, avatar: e.target.files[0] });
  }

  return (
    <React.Fragment>
      {state.modalIsopen ? (
        <Overlay>
          <form className="profile-form">
            <br />
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={onChange}
            />
            <br />
            <label>Age:</label>
            <input
              type="text"
              name="age"
              value={user.age}
              onChange={onChange}
            />
            <br />
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={user.location}
              onChange={onChange}
            />
            <br />
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={user.phoneNumber}
              onChange={onChange}
            />
            <br />
            <label>Profile Picture:</label>
            <input type="file" onChange={onUpload} />
            <br />
            <button className="submit-btn" type="submit" onClick={handleSubmit}>
              Save Changes
            </button>
          </form>
        </Overlay>
      ) : null}
    </React.Fragment>
  );
}

export default Modal;
