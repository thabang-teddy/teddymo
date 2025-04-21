import { useEffect } from "react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  deleteExperience,
  getAllExperiences,
} from "../../slices/Experiences/Thunk";
import { Button } from "react-bootstrap";

const ExperienceList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { all, loading } = useSelector((state: RootState) => state.experiences);

  useEffect(() => {
    if ((all == null || all.length < 1) && loading) {
      dispatch(getAllExperiences());
    }
  }, [all]);

  return (
    <AuthenticatedLayout header="Dashboard > Experiences" title="Experience">
      <div className="container">
        <Link to="/experiences/create" className="btn btn-primary my-3">
          Add New Experience
        </Link>

        <div className="card">
          <div className="card-body">
            <div className="row">
              {loading ? (
                <p>Loading...</p>
              ) : (
                all?.map((experience) => (
                  <div className="col-md-4 mb-3" key={experience.id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{experience.title}</h5>
                        <Link
                          to={`/experiences/edit/${experience.id}`}
                          className="btn btn-warning btn-sm"
                        >
                          Edit
                        </Link>

                        <Button
                          className="btn btn-warning btn-sm mx-2"
                          variant="danger"
                          onClick={() =>
                            dispatch(deleteExperience(experience.id))
                          }
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default ExperienceList;
