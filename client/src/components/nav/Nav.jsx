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
  // validating the user
  const validate = state.userLogin.isAuthenticated || getCookie();
  // validating the admin
  const admin = state.userLogin.isAuthenticated === "admin";
  return (
    <React.Fragment>
      <RxHamburgerMenu
        onClick={() => dispatch({ type: "HAMBURGER" })}
        className="hamburgerMenu"
      />
      {/* if the user or admin gave us incorrect details, display only the home,department,login and registered routes */}
      <nav className="nav" style={state.display ? visible : hidden}>
        {validate ? null : <Links route="/" path="Home" />}
        {validate ? null : <Links route="department" path="Department" />}
        {validate ? null : <Links route="login" path="Login" />}
        {validate ? null : <Links route="register" path="Register" />}
        {/* if the user gave us correct login details and the admin is not authenticated, display the following path below */}
        {validate && !admin ? <Links route="profile" path="Profile" /> : null}
        {validate && !admin ? <Links route="map" path="Map" /> : null}
        {validate && !admin ? <Links route="games" path="Games" /> : null}
        {validate && !admin ? (
          <NavLink
            onClick={deleteCookie}
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            end
            to="/"
          >
            Logout
          </NavLink>
        ) : null}
        {/* if the admin logged in, display the following routes only below */}
        {admin ? <Links route="dashboard" path="Dashboard" /> : null}
        {admin ? <Links route="department" path="Department" /> : null}
        {admin ? <Links route="games" path="Games" /> : null}
        {admin ? (
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
        {/* same process as above for large screen */}
        {validate ? null : <Links route="/" path="Home" />}
        {validate ? null : <Links route="department" path="Department" />}
        {validate ? null : <Links route="login" path="Login" />}
        {validate ? null : <Links route="register" path="Register" />}
        {validate && !admin ? <Links route="profile" path="Profile" /> : null}
        {validate && !admin ? <Links route="map" path="Map" /> : null}
        {validate && !admin ? <Links route="games" path="Games" /> : null}
        {validate && !admin ? (
          <NavLink
            onClick={deleteCookie}
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            end
            to="/"
          >
            Logout
          </NavLink>
        ) : null}
        {admin ? <Links route="dashboard" path="Dashboard" /> : null}
        {admin ? <Links route="department" path="Department" /> : null}
        {admin ? <Links route="games" path="Games" /> : null}
        {admin ? (
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
