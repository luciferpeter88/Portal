import React from "react";
import { BsPenFill } from "react-icons/bs";
function Parents() {
  return (
    <div className="parentsDetails">
      <div>
        <h3>Parents Information</h3>
        <p>
          Father's name: <span>Ken Powel</span>
        </p>
        <p>
          Father's phone-number: <span>07401884646</span>
        </p>
        <p>
          Mother's name: <span>Marian Harvey</span>
        </p>
        <p>
          Mother's phone-number: <span>07401994646</span>
        </p>
      </div>
      <BsPenFill color="rgb(237, 181, 7)" />
    </div>
  );
}

export default Parents;
