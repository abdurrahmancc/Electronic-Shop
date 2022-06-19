import NotFound from "../NotFound/NotFound";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Mega_menu from "../Pages/Mega_menu/Mega_menu";
import Shop from "../Pages/Shop/Shop";

export const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/home", Component: Home },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "/shop", Component: Shop },
  { path: "/blog", Component: Blog },
  { path: "/mega-menu", Component: Mega_menu },
  { path: "*", Component: NotFound },
];
