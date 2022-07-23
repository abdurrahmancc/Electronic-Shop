import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosPrivet from "./axiosPrivet";
import { useQuery } from "react-query";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  // const [adminLoading, setAdminLoading] = useState(true);
  const email = user?.email || user?.user?.email;
  // useEffect(() => {
  //   (async () => {
  //     if (email) {
  //       const { data } = await axiosPrivet.get(`is-admin/${email}`);
  //       setAdmin(data?.admin);
  //       setAdminLoading(false);
  //       // console.log(data);
  //     }
  //   })();
  // }, [user]);

  const {
    data,
    isLoading: adminLoading,
    refetch,
  } = useQuery(["is-notUser", user], () => axiosPrivet.get(`is-admin/${email}`));

  return [data?.data, adminLoading];
};

export default useAdmin;
