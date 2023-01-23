import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { hidden, visible, activeStyle, inactiveStyle } from "./navStyle";
import { context } from "../Context";
import getCookie from "../functions/getCookie";
import deleteCookie from "../functions/deleteCookie";

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
  const validate = state.userLogin.isAuthenticated || getCookie();
  return (
    <React.Fragment>
      <RxHamburgerMenu
        onClick={() => dispatch({ type: "HAMBURGER" })}
        className="hamburgerMenu"
      />
      <nav className="nav" style={state.display ? visible : hidden}>
        {validate ? null : <Links route="/" path="Home" />}
        {validate ? null : <Links route="department" path="Department" />}
        {validate ? null : <Links route="login" path="Login" />}
        {validate ? null : <Links route="register" path="Register" />}
        {validate ? <Links route="profile" path="Profile" /> : null}
        {validate ? <Links route="map" path="Map" /> : null}
        {validate ? <Links route="games" path="Games" /> : null}
        {validate ? (
          <NavLink
            onClick={deleteCookie}
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            end
            to="/"
          >
            Logout
          </NavLink>
        ) : null}
      </nav>
      <nav className="navLargescreen">
        {validate ? null : <Links route="/" path="Home" />}
        {validate ? null : <Links route="department" path="Department" />}
        {validate ? null : <Links route="login" path="Login" />}
        {validate ? null : <Links route="register" path="Register" />}
        {validate ? <Links route="profile" path="Profile" /> : null}
        {validate ? <Links route="map" path="Map" /> : null}
        {validate ? <Links route="games" path="Games" /> : null}
        {validate ? (
          <NavLink
            onClick={deleteCookie}
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            end
            to="/"
          >
            Logout
          </NavLink>
        ) : null}
      </nav>
      <Outlet />
    </React.Fragment>
  );
}

export default Nav;
