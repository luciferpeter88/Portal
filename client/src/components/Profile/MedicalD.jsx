import React from "react";
import { context } from "../Context";

function MedicalD() {
  const { state } = React.useContext(context);
  console.log(state);
  return (
    <div className="medicalDetails">
      <div>
        <h3>Medical History</h3>
        <p>{state.profile.medicalHistory}</p>
      </div>
    </div>
  );
}

export default MedicalD;
