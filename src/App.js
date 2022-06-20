import "./App.css";
import Navbar from "./Componentes/Share/Navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import TopNavbar from "./Componentes/Share/Navbar/TopNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Componentes/Pages/Home/Home/Home";
import { publicRoutes } from "./Componentes/Routes/PublicRoutes";
import AOS from "aos";
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

  useEffect(() => {
    AOS.init();
  }, []);

  const handleOpen = () => {
    if (toggleSideBar) {
      setToggleSideBar(!toggleSideBar);
    }
  };

  return (
    <div className="bg-white" data-theme={theme == "dark" ? "dark" : "light"}>
      <ThemesApi.Provider value={themes}>
        <ToggleSideBarContext.Provider
          value={[toggleSideBar, setToggleSideBar, dark, setDark, handleOpen]}
        >
          <div>
            <Routes>
              {publicRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component></Component>}></Route>
              ))}
            </Routes>
          </div>
        </ToggleSideBarContext.Provider>
      </ThemesApi.Provider>
    </div>
  );
}

export default App;
