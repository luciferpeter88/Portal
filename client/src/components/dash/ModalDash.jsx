import React from "react";
import { context } from "../Context";
import Overlay from "../Profile/Overlay";
import axios from "axios";
import Inputs from "./Inpits";

function ModalDash({ selectedUser }) {
  // getting the properties from the selectedUser
  const {
    allergies,
    email,
    medicalHistory,
    parentsInfo,
    personalInfo,
    phoneNumber,
    userName,
  } = selectedUser[0];
  const { state, dispatch } = React.useContext(context);
  // show the default value or an empty value
  const [user, setUser] = React.useState({
    name: userName || "",
    phoneNum: phoneNumber || "",
    age: personalInfo.age || "",
    location: personalInfo.location || "",
    fatherName: parentsInfo.fatherName || "",
    fatherPhone: parentsInfo.fatherPhoneNum || "",
    motherName: parentsInfo.motherName || "",
    motherPhone: parentsInfo.motherPhoneNum || "",
    medical: medicalHistory || "",
    allergies: allergies || "",
    appointment: "",
    email: email || "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    // sending data to the server
    formData.append("name", user.name);
    formData.append("phoneNum", user.phoneNum);
    formData.append("age", user.age);
    formData.append("location", user.location);
    formData.append("fatherName", user.fatherName);
    formData.append("fatherPhone", user.fatherPhone);
    formData.append("motherName", user.motherName);
    formData.append("motherPhone", user.motherPhone);
    formData.append("medical", user.medical);
    formData.append("allergies", user.allergies);
    formData.append("appointment", user.appointment);
    formData.append("email", user.email);

    try {
      const response = await axios.put(
        "http://localhost:4000/dashboard",
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
  function close(e) {
    e.preventDefault();
    dispatch({ type: "DASH_MODAL" });
  }
  // function for updating picture

  return (
    <React.Fragment>
      {state.dashModal ? (
        <Overlay>
          <form className="profile-form">
            <Inputs
              label="Name"
              name="name"
              value={user.name}
              change={onChange}
            />
            <Inputs
              label="Phone-Number"
              name="phoneNum"
              value={user.phoneNum}
              change={onChange}
            />
            <Inputs label="Age" name="age" value={user.age} change={onChange} />
            <Inputs
              label="Location"
              name="location"
              value={user.location}
              change={onChange}
            />
            <Inputs
              label="Father's name"
              name="fatherName"
              value={user.fatherName}
              change={onChange}
            />
            <Inputs
              label="Father's phone-number:"
              name="fatherPhone"
              value={user.fatherPhone}
              change={onChange}
            />
            <Inputs
              label="Mother's name:"
              name="motherName"
              value={user.motherName}
              change={onChange}
            />
            <Inputs
              label="Mother's phone-number:"
              name="motherPhone"
              value={user.motherPhone}
              change={onChange}
            />
            <Inputs
              label="Medical History:"
              name="medical"
              value={user.medical}
              change={onChange}
            />
            <Inputs
              label="Allergies"
              name="allergies"
              value={user.allergies}
              change={onChange}
            />
            <Inputs
              label="Appointment"
              name="appointment"
              value={user.appointment}
              change={onChange}
            />

            <button className="submit-btn" type="submit" onClick={handleSubmit}>
              Save Changes
            </button>
            <button
              className="submit-btn"
              style={{ background: "red" }}
              type="submit"
            >
              Delete Person
            </button>
            <button className="submit-btn" type="submit" onClick={close}>
              Close
            </button>
          </form>
        </Overlay>
      ) : null}
    </React.Fragment>
  );
}

export default ModalDash;
