import { useEffect } from "react";
import MainLayout from "../Layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getExperiences } from "../slices/Experiences/Thunk";

export default function Experience() {
  const dispatch = useDispatch<any>();

  const experiences = useSelector((state: RootState) => state.experiences.all);

  useEffect(() => {
    if (experiences == null || experiences.length < 1) {
      dispatch(getExperiences());
    }
  }, []);

  return (
    <MainLayout title="Experience">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-12">
            <h1 className="h3 mb-4">Work Experience</h1>
            {experiences.map((experience) => (
              <div className="card" key={experience.id}>
                <div className="card-body">
                  <div className="mb-4">
                    <h2 className="h4">{experience.jobtitle}</h2>
                    <p className="mb-1 fw-bold">{experience.company}</p>
                    <p className="text-muted">
                      {experience.duration}
                    </p>
                    <div>{experience.description}</div>
                  </div>
                  <h2 className="mb-4">Responsibilities</h2>
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="row">
                        {experience.responsibilities?.map((responsibility) => (
                          <div key={responsibility.id} className="col-md-4 mb-4">
                            <div className="card h-100">
                              <div className="card-body">
                                <h2 className="card-title h5">
                                  {responsibility.title}
                                </h2>
                                <p className="card-text">
                                  {responsibility.description}
                                </p>
                                <div className="mt-3">
                                  {responsibility.technologies.map((tech, index) => (
                                    <span
                                      key={index}
                                      className="badge bg-secondary me-1"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
