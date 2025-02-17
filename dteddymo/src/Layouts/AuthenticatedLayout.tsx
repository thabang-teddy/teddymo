import { Link } from "react-router-dom";
import { LayoutProps } from "../Types/global";
import { useEffect, useState } from "react";
// import AlertComponent from "../Components/AlertComponent";

const AuthenticatedLayout: React.FC<LayoutProps> = ({
  header,
  title,
  children,
  showNavbar = true,
}) => {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    // window.tab = title + "TeddyMo";
    setCurrentUrl(window.location.pathname);
  }, [title]);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Navbar */}
      {showNavbar ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Back To Website
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className={`nav-link ${currentUrl == "/" ? "active" : ""}`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/contacts"}
                    className={`nav-link ${
                      currentUrl.includes("/contacts") ? "active" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/experiences"}
                    className={`nav-link ${
                      currentUrl.includes("/experiences") ? "active" : ""
                    }`}
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/portfolios"}
                    className={`nav-link ${
                      currentUrl.includes("/portfolios") ? "active" : ""
                    }`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/profile"}
                    className={`nav-link ${
                      currentUrl.includes("/profile") ? "active" : ""
                    }`}
                  >
                    profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"logout"} className={`nav-link`}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
      {header && (
        <header className="bg-white shadow-sm">
          <div className="container py-3">{header}</div>
        </header>
      )}

      <main className="flex-grow-1">{children}</main>
    </div>
  );
};

export default AuthenticatedLayout;
