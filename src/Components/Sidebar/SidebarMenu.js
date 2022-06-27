import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SidebarMenu = ({ route, showAnimation, isOpen }) => {
  const menuAnimation = {
    hidden: {
      hight: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      hight: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div
        onClick={toggleMenu}
        className="menus link hover:link hover:bg-[rgb(45,51,89)] hover:border-r-4 border-white  flex justify-between text-white gap-3 py-[5px] px-[10px] no-underline hover:no-underline text-lg"
      >
        <div className="menu_items flex">
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
                {/* <Ecommerce /> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <FaAngleDown />
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            inherit="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route?.subItems.map((subItem, i) => (
              <NavLink
                to={subItem.path}
                key={i}
                activeClassName="bg-[rgb(45,51,89)]"
                className={`link pl-6 hover:link hover:bg-[rgb(45,51,89)] hover:border-r-2 border-white flex  text-white gap-3 py-2 px-3 no-underline hover:no-underline text-lg`}
              >
                <div className="icon">{subItem.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      inherit="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text whitespace-nowrap text-sm"
                    >
                      {subItem.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;
