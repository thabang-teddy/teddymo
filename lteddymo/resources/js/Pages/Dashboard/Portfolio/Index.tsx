import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from "@inertiajs/react";
import { Portfolio } from "@/types";

interface Props {
	portfolios: Portfolio[];
}

const PortfolioIndex: React.FC<Props> = ({portfolios}) => {
  return (
    
    <AuthenticatedLayout
    header={
        <h2 className="h4 font-weight-bold text-dark">
            Portfolio
        </h2>
    }
>
    <Head title="Portfolio" />
    <div className="container">
      <Link href="/dashboard/portfolios/create" className="btn btn-primary mb-3">
        Add New Portfolio
      </Link>
      <div className="row">
        {portfolios.map((portfolio) => (
          <div className="col-md-4 mb-3" key={portfolio.id}>
            <div className="card">
              <img src={portfolio.imageUrl} className="card-img-top" alt={portfolio.title} />
              <div className="card-body">
                <h5 className="card-title">{portfolio.title}</h5>
                <p className="card-text">{portfolio.summary}</p>
                <Link
                  href={`/dashboard/portfolios/${portfolio.id}/edit`}
                  className="btn btn-warning btn-sm"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</AuthenticatedLayout>
  );
};

export default PortfolioIndex;
