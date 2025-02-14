import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../Helpers/axiosInstance";
// import { Portfolio } from "../../../Types/portfolio";
import { PORTFOLIO_ENDPOINTS } from "../../Helpers/endpoints";
import { PortfolioType } from "../../Types/global";

const PortfolioView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [portfolio, setPortfolio] = useState<PortfolioType | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const response = await API.get<PortfolioType>(PORTFOLIO_ENDPOINTS.VIEW(id!));
      setPortfolio(response.data);
    };
    fetchPortfolio();
  }, [id]);

  if (!portfolio) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{portfolio.title}</h2>
      <p><strong>Summary:</strong> {portfolio.summary}</p>
      <p><strong>Description:</strong> {portfolio.description}</p>
      <p><strong>Technologies:</strong> {portfolio.technologies.join(", ")}</p>
      <p><strong>Link:</strong> <a href={portfolio.link} target="_blank" rel="noopener noreferrer">Visit</a></p>
      <img src={portfolio.imageUrl} alt={portfolio.title} style={{ width: "300px" }} />
    </div>
  );
};

export default PortfolioView;
