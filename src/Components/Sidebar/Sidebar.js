import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Sidebar.css";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import SideNavbar from "./SideNavbar";
import SidebarMenu from "./SidebarMenu";
import DashboardFooter from "../Dashboard/DashboardFooter/DashboardFooter";
import { routes } from "./SidebarRoutes";
import "./Scrollbar.css";

const Sidebar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const theme = localStorage.getItem("themesDashboard");

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const showAnimation = {
    hidden: {
      width: "auth",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div data-theme={theme === "dark" ? "darkDashboard" : "lightDashboard"} className="flex ">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "40px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 9,
          },
        }}
        style={{ position: "fixed" }}
        className={`sidebar scrollbar top-0 overflow-y-scroll left-0 z-10 bg-base-100  h-screen ${
          !isOpen && "left-[-50px] lg:left-0  hidden lg:block"
        }`}
      >
        <div className="top-section  w-full py-4 px-3 flex items-center justify-between">
          {isOpen && (
            <motion.h1
              variants={showAnimation}
              inherit="hidden"
              animate="show"
              exit="hidden"
              className="logo pl-0 text-lg"
            >
              <Link to="/"> AWS</Link>
            </motion.h1>
          )}
          <div className="bars">
            <FaBars onClick={toggle} className="text-lg" />
          </div>
        </div>

        <section className="routes">
          {routes.map((route, index) => {
            if (route?.subItems) {
              return (
                <SidebarMenu
                  key={index}
                  route={route}
                  showAnimation={showAnimation}
                  isOpen={isOpen}
                />
              );
            }

            return (
              <NavLink
                to={route.path}
                key={index}
                className={({ isActive }) =>
                  `link  flex  hover:font-bold  py-2 px-3 no-underline hover:no-underline text-lg ${
                    isActive ? "border-r-[4px] border-white bg-[rgb(45,51,89)] " : ""
                  }`
                }
              >
                <div className="icon mt-1">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      inherit="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text whitespace-nowrap text-sm"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <div className={`w-full bg-base-300 min-h-screen `}>
        <header className={` ease-in-out duration-500 ${!isOpen ? "lg:ml-10 " : "ml-[200px]"}`}>
          <SideNavbar
            toggle={toggle}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            toggleSideBar={toggleSideBar}
            setToggleSideBar={setToggleSideBar}
          ></SideNavbar>
        </header>
        <main
          className={`min-h-[calc(100vh-125px)]  ease-in-out duration-500 ${
            !isOpen ? "lg:ml-10" : "ml-[200px]"
          }`}
        >
          {<Outlet />}
        </main>
        <footer
          className={` bg-base-200 ease-in-out duration-500  ${
            !isOpen ? "lg:ml-10 " : "ml-[200px]"
          }`}
        >
          <DashboardFooter />
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;
