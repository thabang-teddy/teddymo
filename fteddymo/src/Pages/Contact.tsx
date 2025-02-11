import { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { SendContactType } from "../Types/global";
import { SendContact } from "../slices/contacts/Thunk";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

export default function Contact() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [form, setForm] = useState<SendContactType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: [""],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let results = await dispatch(SendContact(form));
    if (results == null) {
      let newErrors: string[] = [
        "There was an error while trying to send the message",
      ];
      setFormErrors({ ...formErrors, errors: newErrors });
    } else if (results.success) {
      navigate("/contact/success");
    } else {
      setFormErrors({ ...formErrors, errors: results.errors });
    }
  };

  return (
    <MainLayout title="Contact">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title h3 mb-4">Contact Me</h1>
                <div className="mb-4">
                  <p>
                    Feel free to reach out to me using the following contact
                    information:
                  </p>
                  <ul className="list-unstyled">
                    <li>Email: teddymorwasetla@gmail.com</li>
                    <li>Phone: 078 602 4005</li>
                    <li>Location: Johannesburg, Gauteng</li>
                  </ul>
                  <p>
                    I'm open to opportunities within South Africa and willing to
                    relocate.
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        // errors.name ? "is-invalid" : ""
                        ""
                      }`}
                      id="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                    />
                    {/* {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )} */}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        // errors.email ? "is-invalid" : ""
                        ""
                      }`}
                      id="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                    {/* {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )} */}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="test"
                      className={`form-control ${
                        // errors.subject ? "is-invalid" : ""
                        ""
                      }`}
                      id="subject"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      required
                    />
                    {/* {errors.subject && (
                      <div className="invalid-feedback">{errors.subject}</div>
                    )} */}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className={`form-control ${
                        // errors.message ? "is-invalid" : ""
                        ""
                      }`}
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      required
                    ></textarea>
                    {/* {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )} */}
                  </div>
                  {formErrors.errors != null && formErrors.errors.length > 0 ? (
                    <div className="mb-3">
                      {formErrors.errors.map((error) => (<p>{error}</p>))}
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    // disabled={processing}
                  >
                    Send Message
                    {/* {processing ? "Sending..." : "Send Message"} */}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
