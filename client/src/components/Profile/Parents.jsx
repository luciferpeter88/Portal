import React from "react";
import { BsPenFill } from "react-icons/bs";
import { context } from "../Context";
import ModalParents from "./ModalParents";

function Parents() {
  const {
    state: {
      profile: { parentsInfo },
    },
    dispatch,
  } = React.useContext(context);
  return (
    <React.Fragment>
      <ModalParents />
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
        <BsPenFill
          style={{ cursor: "pointer" }}
          color="rgb(237, 181, 7)"
          onClick={() => dispatch({ type: "MODAL_P" })}
        />
      </div>
    </React.Fragment>
  );
}

export default Parents;
