import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../Share/Firebase/Firebase";
import Loading from "../Share/Loading/Loading";
import useAdmin from "./useAdmin";
import useNotUser from "./useNotUser";

const RequireNotUser = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const [isUser, isUserLoading] = useNotUser(user);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  if (loading || isUserLoading) {
    return <Loading />;
  }

  if (!user) {
    handleSignOut();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireNotUser;
