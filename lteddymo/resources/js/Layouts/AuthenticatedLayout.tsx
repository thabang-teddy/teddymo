import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";

export default function Authenticated({
	header,
	children,
}: PropsWithChildren<{ header?: ReactNode }>) {
	const { auth, url } = usePage().props;

	const isActive = (route: string) => url === route;

	return (
		<div className="d-flex flex-column min-vh-100 bg-light">
			{/* Navbar */}
			<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
				<div className="container">
					<Link href="/" className="navbar-brand">
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
									href={route("dashboard.index")}
									className={`nav-link ${
										isActive("/") ? "active" : ""
									}`}
								>
									Dashboard
								</Link>
							</li>
							<li className="nav-item">
								<Link
									href={route("dashboard.contacts.index")}
									className={`nav-link ${
										isActive("/") ? "active" : ""
									}`}
								>
									Contact
								</Link>
							</li>
							<li className="nav-item">
								<Link
									href={route("experiences.index")}
									className={`nav-link ${
										isActive("/experiences") ? "active" : ""
									}`}
								>
									Experience
								</Link>
							</li>
							<li className="nav-item">
								<Link
									href={route("portfolios.index")}
									className={`nav-link ${
										isActive("/portfolios") ? "active" : ""
									}`}
								>
									Portfolio
								</Link>
							</li>
							<li className="nav-item">
								<Link
									href={route("profile.edit")}
									className={`nav-link ${
										isActive("/profile") ? "active" : ""
									}`}
								>
									profile
								</Link>
							</li>
							<li className="nav-item">
								<Link
									href={route("logout")}
									className={`nav-link`}
								>
									Logout
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{header && (
				<header className="bg-white shadow-sm">
					<div className="container py-3">{header}</div>
				</header>
			)}

			<main className="flex-grow-1">{children}</main>
		</div>
	);
}
