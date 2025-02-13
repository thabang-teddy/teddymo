import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePortfolio } from "../../../slices/Portfolios/Thunk";
import API from "../../../Helpers/axiosInstance";
import { PORTFOLIO_ENDPOINTS } from "../../../Helpers/endpoints";
import { AppDispatch } from "../../../store";
import { PortfolioType } from "../../../Types/global";

const PortfolioEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [form, setForm] = useState<PortfolioType>({
    id: "",
    title: "",
    summary: "",
    description: "",
    technologies: [],
    link: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchPortfolio = async () => {
      const response = await API.get<PortfolioType>(PORTFOLIO_ENDPOINTS.VIEW(id!));
      setForm(response.data);
    };
    fetchPortfolio();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(updatePortfolio({ id: form.id, portfolio: { ...form, technologies: form.technologies } }));
    navigate("/portfolios");
  };

  return (
    <div className="container">
      <h2>Edit Portfolio</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" className="form-control mb-3" value={form.title} onChange={handleChange} required />
        <input type="text" name="summary" className="form-control mb-3" value={form.summary} onChange={handleChange} required />
        <textarea name="description" className="form-control mb-3" value={form.description} onChange={handleChange} required />
        <input type="text" name="technologies" className="form-control mb-3" value={form.technologies.join(", ")} onChange={handleChange} required />
        <input type="text" name="link" className="form-control mb-3" value={form.link} onChange={handleChange} required />
        <input type="text" name="imageUrl" className="form-control mb-3" value={form.imageUrl} onChange={handleChange} required />
        <button type="submit" className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default PortfolioEdit;
