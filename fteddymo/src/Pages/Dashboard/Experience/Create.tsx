import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExperienceCreateType } from "../../../Types/global";
import { useDispatch } from "react-redux";
import AuthenticatedLayout from "../../../Layouts/AuthenticatedLayout";
import { createExperience } from "../../../slices/Experiences/Thunk";
import { AppDispatch } from "../../../store";

const ExperienceCreate: React.FC = () => {
	  const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<ExperienceCreateType>({
        title: "",
        description: "",
        technologies: [],
        link: "",
        imageUrl: "",
    });

    const [errors, setErrors] = useState<Partial<ExperienceCreateType>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleTechnologiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const values = e.target.value.split(/,(?=(?:(?:[^"]*"[^"]*")|(?![^"]*"))*$)/).map(value => value.trim());
        setFormData({ ...formData, technologies: values });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(createExperience(formData))
            .then((data : any) => {
                if (data != null && data.payload != null) {
                    navigate("/dashboard/experiences");
                } else {
                    setErrors((prevErrors) => ({...prevErrors, formMain: "Could not create experience"}));
                }
            })
            .catch(() => setErrors((prevErrors) => ({...prevErrors, formMain: "Could not create experience"})));
    };

    return (
        <AuthenticatedLayout>
            <div className="container">
                <h2 className="h4 font-weight-bold text-dark">Experience Create</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={formData.title} onChange={handleChange} />
                        {errors.title && <small className="text-danger">{errors.title}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" rows={5} value={formData.description} onChange={handleChange} />
                        {errors.description && <small className="text-danger">{errors.description}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="technologies" className="form-label">Technologies</label>
                        <input type="text" className="form-control" id="technologies" value={formData.technologies.join(", ")} onChange={handleTechnologiesChange} />
                        {errors.technologies && <small className="text-danger">{errors.technologies}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="link" className="form-label">Link</label>
                        <input type="text" className="form-control" id="link" value={formData.link} onChange={handleChange} />
                        {errors.link && <small className="text-danger">{errors.link}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imageUrl" className="form-label">Image Url</label>
                        <input type="text" className="form-control" id="imageUrl" value={formData.imageUrl} onChange={handleChange} />
                        {errors.imageUrl && <small className="text-danger">{errors.imageUrl}</small>}
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default ExperienceCreate;