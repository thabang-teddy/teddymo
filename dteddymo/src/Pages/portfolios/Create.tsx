import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPortfolio } from "../../slices/Portfolios/Thunk";
import { AppDispatch } from "../../store";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

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
    await dispatch(
      createPortfolio({ ...form, technologies: form.technologies.split(",") })
    );
    navigate("/portfolios");
  };

  return (
    <AuthenticatedLayout header="Dashboard" title="Create Portfolio">
      <div className="container">
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
            <label className="form-label">Technologies (comma separated)</label>
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
    </AuthenticatedLayout>
  );
};

export default PortfolioCreate;
