import React, { Children } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Sidebar.css";
import { FaBars, FaFile, FaHome, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
const Sidebar = () => {
  const routes = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUser />,
    },
    {
      path: "/",
      name: "Contact",
      icon: <FaFile />,
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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
        duration: 0.2,
      },
    },
  };
  return (
    <div className="">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "40px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 9,
          },
        }}
        className="sidebar bg-[rgb(0,7,61)] text-white h-screen"
      >
        <div className="top-section py-4 px-3 flex items-center justify-between">
          {isOpen && (
            <motion.h1
              variants={showAnimation}
              inherit="hidden"
              animate="show"
              exit="hidden"
              className="logo text-lg"
            >
              DoSomeCoding
            </motion.h1>
          )}
          <div className="bars">
            <FaBars onClick={toggle} className="text-xl" />
          </div>
        </div>
        <div className="search flex items-center mr-[10px] h-[30px] p-[10px]">
          <div className="search_icon text-lg">
            <BiSearch />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                type="text"
                placeholder="Search..."
                className="border-none w-32 ml-3 rounded active:border-none focus:border-none bg-white py-2 px-3"
              />
            )}
          </AnimatePresence>
        </div>

        <section className="routes mt-10">
          {routes.map((route, index) => (
            <NavLink
              to={route.path}
              key={index}
              className={
                "link hover:link hover:bg-[rgb(45,51,89)] hover:border-r-2 border-white  flex  text-white gap-3 py-2 px-3 no-underline hover:no-underline text-lg"
              }
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
          ))}
        </section>
      </motion.div>
      {/* <main>{Children}</main> */}
    </div>
  );
};

export default Sidebar;
