import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

export default function Dashboard() {
    return (
        <AuthenticatedLayout header="Dashboard" title="Dashboard">

            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body text-dark">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
