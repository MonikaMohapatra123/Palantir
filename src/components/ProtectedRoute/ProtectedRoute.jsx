import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isAdminLoggedIn");

  if (isLoggedIn !== "true") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;