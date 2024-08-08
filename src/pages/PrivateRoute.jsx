import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ element: Component, isAuthenticated, redirectTo }) => {
  const location = useLocation();

  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
};

export default PrivateRoute;
