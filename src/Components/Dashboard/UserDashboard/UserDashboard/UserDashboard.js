import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../../Share/Navbar/Navbar";
import TopNavbar from "../../../Share/Navbar/TopNavbar";

const UserDashboard = () => {
  return (
    <section className="">
      <div className="">
        <TopNavbar />
        <Navbar />
      </div>
      <div className="container mx-auto">
        <div className="drawer drawer-mobile ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center ">
            {/* <!-- Page content here --> */}
            <Outlet />
            <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
              Open drawer
            </label>
          </div>
          <div className="drawer-side w-[292.5px] lg:w-[250.5px] xl:w-[292.5px]">
            <label for="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu py-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              <li>
                <NavLink to={"/user-dashboard/my-account"}>Sidebar Item 1</NavLink>
              </li>
              <li>
                <NavLink to={"/user-dashboard/my-order"}>Sidebar Item 2</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
