import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPortfolios,
  deletePortfolio,
} from "../../slices/Portfolios/Thunk";
import { RootState, AppDispatch } from "../../store";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { truncateString } from "../../Helpers/StringHelper";

const PortfolioList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { all, loading } = useSelector((state: RootState) => state.portfolios);

  useEffect(() => {
    if ((all == null || all.length < 1) && loading) {
      dispatch(getAllPortfolios());
    }
  }, [all]);

  return (
    <AuthenticatedLayout header="Dashboard > Portfolios" title="Portfolios">
      <div className="container">
        <Link to="/portfolios/create" className="btn btn-primary my-3">
          Create Portfolio
        </Link>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Technologies</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
        {loading ? (
          <p>Loading...</p>
        ) : (
              all?.map((portfolio) => (
                <tr key={portfolio.id}>
                  <td>{portfolio.title}</td>
                  <td>{truncateString(portfolio.summary, 100)}</td>
                  <td>
                    <Link
                      to={`/portfolios/view/${portfolio.id}`}
                      className="btn btn-info"
                    >
                      View
                    </Link>
                    <Link
                      to={`/portfolios/edit/${portfolio.id}`}
                      className="btn btn-warning mx-2"
                    >
                      Edit
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(deletePortfolio(portfolio.id))}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            )}
            </tbody>
          </Table>
      </div>
    </AuthenticatedLayout>
  );
};

export default PortfolioList;
