import { format } from "date-fns";
import { set } from "date-fns/esm";
import { useState } from "react";
import { useEffect } from "react";
import axiosPrivet from "./axiosPrivet";

const useToken = (user) => {
  const [fullDate] = useState(new Date());
  const formattedDate = format(fullDate, "PP");
  const [token, setToken] = useState("");
  const email = user?.email || user?.user?.email;
  const displayName = user?.displayName || user?.user?.displayName;
  const photoURL = user?.photoURL || user?.user?.photoURL || "";
  const currentUser = {
    email: email,
    displayName: displayName,
    photoURL: photoURL,
    joiningDate: formattedDate,
  };

  useEffect(() => {
    (async () => {
      if (email && displayName) {
        const { data } = await axiosPrivet.put(`user/${email}`, currentUser);
        console.log(data);
        if (data?.result.acknowledged || data?.token) {
          localStorage.setItem("accessToken", data?.token);
          setToken(data?.token);
        }
      }
    })();
  }, [user]);

  // useEffect(() => {
  //   if (email && displayName) {
  //     fetch(`http://localhost:5000/${email}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(currentUser),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         localStorage.setItem("accessToken", data?.token);
  //         setToken(data?.token);
  //       });
  //   }
  // }, [user]);

  return [token];
};

export default useToken;
