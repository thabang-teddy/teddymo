import Portfolio from "../Pages/Portfolio.tsx";
import Experience from "../Pages/Experience.tsx";
import About from "../Pages/About.tsx";
import Contact from "../Pages/Contact.tsx";
import ContactSuccess from "../Pages/Messages/ContactSuccess.tsx";
import Home from "../Pages/Home.tsx";

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/portfolio", component: <Portfolio /> },
  { path: "/experience", component: <Experience /> },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
  { path: "/contact/success", component: <ContactSuccess /> },
];

export { publicRoutes };
