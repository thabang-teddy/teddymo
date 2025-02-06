import PortfolioList from "../Pages/Dashboard/portfolios/index";
import PortfolioCreate from "../Pages/Dashboard/portfolios/create.tsx";
import PortfolioEdit from "../Pages/Dashboard/portfolios/edit.tsx";
import PortfolioView from "../Pages/Dashboard/portfolios/view.tsx";

import Login from "../Pages/Auth/login.tsx";
import Logout from "../Pages/Auth/logout.tsx";
import Portfolio from "../Pages/Portfolio.tsx";
import Experience from "../Pages/Experience.tsx";
import About from "../Pages/About.tsx";
import Contact from "../Pages/Contact.tsx";
import ContactSuccess from "../Pages/Messages/ContactSuccess.tsx";
import Home from "../Pages/Home.tsx";

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },

  { path: "/", component: <Home /> },
  { path: "/portfolio", component: <Portfolio /> },
  { path: "/experience", component: <Experience /> },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
  { path: "/contact/success", component: <ContactSuccess /> },
];

const authProtectedRoutes = [
  { path: "/portfolios", component: <PortfolioList /> },
  { path: "/portfolios/create", component: <PortfolioCreate /> },
  { path: "/portfolios/edit/:id", component: <PortfolioEdit /> },
  { path: "/portfolios/view/:id", component: <PortfolioView /> },
];

export { publicRoutes, authProtectedRoutes };
