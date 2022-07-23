import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../Share/Firebase/Firebase";
import Loading from "../Share/Loading/Loading";
import useNotUser from "./useNotUser";

const RequireNotUser = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const [isUser, isUserLoading] = useNotUser(user);

  if (loading || isUserLoading) {
    return <Loading />;
  }

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  // console.log(isUser);
  if (!user || !isUser) {
    handleSignOut();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireNotUser;
