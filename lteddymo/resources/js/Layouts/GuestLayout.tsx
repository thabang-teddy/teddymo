import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
	return (
		<div className="d-flex flex-column min-vh-100 bg-light">
			<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
				<div className="container">
					<Link href="/" className="navbar-brand fw-bold fs-4">
						Thabang Teddy Morwasetla
					</Link>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<Link href="/" className="nav-link text-dark">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/about" className="nav-link text-dark">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/experience" className="nav-link text-dark">
									Experience
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/portfolio" className="nav-link text-dark">
									Portfolio
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/contact" className="nav-link text-dark">
									Contact
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/" className="nav-link">
									<ApplicationLogo className="h-20 w-20 text-muted" />
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
		</div>
	);
}
