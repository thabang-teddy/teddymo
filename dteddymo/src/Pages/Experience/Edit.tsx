import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { getAllExperiences, updateExperience } from "../../slices/Experiences/Thunk";
import { AppDispatch, RootState } from "../../store";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addAlertMessage } from "../../slices/Alerts/Thunk";
import { v4 as uuidv4 } from 'uuid';

const ExperienceEdit: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { all, loading } = useSelector((state: RootState) => state.experiences);

  const { id } = useParams<{ id: string }>();

  const [form, setForm] = useState({
    id: "",
    title: "",
    jobtitle: "",
    company: "",
    duration: "",
    description: "",
    link: "",
  });

  useEffect(() => {
    if (all == null || all.length < 1) {
      dispatch(getAllExperiences());
    } else {
      let currentExperience = all.findIndex((x) => x.id == id);
      if (currentExperience < 0) {
        navigate("/experiences");
      } else {
        // setExperience(all[currentExperience]);
        let newExperience = all[currentExperience];
        setForm(newExperience);
      }
    }
  }, [id, all]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let returnData = await dispatch(
      updateExperience({
        id: form.id,
        experience: form,
      })
    );

    if (returnData?.success) {
      dispatch(addAlertMessage({
        id :  uuidv4(),
        text : "experience updated successfully",
        alertType : "success"
      }));
    }

  };

  if (loading) return <p>Loading...</p>;
  if (!loading && all.findIndex((x) => x.id == id) < 0) navigate("/experiences");

  return (
    <AuthenticatedLayout header="Dashboard > Experiences > Edit" title="Edit Experience">
    <div className="container mt-5">
      <h1 className="mb-4"></h1>
      <div className="card">
        <div className="card-body">
          <h2 className="h4 font-weight-bold text-dark">Experience Edit</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Job Title
              </label>
              <input
                type="text"
                className="form-control"
                name="jobtitle"
                value={form.jobtitle}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Company
              </label>
              <input
                type="text"
                className="form-control"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Duration
              </label>
              <input
                type="text"
                className="form-control"
                name="duration"
                value={form.duration}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                name="description"
                value={form.description}
                rows={5}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="link" className="form-label">
                Link
              </label>
              <input
                type="text"
                className="form-control"
                name="link"
                value={form.link}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
            <Link to={"/experiences"} className="btn btn-secondary mx-2">
              Back to List
            </Link>
          </form>
        </div>
      </div>
    </div>
    </AuthenticatedLayout>
  );
};

export default ExperienceEdit;
