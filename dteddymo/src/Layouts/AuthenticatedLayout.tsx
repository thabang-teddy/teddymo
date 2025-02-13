import { Link } from "react-router-dom";
import { LayoutProps } from "../Types/global";
import { useEffect, useState } from "react";

const AuthenticatedLayout: React.FC<LayoutProps> = ({
  header,
  title,
  children,
  showNavbar = true,
}) => {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    // window.tab = title + "TeddyMo";
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
                    to={"/dashboard/index"}
                    className={`nav-link ${
                      currentUrl.includes("/dashboard/index") ? "active" : ""
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/dashboard/contacts/index"}
                    className={`nav-link ${
                      currentUrl.includes("/dashboard/contacts/index")
                        ? "active"
                        : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"experiences.index"}
                    className={`nav-link ${
                      currentUrl.includes("/experiences") ? "active" : ""
                    }`}
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"portfolios.index"}
                    className={`nav-link ${
                      currentUrl.includes("/portfolios") ? "active" : ""
                    }`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"profile.edit"}
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
