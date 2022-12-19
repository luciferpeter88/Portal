import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { hidden, visible, activeStyle, inactiveStyle } from "./navStyle";

function Nav() {
  const [display, setDisplay] = React.useState(false);
  return (
    <React.Fragment>
      <RxHamburgerMenu
        onClick={() => setDisplay(!display)}
        className="hamburgerMenu"
      />
      <nav className="nav" style={display ? visible : hidden}>
        <Links
          route="/"
          path="Home"
          display={display}
          setDisplay={setDisplay}
        />
        <Links
          display={display}
          setDisplay={setDisplay}
          route="department"
          path="Department"
        />
        <Links
          display={display}
          setDisplay={setDisplay}
          route="login"
          path="Login"
        />
        <Links
          display={display}
          setDisplay={setDisplay}
          route="register"
          path="Register"
        />
      </nav>
      <Outlet />
    </React.Fragment>
  );
}

function Links({ route, path, display, setDisplay }) {
  return (
    <NavLink
      onClick={() => setDisplay(!display)}
      style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      end
      to={route}
    >
      {path}
    </NavLink>
  );
}

export default Nav;
