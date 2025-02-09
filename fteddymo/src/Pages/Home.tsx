import { Link } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import profile from "../Assets/profile.jpg";


export default function Home() {
	return (
		<MainLayout title="Home">
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
								<Link className="btn btn-secondary" to="/about">
									More About Me
								</Link>
								<Link className="btn btn-dark mx-2" to="/portfolio">
									See my portfolio
								</Link>
								<Link className="btn btn-secondary" to="/contact">
									Contact me
								</Link>
							</div>
						</div>
					</div>
					<div className="col-auto d-flex align-items-center">
						<img
							src={profile}
							className="rounded-circle w-100"
							alt="Logichog logo"
							style={{ height: 300 }}
						/>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
