import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactType } from "../../Types/global";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getAllContacts } from "../../slices/Contacts/Thunk";

const ContactView: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { all, loading } = useSelector((state: RootState) => state.contacts);

  const { id } = useParams<{ id: string }>();
  const [contact, setContact] = useState<ContactType | null>(null);

  useEffect(() => {
    if (all == null || all.length < 1) {
      dispatch(getAllContacts());
    } else {
      let currentContact = all.findIndex((x) => x.id == id);
      if (currentContact < 0) {
        navigate("/contacts");
      } else {
        setContact(all[currentContact]);
      }
    }
  }, [id, all]);

  if (loading) return <p>Loading...</p>;
  if (!loading && contact == null) navigate("/contacts");

  return (
    <AuthenticatedLayout header="Dashboard" title="Contact Details">
      <div className="container mt-5">
        <h1 className="mb-4">View Contact Message</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{contact?.subject}</h5>
            <p className="card-text">
              <strong>Name:</strong> {contact?.name}
            </p>
            <p className="card-text">
              <strong>Email:</strong> {contact?.email}
            </p>
            <p className="card-text">
              <strong>Message:</strong> {contact?.message}
            </p>
            <p className="card-text">
              <strong>State:</strong> {contact?.state}
            </p>
            <p className="card-text">
              <strong>Date:</strong>{" "}
              {contact ? new Date(contact.created_at).toLocaleDateString() : ""}
            </p>
            <Link to={"/contacts"} className="btn btn-secondary">
              Back to List
            </Link>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default ContactView;
