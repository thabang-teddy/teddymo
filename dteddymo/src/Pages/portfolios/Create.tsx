import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPortfolio } from "../../slices/Portfolios/Thunk";
import { AppDispatch } from "../../store";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { addAlertMessage } from "../../slices/Alerts/Thunk";
import { v4 as uuidv4 } from "uuid";

const PortfolioCreate: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    summary: "",
    description: "",
    technologies: "",
    link: "",
    imageUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let returnData = await dispatch(
      createPortfolio({ ...form, technologies: form.technologies.split(",") })
    );
    if (returnData?.success) {
      dispatch(
        addAlertMessage({
          id: uuidv4(),
          text: "portfolio created successfully",
          alertType: "success",
        })
      );
      navigate("/portfolios");
    }
  };

  return (
    <AuthenticatedLayout
      header="Dashboard > Portfolios > Create"
      title="Create Portfolio"
    >
      <div className="container mt-5">
        <h1 className="mb-4"></h1>
        <div className="card">
          <div className="card-body">
            <h2 className="h4 font-weight-bold text-dark">Portfolio Create</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Summary</label>
                <input
                  type="text"
                  name="summary"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Technologies (comma separated)
                </label>
                <input
                  type="text"
                  name="technologies"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Link</label>
                <input
                  type="text"
                  name="link"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default PortfolioCreate;
