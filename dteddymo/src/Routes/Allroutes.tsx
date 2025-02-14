import PortfolioList from "../Pages/portfolios/Index";
import PortfolioCreate from "../Pages/portfolios/Create";
import PortfolioEdit from "../Pages/portfolios/Edit";
import PortfolioView from "../Pages/portfolios/View";

import Login from "../Pages/Auth/login.tsx";
import Logout from "../Pages/Auth/logout.tsx";
import Dashboard from "../Pages/Dashboard/Dashboard.tsx";
import ExperienceList from "../Pages/Experience/Index.tsx";
import ExperienceCreate from "../Pages/Experience/Create.tsx";
import ExperienceEdit from "../Pages/Experience/Edit.tsx";
import ExperienceView from "../Pages/Experience/View.tsx";

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

  { path: "/experiences", component: <ExperienceList /> },
  { path: "/experiences/create", component: <ExperienceCreate /> },
  { path: "/experiences/edit/:id", component: <ExperienceEdit /> },
  { path: "/experiences/view/:id", component: <ExperienceView  /> },
];

export { publicRoutes, authProtectedRoutes };
