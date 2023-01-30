import React from "react";

function Inputs({ label, name, value, change }) {
  return (
    <div>
      <br />
      <label>{label}</label>
      <input type="text" name={name} value={value} onChange={change} />
      <br />
    </div>
  );
}

export default Inputs;
