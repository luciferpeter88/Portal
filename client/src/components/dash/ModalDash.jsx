import React from "react";
import { context } from "../Context";
import Overlay from "../Profile/Overlay";
import axios from "axios";
import Inputs from "./Inpits";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ModalDash({ setSelectedUser }) {
  const { state, dispatch } = React.useContext(context);
  const [startDate, setStartDate] = React.useState(new Date());

  // show the default value or an empty value
  const [user, setUser] = React.useState({
    name: "",
    phoneNum: "",
    age: "",
    location: "",
    fatherName: "",
    fatherPhone: "",
    motherName: "",
    motherPhone: "",
    medical: "",
    allergies: "",
    appointment: startDate,
    department: "blood-taking",
  });
  console.log(user);
  // console.log(state.selectedEmail);
  async function handleSubmit(e) {
    dispatch({ type: "DASH_MODAL" });
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
    formData.append("department", user.department);
    formData.append("email", state.selectedEmail);

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
      // updating the ui when the admin makes changes
      const selected = response.data.filter(
        (user) => user.email === state.selectedEmail
      );
      setSelectedUser(selected);
      setUser({
        name: "",
        phoneNum: "",
        age: "",
        location: "",
        fatherName: "",
        fatherPhone: "",
        motherName: "",
        motherPhone: "",
        medical: "",
        allergies: "",
        appointment: "",
        department: "",
      });
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

  function dateSubmit(data) {
    // function to overwriting the initial date
    setStartDate(data);
    // update the user hooks to keep the previous data and update the appointment property with the new value
    setUser((prevData) => {
      return {
        ...prevData,
        appointment: data,
      };
    });
  }

  function deletPerson(e) {
    e.preventDefault();
  }

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

            <label>Date:</label>

            <DatePicker
              onChange={dateSubmit}
              selected={startDate}
              showTimeSelect
              dateFormat="d MMMM, yyyy h:mmaa"
            />

            <br />
            <label for="department">Choose a department:</label>

            <select name="department" onChange={onChange}>
              <option value="blood-taking">Blood-taking</option>
              <option value="mri">Mri</option>
              <option value="surgery">Surgery</option>
              <option value="wards">Wards</option>
            </select>

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
