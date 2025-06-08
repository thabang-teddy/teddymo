
import { useEffect } from "react";
import MainLayout from "../Layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getPortfolios } from "../slices/Portfolios/Thunk";
import { PortfolioType } from "../Types/global";

export default function Portfolio() {
	const dispatch = useDispatch<any>();

	const portfolios = useSelector((state: RootState) => state.portfolios.all);
	
	useEffect(() => {
		if (portfolios == null || portfolios.length < 1 ) {
			dispatch(getPortfolios ());
		}
	}, []);

	return (
		<MainLayout title="Portfolio">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12">
						<h1 className="mb-4">Portfolio</h1>
						<div className="row">
							{portfolios?.map((project : PortfolioType) => (
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
