import NotFound from "../NotFound/NotFound";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Mega_menu from "../Pages/Mega_menu/Mega_menu";
import Shop from "../Pages/Shop/Shop";
import Loading from "../Share/Loading/Loading";
import Sidebar from "../Sidebar/Sidebar";

export const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/home", Component: Home },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "/shop", Component: Shop },
  { path: "/blog", Component: Blog },
  { path: "/mega-menu", Component: Mega_menu },
  { path: "/login", Component: Login },
  // { path: "/sidebar", Component: Sidebar },
  { path: "/register", Component: Register },
  // { path: "/loading", Component: Loading },
  { path: "*", Component: NotFound },
];
