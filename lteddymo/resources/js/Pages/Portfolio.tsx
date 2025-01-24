import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";

interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: "GIWU",
		description:
			"Developed a fully functional e-commerce platform for a leading distributor of branded promotional products.",
		technologies: ["C#", "ASP.NET MVC", "SQL Server", "JavaScript"],
		imageUrl: "/placeholder.svg?height=200&width=300",
	},
	{
		id: 2,
		title: "My Portfolio Website",
		description:
			"This project is a modern web application built with Laravel 11, React, and Inertia.js. The application is designed to showcase portfolio projects and leverages SQLite as its database for simplicity and ease of deployment. The Laravel backend manages routing, authentication, and data handling, while the React frontend provides a seamless user experience. Inertia.js bridges the backend and frontend, enabling efficient single-page app-like navigation without a heavy API layer. The site includes features like project listings, user interaction, and data persistence, tailored to highlight portfolio items effectively.",
		technologies: ["PHP", "Laravel 11", "SQLite", "React"],
		imageUrl: "/placeholder.svg?height=200&width=300",
	},
	{
		id: 3,
		title: "Flutter App",
		description:
			"Built a user-friendly customer portal for managing orders, tracking shipments, and accessing support resources.",
		technologies: ["Dart", "Flutter", "React", "SQLite"],
		imageUrl: "/placeholder.svg?height=200&width=300",
	},
];

export default function Portfolio() {
	return (
		<MainLayout>
			<Head title="Portfolio" />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12">
						<h1 className="mb-4">Portfolio</h1>
						<div className="row">
							{projects.map((project) => (
								<div key={project.id} className="col-md-4 mb-4">
									<div className="card h-100">
										<div className="card-body">
											<h2 className="card-title h5">
												{project.title}
											</h2>
											<p className="card-text">
												{project.description}
											</p>
											<div className="mt-3">
												{project.technologies.map(
													(tech, index) => (
														<span
															key={index}
															className="badge bg-secondary me-1"
														>
															{tech}
														</span>
													)
												)}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
