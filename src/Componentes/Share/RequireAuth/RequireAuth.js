import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Navigation } from "react-router-dom";
import auth from "../Firebase/Firebase";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigation to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
