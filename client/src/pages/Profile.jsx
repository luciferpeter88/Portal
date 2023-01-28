import React from "react";
import { BsPenFill } from "react-icons/bs";
import Parents from "../components/Profile/Parents";
import MedicalD from "../components/Profile/MedicalD";
import Allergies from "../components/Profile/Allergies";
import { context } from "../components/Context";
import fetchingData from "../components/Profile/FetchingData";
import Modal from "../components/Profile/Modal";
import Appointment from "../components/Profile/Appointment";
function Profile() {
  const {
    state: { profile },
    dispatch,
  } = React.useContext(context);
  // getting data from the server
  fetchingData();

  return (
    <React.Fragment>
      <Modal />
      <div className="profileContainer">
        <div className="profilePicContainer">
          <img src={profile.avatar} alt="" />
          <div>
            <p>
              Name: <span>{profile.userName}</span>
            </p>
            <p>Age: {profile.personalInfo.age}</p>
            <p>Location: {profile.personalInfo.location}</p>
            <p>Phone Number: {profile.phoneNumber}</p>
            <p>Email: {profile.email}</p>
          </div>
          <BsPenFill
            className="pen"
            onClick={() => dispatch({ type: "MODAL" })}
          />
        </div>
        <div className="profileDetailsContainer">
          <Parents />
          <MedicalD />
          <Allergies />
          <Appointment />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
