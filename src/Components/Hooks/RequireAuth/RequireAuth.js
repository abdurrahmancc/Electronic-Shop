import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import auth from "../../Share/Firebase/Firebase";
import Loading from "../../Share/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
