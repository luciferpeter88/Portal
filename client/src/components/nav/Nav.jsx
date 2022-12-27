import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { hidden, visible, activeStyle, inactiveStyle } from "./navStyle";
import { context } from "../Context";

function Links({ route, path }) {
  const { dispatch } = React.useContext(context);

  return (
    <NavLink
      onClick={() => dispatch({ type: "HAMBURGER" })}
      style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      end
      to={route}
    >
      {path}
    </NavLink>
  );
}

function Nav() {
  const { state, dispatch } = React.useContext(context);

  return (
    <React.Fragment>
      <RxHamburgerMenu
        onClick={() => dispatch({ type: "HAMBURGER" })}
        className="hamburgerMenu"
      />
      <nav className="nav" style={state.display ? visible : hidden}>
        <Links route="/" path="Home" />
        <Links route="department" path="Department" />
        <Links route="login" path="Login" />
        <Links route="register" path="Register" />
      </nav>
      <Outlet />
    </React.Fragment>
  );
}

export default Nav;
