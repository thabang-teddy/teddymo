import React from "react";
import AuthenticatedLayout from "../../../Layouts/AuthenticatedLayout";
import { Link } from "react-router-dom";

interface Contact {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    state: string;
    created_at: string;
}

interface Props {
    contact: Contact;
}

const View: React.FC<Props> = ({ contact }) => {
    return (
        <AuthenticatedLayout header="Dashboard" title="Contact Details">

            <div className="container mt-5">
                <h1 className="mb-4">View Contact Message</h1>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{contact.subject}</h5>
                        <p className="card-text">
                            <strong>Name:</strong> {contact.name}
                        </p>
                        <p className="card-text">
                            <strong>Email:</strong> {contact.email}
                        </p>
                        <p className="card-text">
                            <strong>Message:</strong> {contact.message}
                        </p>
                        <p className="card-text">
                            <strong>State:</strong> {contact.state}
                        </p>
                        <p className="card-text">
                            <strong>Date:</strong> {new Date(contact.created_at).toLocaleDateString()}
                        </p>
                        <Link to="/dashboard/contacts" className="btn btn-secondary">
                            Back to List
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default View;
