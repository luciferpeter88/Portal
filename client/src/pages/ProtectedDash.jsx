import React from "react";
import { Navigate } from "react-router-dom";
import { context } from "../components/Context";

function ProtectedDash({ children }) {
  const { state } = React.useContext(context);

  // Check if the admin is authenticated
  if (state.userLogin.isAuthenticated === "admin") {
    // If the admin is authenticated, render the Dashboard componenet which is the child of the Protected dash page
    return children;
  } else {
    // If the admin is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
}

export default ProtectedDash;
