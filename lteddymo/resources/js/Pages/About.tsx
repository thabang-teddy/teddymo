import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";
import { CalculateTimeSince } from "@/Funtion/CalculateTimeSince";

export default function About() {
	return (
		<MainLayout>
			<Head title="About" />
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-md-12">
						<div className="card">
							<div className="card-body">
								<h1 className="card-title h3 mb-4">About Me</h1>
								<div className="mb-4">
									<p>
										I'm a skilled C# Web Developer with{" "}
										{CalculateTimeSince("01 march 2021")} of
										experience specializing in application
										development and programming within the
										IT & Telecommunications industry.
									</p>
									<h2 className="text-2xl font-semibold">
										Personal Details
									</h2>
									<ul className="list-disc list-inside">
										<li>Name: Thabang Teddy Morwasetla</li>
										<li>Gender: Male</li>
										<li>Ethnicity: African</li>
										<li>
											Nationality: South African Citizen
										</li>
										<li>Age: {CalculateTimeSince("07 April 1991",  true)}</li>
									</ul>
									<h2 className="text-2xl font-semibold">
										Education
									</h2>
									<p>
										Certificate in Information Technology
										and Computer Sciences - Polokwane TVET
										College
									</p>
									<h2 className="text-2xl font-semibold">
										Skills
									</h2>
									<ul className="list-disc list-inside">
										<li>ASP.NET MVC</li>
										<li>
											Database Management (SQL Server)
										</li>
										<li>HTML, CSS and JavaScript</li>
										<li>React.js</li>
										<li>Svelte.js</li>
										<li>Bootstrap</li>
										<li>Flutter</li>
									</ul>
									<h2 className="text-2xl font-semibold">
										Languages
									</h2>
									<ul className="list-disc list-inside">
										<li>Sepedi: Native speaker</li>
										<li>English: Good proficiency</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
