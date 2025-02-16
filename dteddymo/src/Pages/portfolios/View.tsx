import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PortfolioType } from "../../Types/global";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getAllPortfolios } from "../../slices/Portfolios/Thunk";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

const PortfolioView: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { all, loading } = useSelector((state: RootState) => state.portfolios);

  const { id } = useParams<{ id: string }>();
  const [portfolio, setPortfolio] = useState<PortfolioType | null>(null);

  useEffect(() => {
    if (all == null || all.length < 1) {
      dispatch(getAllPortfolios());
    } else {
      let currentPortfolio = all.findIndex((x) => x.id == id);
      if (currentPortfolio < 0) {
        navigate("/portfolios");
      } else {
        setPortfolio(all[currentPortfolio]);
      }
    }
  }, [id, all]);

  if (loading) return <p>Loading...</p>;
  if (!loading && portfolio == null) navigate("/portfolios");

  return (
    <AuthenticatedLayout header="Dashboard > Portfolios > View" title="View Portfolio">
      <div className="container mt-5">
        <h1 className="mb-4"></h1>
        <div className="card">
          <div className="card-body">
            <h2>{portfolio?.title}</h2>
            <p>
              <strong>Summary:</strong> {portfolio?.summary}
            </p>
            <p>
              <strong>Description:</strong> {portfolio?.description}
            </p>
            <p>
              <strong>Technologies:</strong>{" "}
              {portfolio?.technologies.join(", ")}
            </p>
            <p>
              <strong>Link:</strong>{" "}
              <a
                href={portfolio?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </p>
            <img
              src={portfolio?.imageUrl}
              alt={portfolio?.title}
              style={{ width: "300px" }}
            />
            <br/>
            <Link to={"/portfolios"} className="btn btn-secondary">
              Back to List
            </Link>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default PortfolioView;
