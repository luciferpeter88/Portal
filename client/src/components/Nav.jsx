import React from "react";
import { Outlet } from "react-router-dom";
function Nav() {
  return (
    <React.Fragment>
      {" "}
      <Outlet />
    </React.Fragment>
  );
}

export default Nav;
