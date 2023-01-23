import React from "react";
import { context } from "../Context";

function Allergies() {
  const { state } = React.useContext(context);
  return (
    <div className="medicalDetails">
      <div>
        <h3>Allergies</h3>
        <p>{state.allergies}</p>
      </div>
    </div>
  );
}

export default Allergies;
