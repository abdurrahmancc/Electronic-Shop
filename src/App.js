import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./Components/Routes/PublicRoutes";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./Components/Share/RequireAuth/RequireAuth";
import UserDashboard from "./Components/Dashboard/UserDashboard/UserDashboard/UserDashboard";
import MyAccount from "./Components/Dashboard/UserDashboard/MyAccount/MyAccount";
import MyOrder from "./Components/Dashboard/UserDashboard/MyOrder/MyOrder";
import AdminDashboard from "./Components/Dashboard/AdminDashboard/AdminDashboard";
import AllAdmin from "./Components/Dashboard/AdminDashboard/AllAdmin/AllAdmin";
import AllUsers from "./Components/Dashboard/AdminDashboard/AllUsers/AllUsers";
import AllOrder from "./Components/Dashboard/AdminDashboard/AllOrder/AllOrder";
import Sidebar from "./Components/Sidebar/Sidebar";

// import Aos from "aos";
export const ToggleSideBarContext = createContext("sideBar");
export const ThemesApi = createContext("themes");

function App() {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [dark, setDark] = useState(false);
  const [themes, setThemes] = useState("");

  const theme = localStorage.getItem("themes");

  useEffect(() => {
    setThemes(theme);
  }, [theme]);

  // useEffect(() => {
  //   Aos.init();
  // }, []);

  const handleOpen = () => {
    if (toggleSideBar) {
      setToggleSideBar(!toggleSideBar);
    }
  };

  return (
    <div className="bg-white" data-theme={theme == "dark" ? "dark" : "light"}>
      <Toaster />
      <ThemesApi.Provider value={themes}>
        <ToggleSideBarContext.Provider
          value={[toggleSideBar, setToggleSideBar, dark, setDark, handleOpen]}
        >
          <div>
            <Routes>
              {publicRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component></Component>}></Route>
              ))}
              {/* <Route element={<RequireAuth />}>
                {PrivetRoutes.map(({ path, Component }, index) => (
                  <Route key={index} path={path} element={<Component></Component>}></Route>
                ))}
              </Route> */}
              <Route element={<RequireAuth />}>
                <Route path="/user-dashboard" element={<UserDashboard />}>
                  <Route index element={<MyAccount />} />
                  <Route path="my-account" element={<MyAccount />} />
                  <Route path="my-order" element={<MyOrder />} />
                </Route>
              </Route>
              <Route element={<RequireAuth />}>
                <Route path="/admin-dashboard" element={<AdminDashboard />}>
                  <Route index element={<AllUsers />} />
                  <Route path="all-user" element={<AllUsers />} />
                  <Route path="all-admin" element={<AllAdmin />} />
                  <Route path="all-order" element={<AllOrder />} />
                </Route>
              </Route>
              <Route element={<RequireAuth />}>
                <Route path="/sidebar" element={<Sidebar />}>
                  <Route index element={<AllUsers />} />
                  <Route path="all-user" element={<AllUsers />} />
                  <Route path="all-admin" element={<AllAdmin />} />
                  <Route path="all-order" element={<AllOrder />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </ToggleSideBarContext.Provider>
      </ThemesApi.Provider>
    </div>
  );
}

export default App;
