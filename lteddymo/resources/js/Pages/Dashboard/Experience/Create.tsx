import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { ExperienceCreateType } from "@/types";

interface Props {
	portfolio: ExperienceCreateType;
}

const ExperienceCreate: React.FC<Props> = ({ portfolio }) => {
	const { data, setData, post, put, errors } = useForm<ExperienceCreateType>({
		title: portfolio?.title || "",
		description: portfolio?.description || "",
		technologies: portfolio?.technologies || [],
		link: portfolio?.link || "",
		imageUrl: portfolio?.imageUrl || "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		post("/dashboard/experiences", data);
	};

	return (
		<AuthenticatedLayout
			header={
				<h2 className="h4 font-weight-bold text-dark">
					Experience Create
				</h2>
			}
		>
			<Head title="Experience Create" />

			<div className="container">
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="title" className="form-label">
							Title
						</label>
						<input
							type="text"
							className="form-control"
							id="title"
							value={data.title}
							onChange={(e) => setData("title", e.target.value)}
						/>
						{errors.title && (
							<small className="text-danger">
								{errors.title}
							</small>
						)}
					</div>
					<div className="mb-3">
						<label htmlFor="description" className="form-label">
							Description
						</label>
						<textarea
							className="form-control"
							id="description"
							rows={5}
							value={data.description}
							onChange={(e) =>
								setData("description", e.target.value)
							}
						/>
						{errors.description && (
							<small className="text-danger">
								{errors.description}
							</small>
						)}
					</div>
					<div className="mb-3">
						<label htmlFor="technologies" className="form-label">
							Technologies
						</label>
						<input
							type="text"
							className="form-control"
							id="technologies"
							value={data.technologies}
							onChange={(e) => {

								// Split the string by commas, handling quoted values
								const values = e.target.value.split(/,(?=(?:(?:[^"]*"[^"]*")|(?![^"]*"))*$)/);

								// Remove any leading/trailing spaces from each value
								const trimmedValues = values.map(value => value.trim());

								setData("technologies", trimmedValues);
							}}
						/>
						{errors.technologies && (
							<small className="text-danger">
								{errors.technologies}
							</small>
						)}
					</div>
					<div className="mb-3">
						<label htmlFor="link" className="form-label">
							Link
						</label>
						<input
							type="text"
							className="form-control"
							id="link"
							value={data.link}
							onChange={(e) => setData("link", e.target.value)}
						/>
						{errors.link && (
							<small className="text-danger">
								{errors.link}
							</small>
						)}
					</div>
					<div className="mb-3">
						<label htmlFor="imageUrl" className="form-label">
							Image Url
						</label>
						<input
							type="text"
							className="form-control"
							id="imageUrl"
							value={data.imageUrl}
							onChange={(e) => setData("imageUrl", e.target.value)}
						/>
						{errors.imageUrl && (
							<small className="text-danger">
								{errors.imageUrl}
							</small>
						)}
					</div>
					<button type="submit" className="btn btn-primary">
						Create
					</button>
				</form>
			</div>
		</AuthenticatedLayout>
	);
};

export default ExperienceCreate;
