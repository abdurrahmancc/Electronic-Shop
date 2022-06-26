import React from "react";
import Collapsible from "react-collapsible";
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import "./Ecommerce.css";

const Ecommerce = () => {
  return (
    <div className="bg-inherit w-full ">
      <div className="w-full">
        <Collapsible className="w-full" trigger={["Ecommerce", <BsChevronDown />]}>
          <ul className="w-full">
            <li className="w-full">
              <NavLink to={"/admin-dashboard/all-order"} className={"w-full"}>
                all-order
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin-dashboard/all-user"}>all-user</NavLink>
            </li>
            <li>
              <NavLink to={"/admin-dashboard/all-admin"}>all-admin</NavLink>
            </li>
          </ul>
        </Collapsible>
      </div>
    </div>
  );
};

export default Ecommerce;
