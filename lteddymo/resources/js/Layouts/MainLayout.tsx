import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { auth, url } = usePage().props;

  const isActive = (route: string) => url === route;

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand">
            Thabang Teddy Morwasetla
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
                  href="/"
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/experience"
                  className={`nav-link ${
                    isActive('/experience') ? 'active' : ''
                  }`}
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/portfolio"
                  className={`nav-link ${
                    isActive('/portfolio') ? 'active' : ''
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </li>
              {auth.user ? (
                <li className="nav-item">
                  <Link
                    href="/dashboard"
                    className={`nav-link ${
                      isActive('/dashboard') ? 'active' : ''
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href="/login"
                    className={`nav-link ${isActive('/login') ? 'active' : ''}`}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1">{children}</main>

      {/* Footer */}
      <footer className="bg-light py-3 mt-auto flex-shrink-0">
        <div className="container">
          <p className="text-center text-muted mb-0">
            &copy; 2024 Thabang Teddy Morwasetla. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
