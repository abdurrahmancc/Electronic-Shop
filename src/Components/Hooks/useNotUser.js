import axiosPrivet from "./axiosPrivet";
import { useQuery } from "react-query";

const useAdmin = (user) => {
  // const [isUser, setIsUser] = useState(false);
  // const [isUserLoading, setIsUserLoading] = useState(true);
  const email = user?.email || user?.user?.email;
  // useEffect(() => {
  //   (async () => {
  //     if (email) {
  //       const { data } = await axiosPrivet.get(`is-notUser/${email}`);
  //       setIsUser(data?.isUser);
  //       setIsUserLoading(false);
  //       console.log(data);
  //     }
  //   })();
  // }, [user]);
  const {
    data,
    isLoading: isUserLoading,
    refetch,
  } = useQuery(["is-notUser", user], () => axiosPrivet.get(`is-notUser/${email}`));

  return [data?.data, isUserLoading];
};

export default useAdmin;
