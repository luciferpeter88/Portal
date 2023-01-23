import React from "react";
import { BsPenFill } from "react-icons/bs";
import { context } from "../Context";

function Parents() {
  const {
    state: {
      profile: { parentsInfo },
    },
  } = React.useContext(context);
  return (
    <div className="parentsDetails">
      <div>
        <h3>Parents Information</h3>
        <p>
          Father's name: <span>{parentsInfo.fatherName}</span>
        </p>
        <p>
          Father's phone-number: <span>{parentsInfo.fatherPhoneNum}</span>
        </p>
        <p>
          Mother's name: <span>{parentsInfo.motherName}</span>
        </p>
        <p>
          Mother's phone-number: <span>{parentsInfo.motherPhoneNum}</span>
        </p>
      </div>
      <BsPenFill color="rgb(237, 181, 7)" />
    </div>
  );
}

export default Parents;
