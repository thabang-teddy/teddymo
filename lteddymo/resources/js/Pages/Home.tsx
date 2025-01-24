import React from "react";
import { Head, Link } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";
import BlankMainLayout from "@/Layouts/BlankMainLayout";

export default function Home() {
	return (
		<BlankMainLayout>
			<Head title="Home" />
			<div className="container w-100 vh-100 d-flex justify-content-around">
				<div
					className="row m-auto w-100 vh-100 justify-content-evenly"
					style={{ height: 300 }}
				>
					<div className="col-5 d-flex align-items-center">
						<div className="w-100">
							<div className="col-12 row">
								<div className="col-auto">
									<p className="display-2 m-0">HI</p>
								</div>
								<div className="col py-3">
									<h3>
										my name is <strong>Teddy</strong>
									</h3>
									<p className="fw-bold">
										Thabang Teddy Moreasetla
									</p>
								</div>
							</div>
							<div className="col-12">
								<p className="fw-medium">
									A South African based web developer that mainly
									works with C# and JavaScript.
								</p>
								<p className="fw-normal">
									The libraries I work in are React, svelt and I
									have three years of work experience working in
									ASP.Net core building PIMs (Product Information
									Management), Admins, and ecommerce websites.
								</p>
								<Link className="btn btn-secondary" href="/about">
									More About Me
								</Link>
								<Link className="btn btn-dark mx-2" href="/portfolio">
									See my portfolio
								</Link>
								<Link className="btn btn-secondary" href="/contact">
									Contact me
								</Link>
							</div>
						</div>
					</div>
					<div className="col-auto d-flex align-items-center">
						<img
							src="/imgs/profile.jpg"
							className="rounded-circle w-100"
							alt="Logichog logo"
							style={{ height: 300 }}
						/>
					</div>
				</div>
			</div>
		</BlankMainLayout>
	);
}
