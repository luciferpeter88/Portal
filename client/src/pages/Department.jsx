import React from "react";
import hospital from "../assets/hospital.png";
import mri from "../assets/mri.png";
import surgery from "../assets/surgery.png";
import blood from "../assets/blood-taking.png";
import ward from "../assets/ward.png";
import { NavLink } from "react-router-dom";
import { context } from "../components/Context";

function Department() {
  return (
    <React.Fragment>
      <div className="department">
        <div className="departmentPicture">
          <img src={hospital} alt="hospital" />
        </div>
        <div className="departmentCardsContainer">
          <Card src={blood} alt="blood-taking" name="Blood-taking" />
          <Card src={mri} alt="mri" name="Mri" />
          <Card src={ward} alt="wards" name="Wards" />
          <Card src={surgery} alt="surgery" name="Surgery" />
        </div>
      </div>
    </React.Fragment>
  );
}

function Card({ src, alt, name }) {
  const { dispatch } = React.useContext(context);

  return (
    <React.Fragment>
      <div className="departmentContainer">
        <div className="departmentCard">
          <img src={src} alt={alt} />
        </div>
        <button className="registerButton">
          <NavLink
            onClick={() => dispatch({ type: alt })}
            style={{ color: "white", textDecoration: "none" }}
            to={`${alt}`}
          >
            {name}
          </NavLink>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Department;
