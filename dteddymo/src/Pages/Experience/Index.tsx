import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { Link } from "react-router-dom";
import { ExperienceType } from "../../Types/global";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getAllExperiences } from "../../slices/Experiences/Thunk";

const ExperienceList = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {  all } = useSelector((state: RootState) => state.experiences);
	const [experience, setExperience] = useState<ExperienceType>();
	
	useEffect(() => {
		if (all.length > 1) {
			dispatch(getAllExperiences());
		}
	}, [all]);
	
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
					{all.map((experience) => (
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

export default ExperienceList;
