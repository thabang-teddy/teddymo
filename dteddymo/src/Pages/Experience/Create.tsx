import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { ExperienceCreateType } from "../../Types/global";
import { useDispatch } from "react-redux";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { createExperience } from "../../slices/Experiences/Thunk";
import { AppDispatch } from "../../store";
import { addAlertMessage } from "../../slices/Alerts/Thunk";
import { v4 as uuidv4 } from "uuid";

const ExperienceCreate: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    jobtitle: "",
    company: "",
    duration: "",
    description: "",
    link: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let returnData = await dispatch(createExperience(form));
    if (returnData?.success) {
      dispatch(
        addAlertMessage({
          id: uuidv4(),
          text: "experience created successfully",
          alertType: "success",
        })
      );
      navigate("/experiences");
    }
  };

  return (
    <AuthenticatedLayout
      header="Dashboard > Experiences > Create"
      title="Create Experience"
    >
      <div className="container mt-5">
        <h1 className="mb-4"></h1>
        <div className="card">
          <div className="card-body">
            <h2 className="h4 font-weight-bold text-dark">Experience Create</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="jobtitle"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Company
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Duration
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="duration"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  rows={5}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="link" className="form-label">
                  Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
              <Link to={"/experiences"} className="btn btn-secondary mx-2">
                Back to List
              </Link>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default ExperienceCreate;
