import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./Components/Routes/PublicRoutes";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./Components/Hooks/RequireAuth/RequireAuth";
import UserDashboard from "./Components/Dashboard/UserDashboard/UserDashboard/UserDashboard";
import MyAccount from "./Components/Dashboard/UserDashboard/MyAccount/MyAccount";
import MyOrder from "./Components/Dashboard/UserDashboard/MyOrder/MyOrder";
import AdminDashboard from "./Components/Dashboard/AdminDashboard/AdminDashboard";
import AllAdmin from "./Components/Dashboard/AdminDashboard/AllAdmin/AllAdmin";
import AllUsers from "./Components/Dashboard/AdminDashboard/AllUsers/Users/AllUsers";
import AllOrder from "./Components/Dashboard/AdminDashboard/AllOrder/AllOrder";
import Sidebar from "./Components/Sidebar/Sidebar";
import Ecommerce from "./Components/Dashboard/AdminDashboard/Ecommerce/Ecommerce";
import AddProduct from "./Components/Dashboard/AdminDashboard/Ecommerce/AddProduct/AddProduct";
import ProductDetails from "./Components/Dashboard/AdminDashboard/Ecommerce/ProductDetails/ProductDetails";
import Customer from "./Components/Dashboard/AdminDashboard/AllUsers/Customer/Customer";
import PendingOrder from "./Components/Dashboard/AdminDashboard/AllOrder/PendingOrder/PendingOrder";
import PaidOrder from "./Components/Dashboard/AdminDashboard/AllOrder/PaidOrder/PaidOrder";
import AllProducts from "./Components/Dashboard/AdminDashboard/Ecommerce/AllProducts/AllProducts";
import AllProducts1 from "./Components/Dashboard/AdminDashboard/Ecommerce/AllProducts/AllProducts1";
import AllProducts2 from "./Components/Dashboard/AdminDashboard/Ecommerce/AllProducts/AllProducts2";
import HomeDashboard from "./Components/Dashboard/AdminDashboard/HomeDashboard.js/HomeDashboard";
import Shop from "./Components/Pages/Shop/Shop";
import ShopAllProducts1 from "./Components/Pages/Shop/ShopAllProducts1";
import ShopAllProducts2 from "./Components/Pages/Shop/ShopAllProducts2";
import Categories from "./Components/Pages/Categories/Categories";
import CategoryProducts1 from "./Components/Pages/Categories/CategoryProducts1";
import CategoryProducts2 from "./Components/Pages/Categories/CategoryProducts2";
import AddOthers from "./Components/Dashboard/AdminDashboard/Ecommerce/AddOthers/AddOthers";
import RequireAdmin from "./Components/Hooks/RequireAdmin";
import RequireNotUser from "./Components/Hooks/RequireNotUser";
import Payment from "./Components/Dashboard/UserDashboard/MyOrder/Payment";

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
              <Route path="/shop" element={<Shop />}>
                <Route index element={<ShopAllProducts1 />}></Route>
                <Route path="1" element={<ShopAllProducts1 />}></Route>
                <Route path="2" element={<ShopAllProducts2 />}></Route>
              </Route>
              <Route path="/categories/:category" element={<Categories />}>
                <Route index element={<CategoryProducts1 />}></Route>
                <Route path="1" element={<CategoryProducts1 />}></Route>
                <Route path="2" element={<CategoryProducts2 />}></Route>
              </Route>
              {/* <Route element={<RequireAuth />}>
                {PrivetRoutes.map(({ path, Component }, index) => (
                  <Route key={index} path={path} element={<Component></Component>}></Route>
                ))}
              </Route> */}
              <Route element={<RequireAuth />}>
                <Route path="/user-dashboard" element={<UserDashboard />}>
                  <Route index element={<MyAccount />} />
                  <Route path="my-account" element={<MyAccount />} />
                  <Route path="payment/:id" element={<Payment />} />
                  <Route path="my-order" element={<MyOrder />} />
                </Route>
              </Route>
              {/* <Route element={<RequireAuth />}>
                <Route path="/admin-dashboard" element={<AdminDashboard />}>
                  <Route index element={<AllUsers />} />
                  <Route path="all-user" element={<AllUsers />} />
                  <Route path="all-admin" element={<AllAdmin />} />
                  <Route path="all-order" element={<AllOrder />} />
                </Route>
              </Route> */}
              <Route element={<RequireAuth />}>
                <Route element={<RequireNotUser />}>
                  <Route path="/admin-dashboard" element={<Sidebar />}>
                    <Route index element={<HomeDashboard />} />
                    <Route path="home-dashboard" element={<HomeDashboard />} />
                    <Route path="ecommerce" element={<Ecommerce />} />
                    <Route path="add-product" element={<AddProduct />} />
                    <Route path="add-others" element={<AddOthers />} />
                    <Route path="product-details/:id" element={<ProductDetails />} />
                    <Route element={<RequireAdmin />}>
                      <Route path="all-user" element={<AllUsers />} />
                      <Route path="customer" element={<Customer />} />
                      <Route path="admin" element={<AllAdmin />} />
                    </Route>
                    <Route path="all-order" element={<AllOrder />} />
                    <Route path="all-product" element={<AllProducts />}>
                      <Route index element={<AllProducts1 />}></Route>
                      <Route path="1" element={<AllProducts1 />}></Route>
                      <Route path="2" element={<AllProducts2 />}></Route>
                    </Route>
                    <Route path="order-pending" element={<PendingOrder />} />
                    <Route path="order-paid" element={<PaidOrder />} />
                  </Route>
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
