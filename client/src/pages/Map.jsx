import React from "react";
import map from "../assets/map.png";
import { Link } from "react-router-dom";
function Map() {
  return (
    <div className="map">
      <img src={map} height="70%" width="75%" alt="map" />
      <button className="homeButton" style={{ marginTop: "1rem" }}>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/department"
        >
          Department
        </Link>
      </button>
    </div>
  );
}

export default Map;
