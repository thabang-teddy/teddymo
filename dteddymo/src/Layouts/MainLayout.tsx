import { Link } from "react-router-dom";
import { LayoutProps } from "../Types/global";
import AlertComponent from "../Components/AlertComponent";

const MainLayout: React.FC<LayoutProps> = ({
  header,
  title,
  children,
  showNavbar = true,
}) => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-4">
            Thabang Teddy Morwasetla
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-dark">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/experience" className="nav-link text-dark">
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link text-dark">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-dark">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-grow-1">{children}</main>

      <footer className="bg-white shadow-sm mt-4">
        <div className="container py-3">
          <p className="text-center text-muted mb-0">
            &copy; 2024 Thabang Teddy Morwasetla. All rights reserved.
          </p>
        </div>
      </footer>
      <AlertComponent />
    </div>
  );
};

export default MainLayout;
