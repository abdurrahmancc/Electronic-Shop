import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./Components/Routes/PublicRoutes";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./Components/Share/RequireAuth/RequireAuth";
import MyAccount from "./Components/Dashboard/MyAccount/MyAccount";
import MyOrder from "./Components/Dashboard/MyOrder/MyOrder";
import UserDashboard from "./Components/Dashboard/UserDashboard/UserDashboard";
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
            </Routes>
          </div>
        </ToggleSideBarContext.Provider>
      </ThemesApi.Provider>
    </div>
  );
}

export default App;
