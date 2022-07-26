import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import auth from "../../Share/Firebase/Firebase";
import Loading from "../../Share/Loading/Loading";
import useToken from "../useToken";

const RequireAuth = () => {
  const [user, loading] = useAuthState(auth);
  const [token, tokenLoading] = useToken(user);
  const location = useLocation();

  if (loading || tokenLoading) {
    return <Loading />;
  }

  if (!user || !token) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
