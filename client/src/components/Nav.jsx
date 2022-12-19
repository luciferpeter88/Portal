import React from "react";
import { Outlet } from "react-router-dom";
import { context } from "./Context";
function Nav() {
  const data = React.useContext(context);
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}

export default Nav;
