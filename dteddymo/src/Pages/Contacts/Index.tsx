import React, { useEffect } from "react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getAllContacts } from "../../slices/Contacts/Thunk";

const ContactList: React.FC = () => {
	
	const dispatch = useDispatch<AppDispatch>();
	const {  all, loading } = useSelector((state: RootState) => state.contacts);
  
	useEffect(() => {
		if ((all == null || all.length < 1) && loading) {
			dispatch(getAllContacts());
		}
	}, [all]);

	return (
		<AuthenticatedLayout header="Dashboard > Contact" title="Contact List">

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
						{loading ? <tr><td colSpan={7}>Loading...</td></tr> : all?.map((contact) => (
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
										to={`/contacts/view/${contact.id}`}
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

export default ContactList;
