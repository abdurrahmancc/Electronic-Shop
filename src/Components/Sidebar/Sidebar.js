import React, { Children } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Sidebar.css";
import { FaAngleDown, FaBars, FaFile, FaHome, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import SideNavbar from "./SideNavbar";
import Ecommerce from "../Dashboard/AdminDashboard/Ecommerce/Ecommerce";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const theme = localStorage.getItem("themesDashboard");

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    {
      path: "all-user",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "all-admin",
      name: "About",
      icon: <FaUser />,
    },
    {
      path: "all-order",
      name: "order",
      icon: <FaFile />,
      subItems: [
        {
          path: "all-order/orders",
          name: "Orders",
          icon: <FaFile />,
        },
        {
          path: "all-order/pending",
          name: "Pending",
          icon: <FaFile />,
        },
        {
          path: "all-order/paid",
          name: "Paid",
          icon: <FaFile />,
        },
      ],
    },
    {
      path: "/shop",
      name: "User",
      icon: <FaUser />,
    },
    {
      path: "/blog",
      name: "message",
      icon: <MdMessage />,
    },
    {
      path: "/mega-menu",
      name: "Analytics",
      icon: <BiAnalyse />,
    },
    {
      path: "/",
      name: "File Manager",
      icon: <AiTwotoneFileExclamation />,
    },
    {
      path: "/",
      name: "order",
      icon: <BsCartCheck />,
    },
    {
      path: "/",
      name: "Saved",
      icon: <AiFillHeart />,
    },
  ];

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
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
    <div data-theme={theme === "dark" ? "darkDashboard" : "lightDashboard"} className="flex">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "40px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 9,
          },
        }}
        className={`sidebar z-10 bg-[rgb(0,7,61)] text-white h-screen ${
          !isOpen && "left-[-50px] hidden lg:block  lg:0"
        }`}
      >
        <div className="top-section w-full py-4 px-3 flex items-center justify-between">
          {isOpen && (
            <motion.h1
              variants={showAnimation}
              inherit="hidden"
              animate="show"
              exit="hidden"
              className="logo pl-0 text-lg"
            >
              AWS
            </motion.h1>
          )}
          <div className="bars">
            <FaBars onClick={toggle} className="text-lg" />
          </div>
        </div>

        <section className="routes ">
          {routes.map((route, index) => {
            if (route.subItems) {
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
                activeClassName="bg-[rgb(45,51,89)]"
                className={`link hover:link hover:bg-[rgb(45,51,89)] hover:border-r-2 border-white  flex  text-white gap-3 py-2 px-3 no-underline hover:no-underline text-lg`}
              >
                <div className="icon">{route.icon}</div>
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
      <div className="w-full">
        <header>
          <SideNavbar
            toggle={toggle}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            toggleSideBar={toggleSideBar}
            setToggleSideBar={setToggleSideBar}
          ></SideNavbar>
        </header>
        <main className="z-0">{<Outlet />}</main>
      </div>
    </div>
  );
};

export default Sidebar;
