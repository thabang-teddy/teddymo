import React from "react";
import AuthenticatedLayout from "../../../Layouts/AuthenticatedLayout";
import { Link } from "react-router-dom";

interface Contact {
	id: number;
	name: string;
	email: string;
	subject: string;
	state: string;
	created_at: string;
}

interface Props {
	contacts: Contact[];
}

const Index: React.FC<Props> = ({ contacts }) => {
	return (
		<AuthenticatedLayout header="Dashboard" title="Contact List">

			<div className="container mt-5">
				<h1 className="mb-4">Contact Messages</h1>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Subject</th>
							<th>State</th>
							<th>Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{contacts.map((contact) => (
							<tr key={contact.id}>
								<td>{contact.id}</td>
								<td>{contact.name}</td>
								<td>{contact.email}</td>
								<td>{contact.subject}</td>
								<td>{contact.state}</td>
								<td>
									{new Date(
										contact.created_at
									).toLocaleDateString()}
								</td>
								<td>
									<Link
										to={`/dashboard/contacts/${contact.id}`}
										className="btn btn-primary btn-sm"
									>
										View
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</AuthenticatedLayout>
	);
};

export default Index;
