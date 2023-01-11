import React from "react";
import { Navigate } from "react-router-dom";
import { context } from "../components/Context";

function ProtectedPage({ children }) {
  const { state } = React.useContext(context);

  // Check if the user is authenticated
  if (state.userLogin.isAuthenticated) {
    // If the user is authenticated, render the component
    return children;
  } else {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
}

export default ProtectedPage;
