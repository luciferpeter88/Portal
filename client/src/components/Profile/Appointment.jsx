import React from "react";
import { context } from "../Context";
import { Link } from "react-router-dom";

function Appointment() {
  const { state } = React.useContext(context);
  const bloodtaking = state.profile.department === "blood-taking";
  const mri = state.profile.department === "mri";
  const surgery = state.profile.department === "surgery";
  const wards = state.profile.department === "wards";

  const appointment = state.profile.appointment?.split("G")[0];

  return (
    <div className="medicalDetails">
      <div>
        <h3>Appointment</h3>
        <p>{appointment}</p>
        <p>
          {bloodtaking ? (
            <Link to={"/department/blood-taking"}>Blood-taking</Link>
          ) : null}
          {mri ? <Link to={"/department/mri"}>MRI</Link> : null}
          {surgery ? <Link to={"/department/surgery"}>Surgery</Link> : null}
          {wards ? <Link to={"/department/wards"}>Wards</Link> : null}
        </p>
      </div>
    </div>
  );
}

export default Appointment;
