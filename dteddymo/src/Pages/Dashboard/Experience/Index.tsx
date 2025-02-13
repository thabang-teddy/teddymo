import React from "react";
import AuthenticatedLayout from "../../../Layouts/AuthenticatedLayout";
import { Link } from "react-router-dom";
import { ExperienceType } from "../../../Types/global";

interface Props {
	experiences: ExperienceType[];
}

const ExperienceIndex: React.FC<Props> = ({ experiences }) => {
	return (
		<AuthenticatedLayout header="Experience" title="Experience">
			<div className="container">
				<Link
					to="/dashboard/experiences/create"
					className="btn btn-primary mb-3"
				>
					Add New Experience
				</Link>
				<div className="row">
					{experiences.map((experience) => (
						<div className="col-md-4 mb-3" key={experience.id}>
							<div className="card">
								<img
									src={experience.imageUrl}
									className="card-img-top"
									alt={experience.title}
								/>
								<div className="card-body">
									<h5 className="card-title">
										{experience.title}
									</h5>
									<Link
										to={`/dashboard/experiences/${experience.id}/edit`}
										className="btn btn-warning btn-sm"
									>
										Edit
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</AuthenticatedLayout>
	);
};

export default ExperienceIndex;
