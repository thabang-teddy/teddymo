import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";
import { CalculateTimeSince } from "@/Funtion/CalculateTimeSince";

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
		title: "E-commerce Website",
		description:
			"Working on a team to develop a fully functional e-commerce platform for a leading distributor of branded promotional products.",
		technologies: ["C#", "ASP.NET MVC", "SQL Server", "JavaScript"],
		imageUrl: "/placeholder.svg?height=200&width=300",
	},
	{
		id: 2,
		title: "Product Information Management (PIM) System",
		description:
			"Implemented a PIM admin system to streamline data handling and improve operational efficiency.",
		technologies: ["C#", "ASP.NET MVC", "SQL Server", "RESTful APIs"],
		imageUrl: "/placeholder.svg?height=200&width=300",
	},
	{
		id: 3,
		title: "Customer Portal",
		description:
			"Built a user-friendly customer portal for managing orders, tracking shipments, and accessing support resources.",
		technologies: ["C#", "ASP.NET Core", "React", "SQL Server"],
		imageUrl: "/placeholder.svg?height=200&width=300",
	},
];

export default function Experience() {
	return (
		<MainLayout>
			<Head title="Experience" />
			<div className="container">
				<div className="row justify-content-center my-5">
					<div className="col-md-12">
						<h1 className="card-title h3 mb-4">Work Experience</h1>
						<div className="card">
							<div className="card-body">
								<div className="mb-4">
									<h2 className="h4">
										ASP.NET Web Developer
									</h2>
									<p className="mb-1 fw-bold">JHnet</p>
									<p className="text-muted">
										IT & Internet – IT & Telecommunications
										– Application Development & Programming
									</p>
									<p className="text-muted">
										March 2021 – Present (
										{CalculateTimeSince("01 march 2021")})
									</p>
									<ul className="mt-3">
										<li>
											Developed and maintained web
											applications using C#, ASP.NET MVC,
											and related technologies.{" "}
										</li>
										<li>
											Worked on admin and e-commerce
											websites for South Africa's leading
											distributor of branded promotional
											products.
										</li>
										<li>
											Designed and implemented Product
											Information Management (PIM) admin
											systems to streamline data handling
											and improve operational efficiency.
										</li>
										<li>
											Collaborated with cross-functional
											teams to gather requirements and
											deliver scalable software solutions.
										</li>
										<li>
											Optimized application performance
											and resolved technical issues to
											ensure seamless functionality.
										</li>
										<li>
											Contributed to the development of
											user-centric features and
											interfaces, enhancing overall user
											experience.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-12">
						<h1 className="mb-4">Responsibilities</h1>
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
