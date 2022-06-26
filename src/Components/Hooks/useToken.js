import { useState } from "react";
import { useEffect } from "react";
import axiosPrivet from "./axiosPrivet";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.email || user?.user?.email;
  const displayName = user?.displayName || user?.user?.displayName;
  const currentUser = { email: email, displayName: displayName };

  useEffect(() => {
    (async () => {
      if (email && displayName) {
        const { data } = await axiosPrivet.put(`user/${email}`, currentUser);
        if (data.result.acknowledged) {
          localStorage.setItem("accessToken", data.token);
          setToken(data.token);
        }
      }
    })();
  }, [user]);

  return token;
};

export default useToken;
