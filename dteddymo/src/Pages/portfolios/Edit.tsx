import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getAllPortfolios,
  updatePortfolio,
} from "../../slices/Portfolios/Thunk";
import { AppDispatch, RootState } from "../../store";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { addAlertMessage } from "../../slices/Alerts/Thunk";
import { v4 as uuidv4 } from 'uuid';

const PortfolioEdit: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { all, loading } = useSelector((state: RootState) => state.portfolios);

  const { id } = useParams<{ id: string }>();

  const [form, setForm] = useState({
    id: "",
    title: "",
    summary: "",
    description: "",
    technologies: "",
    link: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (all == null || all.length < 1) {
      dispatch(getAllPortfolios());
    } else {
      let currentPortfolio = all.findIndex((x) => x.id == id);
      if (currentPortfolio < 0) {
        navigate("/portfolios");
      } else {
        // setPortfolio(all[currentPortfolio]);
        let newProfile = all[currentPortfolio];
        setForm({ ...newProfile, technologies: newProfile.technologies.toString() });
      }
    }
  }, [id, all]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let returnData = await dispatch(
      updatePortfolio({
        id: form.id,
        portfolio: { ...form, technologies: form.technologies.split(",") },
      })
    );

    if (returnData?.success) {
      dispatch(addAlertMessage({
        id :  uuidv4(),
        text : "portfolio updated successfully",
        alertType : "success"
      }));
    }

  };

  if (loading) return <p>Loading...</p>;
  if (!loading && all.findIndex((x) => x.id == id) < 0) navigate("/portfolios");

  return (
    <AuthenticatedLayout header="Dashboard > Portfolios > Edit" title="Edit Portfolio">
      <div className="container mt-5">
        <h1 className="mb-4"></h1>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                className="form-control mb-3"
                value={form.title}
                onChange={handleChange}
                required
              />
              <label htmlFor="summary">Summary</label>
              <input
                type="text"
                name="summary"
                className="form-control mb-3"
                value={form.summary}
                onChange={handleChange}
                required
              />
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                className="form-control mb-3"
                value={form.description}
                onChange={handleChange}
                required
              />
              <label htmlFor="technologies">Technologies</label>
              <input
                type="text"
                name="technologies"
                className="form-control mb-3"
                value={form.technologies}
                onChange={handleChange}
                required
              />
              <label htmlFor="link">Link</label>
              <input
                type="text"
                name="link"
                className="form-control mb-3"
                value={form.link}
                onChange={handleChange}
                required
              />
              <label htmlFor="imageUrl">Image Url</label>
              <input
                type="text"
                name="imageUrl"
                className="form-control mb-3"
                value={form.imageUrl}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-success">
                Update
              </button>
            <Link to={"/portfolios"} className="btn btn-secondary mx-2">
              Back to List
            </Link>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default PortfolioEdit;
