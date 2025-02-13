import PortfolioList from "../Pages/Dashboard/portfolios/index";
import PortfolioCreate from "../Pages/Dashboard/portfolios/create.tsx";
import PortfolioEdit from "../Pages/Dashboard/portfolios/edit.tsx";
import PortfolioView from "../Pages/Dashboard/portfolios/view.tsx";

import Login from "../Pages/Auth/login.tsx";
import Logout from "../Pages/Auth/logout.tsx";
import Dashboard from "../Pages/Dashboard/Dashboard.tsx";

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },

];

const authProtectedRoutes = [
  { path: "/", component: <Dashboard /> },
  { path: "/portfolios", component: <PortfolioList /> },
  { path: "/portfolios/create", component: <PortfolioCreate /> },
  { path: "/portfolios/edit/:id", component: <PortfolioEdit /> },
  { path: "/portfolios/view/:id", component: <PortfolioView /> },
];

export { publicRoutes, authProtectedRoutes };
