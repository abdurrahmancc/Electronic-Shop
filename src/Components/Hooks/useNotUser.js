import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosPrivet from "./axiosPrivet";

const useAdmin = (user) => {
  const [isUser, setIsUser] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const email = user?.email || user?.user?.email;
  useEffect(() => {
    (async () => {
      if (email) {
        const { data } = await axiosPrivet.get(`is-notUser/${email}`);
        setIsUser(data?.isUser);
        setIsUserLoading(false);
        console.log(data);
      }
    })();
  }, [user]);
  return [isUser, isUserLoading];
};

export default useAdmin;
