import React from "react";
import { context } from "../Context";
import Overlay from "./Overlay";
import axios from "axios";

function ModalParents() {
  const { state, dispatch } = React.useContext(context);
  const [user, setUser] = React.useState({
    fatherName: "",
    fatherPhone: "",
    motherName: "",
    motherPhone: "",
  });
  async function handleSubmit(e) {
    dispatch({ type: "UPDATE_DATA_USER_FIRST" });
    e.preventDefault();
    let formData = new FormData();
    // sending data to the server
    formData.append("fatherName", user.fatherName);
    formData.append("fatherPhone", user.fatherPhone);
    formData.append("motherName", user.motherName);
    formData.append("motherPhone", user.motherPhone);

    try {
      const response = await axios.patch(
        "http://localhost:4000/profile",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
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

  return (
    <React.Fragment>
      {state.modalIsopenP ? (
        <Overlay>
          <form className="profile-form">
            <br />
            <label>Father's name</label>
            <input
              type="text"
              name="fatherName"
              value={user.fatherName}
              onChange={onChange}
            />
            <br />
            <label>Father's phone-number:</label>
            <input
              type="text"
              name="fatherPhone"
              value={user.fatherPhone}
              onChange={onChange}
            />
            <br />
            <label>Mother's name:</label>
            <input
              type="text"
              name="motherName"
              value={user.motherName}
              onChange={onChange}
            />
            <br />
            <label>Mother's phone-number:</label>
            <input
              type="text"
              name="motherPhone"
              value={user.motherPhone}
              onChange={onChange}
            />
            <br />
            <button className="submit-btn" type="submit" onClick={handleSubmit}>
              Save Changes
            </button>
            <button
              className="submit-btn"
              type="submit"
              onClick={() => dispatch({ type: "UPDATE_DATA_USER_FIRST" })}
            >
              Close
            </button>
          </form>
        </Overlay>
      ) : null}
    </React.Fragment>
  );
}

export default ModalParents;
