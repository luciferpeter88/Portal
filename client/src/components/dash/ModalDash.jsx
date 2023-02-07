import React from "react";
import { context } from "../Context";
import Overlay from "../Profile/Overlay";
import axios from "axios";
import Inputs from "./Inpits";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ModalDash({ setSelectedUser, select }) {
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

  async function handleSubmit(e) {
    dispatch({ type: "DASH_MODAL" });
    e.preventDefault();
    let formData = new FormData();
    // sending data to the server
    formData.append("name", user.name || select[0].userName);
    formData.append("phoneNum", user.phoneNum || select[0].phoneNumber);
    formData.append("age", user.age || select[0].personalInfo.age);
    formData.append(
      "location",
      user.location || select[0].personalInfo.location
    );
    formData.append(
      "fatherName",
      user.fatherName || select[0].parentsInfo.fatherName
    );
    formData.append(
      "fatherPhone",
      user.fatherPhone || select[0].parentsInfo.fatherPhoneNum
    );
    formData.append(
      "motherName",
      user.motherName || select[0].parentsInfo.motherName
    );
    formData.append(
      "motherPhone",
      user.motherPhone || select[0].parentsInfo.motherPhoneNum
    );
    formData.append("medical", user.medical || select[0].medicalHistory);
    formData.append("allergies", user.allergies || select[0].allergies);
    formData.append("appointment", user.appointment || select[0].appointment);
    formData.append("department", user.department || select[0].department);
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

  async function deletPerson(e) {
    dispatch({ type: "DASH_MODAL" });
    e.preventDefault();

    try {
      const response = await axios.delete(
        "http://localhost:4000/dashboard?email=" + state.selectedEmail,
        state.selectedEmail,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
              onClick={deletPerson}
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
