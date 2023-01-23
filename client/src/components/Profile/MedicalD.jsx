import React from "react";
import { context } from "../Context";

function MedicalD() {
  const { state } = React.useContext(context);
  return (
    <div className="medicalDetails">
      <div>
        <h3>Medical History</h3>
        <p>{state.medicalHistory}</p>
      </div>
    </div>
  );
}

export default MedicalD;
