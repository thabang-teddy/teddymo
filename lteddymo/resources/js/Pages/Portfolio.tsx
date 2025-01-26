import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";

interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	link: string,
}

const projects: Project[] = [
	{
		id: 1,
		title: "GIWU",
		description:
			"Developed a fully functional e-commerce platform for a leading distributor of branded promotional products.",
		technologies: ["C#", "ASP.NET MVC", "SQL Server", "JavaScript"],
		link: "giwu.teddymo.co.za",
		imageUrl: "/placeholder.svg?height=200&width=300",
	},
	{
		id: 2,
		title: "My Portfolio Website",
		description:
			"This project is a modern web application built with Laravel 11, React, and Inertia.js. The application saves data in an SQLite database for simplicity and ease of deployment. The website has an admin section where I view contact messages, crud for portfolio, and crud for experience.",
		technologies: ["PHP", "Laravel 11", "SQLite", "React", "Bootstrap"],
		link: "teddymo.co.za",
		imageUrl: "/placeholder.svg?height=200&width=300",
	},
	{
		id: 3,
		title: "Flutter App",
		description:
			"Built a user-friendly customer portal for managing orders, tracking shipments, and accessing support resources.",
		technologies: ["Dart", "Flutter", "SQLite"],
		link: "teddymo.co.za/port",
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
