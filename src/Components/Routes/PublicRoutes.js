import NotFound from "../NotFound/NotFound";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";
import Categories from "../Pages/Categories/Categories";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import CheckOut from "../Pages/Shop/CheckOut";
import ItemsDetails from "../Pages/Shop/ItemsDetails";
import Shop from "../Pages/Shop/Shop";
import ViewCart from "../Pages/Shop/ViewCart";
import Loading from "../Share/Loading/Loading";
import Sidebar from "../Sidebar/Sidebar";

export const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/home", Component: Home },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "/item-details/:id", Component: ItemsDetails },
  { path: "/view-cart", Component: ViewCart },
  { path: "/checkOut", Component: CheckOut },
  { path: "/checkOut/:id", Component: CheckOut },
  // { path: "/categories/:category", Component: Categories },
  // { path: "/shop", Component: Shop },
  { path: "/blog", Component: Blog },
  { path: "/blog-details/:id", Component: BlogDetails },
  { path: "/login", Component: Login },
  // { path: "/sidebar", Component: Sidebar },
  { path: "/register", Component: Register },
  // { path: "/loading", Component: Loading },
  { path: "*", Component: NotFound },
];
