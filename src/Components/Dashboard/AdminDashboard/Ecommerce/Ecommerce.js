import React from "react";
import Collapsible from "react-collapsible";
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import "./Ecommerce.css";
import { AnimatePresence, motion } from "framer-motion";

const Ecommerce = ({ route, isOpen }) => {
  return (
    <div className="bg-inherit w-full ">
      <div className="w-full">
        <Collapsible className="w-full" trigger={["Ecommerce", <BsChevronDown />]}>
          <ul className="w-full">
            {route?.subItems.map((subItem, i) => (
              <NavLink
                to={subItem.path}
                key={i}
                activeClassName="bg-[rgb(45,51,89)] "
                className={`menus link hover:link hover:bg-[rgb(45,51,89)] z-50  hover:border-none flex text-white gap-3 py-2 no-underline hover:no-underline text-sm`}
              >
                <div className="icon">{subItem.icon}</div>
                {subItem.name}
              </NavLink>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
};

export default Ecommerce;
