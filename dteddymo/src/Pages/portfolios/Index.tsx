import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPortfolios, deletePortfolio } from "../../slices/Portfolios/Thunk";
import { RootState, AppDispatch } from "../../store";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

const PortfolioList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {  all, loading } = useSelector((state: RootState) => state.portfolios);
  
  useEffect(() => {
    if (all == null || all.length < 1) {
      dispatch(getAllPortfolios());
    }
  }, [all]);
  
  return (
		<AuthenticatedLayout header="Dashboard" title="Portfolios">
    <div className="container">
      <Link to="/portfolios/create" className="btn btn-primary mb-3">Create Portfolio</Link>
      {loading ? <p>Loading...</p> : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Technologies</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {all?.map((portfolio) => (
              <tr key={portfolio.id}>
                <td>{portfolio.title}</td>
                <td>{portfolio.technologies.join(", ")}</td>
                <td>
                  <Link to={`/portfolios/view/${portfolio.id}`} className="btn btn-info">View</Link>
                  <Link to={`/portfolios/edit/${portfolio.id}`} className="btn btn-warning mx-2">Edit</Link>
                  <Button variant="danger" onClick={() => dispatch(deletePortfolio(portfolio.id))}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
    </AuthenticatedLayout>
  );
};

export default PortfolioList;
