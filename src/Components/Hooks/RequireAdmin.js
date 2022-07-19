import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../Share/Firebase/Firebase";
import Loading from "../Share/Loading/Loading";
import useAdmin from "./useAdmin";

const RequireAdmin = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const [admin, adminLoading] = useAdmin(user);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  if (loading || adminLoading) {
    return <Loading />;
  }

  if (!user || !admin) {
    handleSignOut();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAdmin;
