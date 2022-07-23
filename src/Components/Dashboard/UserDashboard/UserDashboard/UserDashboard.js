import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Newsletters from "../../../Pages/Home/Home/Newsletters/Newsletters";
import Footer from "../../../Share/Footer/Footer";
import Navbar from "../../../Share/Navbar/Navbar";
import TopNavbar from "../../../Share/Navbar/TopNavbar";
import emptyUser from "../../../../assets/empty-user.png";
import { MdAddShoppingCart } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Share/Firebase/Firebase";
import Loading from "../../../Share/Loading/Loading";
import "./UserDashboard.css";
import { FaUserAlt } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";

const UserDashboard = () => {
  const [user, loading] = useAuthState(auth);
  const crumbs = [
    { path: "home", name: "home" },
    { path: "/user-dashboard/my-order", name: "My Order" },
  ];

  if (loading) {
    return <Loading />;
  }
  console.log(user);
  return (
    <>
      <div className="">
        <TopNavbar />
        <Navbar />
      </div>
      <main className="">
        <section className=" bg-slate-100 py-2 mb-6">
          <div className="container mx-auto">
            <div className="text-sm breadcrumbs">
              <Breadcrumb crumbs={crumbs} />
            </div>
          </div>
        </section>
        <section className="container mx-auto mt-5">
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
              {/* <!-- Page content here --> */}
              <Outlet />
              <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                Open drawer
              </label>
            </div>
            <div className="drawer-side relative lg:static right-1 lg:right-0 p-1 w-[292.5px] lg:w-[250.5px] xl:w-[292.5px] ">
              <label for="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu rounded-lg overflow-y-auto sidebar_shadow text-base-content">
                {/* <!-- Sidebar content here --> */}
                <li className="bg-primary mb-4">
                  <div className="p-10 flex flex-col">
                    <div class="avatar online mx-auto">
                      <div class="w-24 rounded-full">
                        <img
                          src={user?.photoURL ? user?.photoURL : emptyUser}
                          className={"mx-auto"}
                          alt="user_logo"
                        />
                      </div>
                    </div>
                    <h5 className="text-neutral font-bold text-xl">{user?.displayName}</h5>
                  </div>
                </li>
                <li>
                  <NavLink
                    to={"/user-dashboard/my-account"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg text-neutral bg-primary px-10 rounded-none"
                        : "text-lg px-10 rounded-none"
                    }
                  >
                    <BiUser />
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/user-dashboard/my-order"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg text-neutral bg-primary px-10 rounded-none"
                        : "text-lg px-10 rounded-none"
                    }
                  >
                    <span>
                      <MdAddShoppingCart />
                    </span>{" "}
                    My Orders
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Newsletters />
      </main>
      <Footer />
    </>
  );
};

export default UserDashboard;
