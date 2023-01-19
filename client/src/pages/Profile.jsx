import React from "react";
import boy from "../assets/boy.png";
import { BsPenFill } from "react-icons/bs";
import Parents from "../components/Parents";
import MedicalD from "../components/MedicalD";
import Allergies from "../components/Allergies";

function Profile() {
  return (
    <React.Fragment>
      <div className="profileContainer">
        <div className="profilePicContainer">
          <img src={boy} alt="Brian" />
          <div>
            <h3>Brian Powel</h3>
            <p>10 years</p>
            <p>Glasgow,UK</p>
          </div>
          <BsPenFill className="pen" />
        </div>
        <div className="profileDetailsContainer">
          <Parents />
          <MedicalD />
          <Allergies />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
