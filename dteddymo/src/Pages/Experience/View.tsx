import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../Helpers/axiosInstance";
// import { Experience } from "../../../Types/experience";
import { PORTFOLIO_ENDPOINTS } from "../../Helpers/endpoints";
import { ExperienceType } from "../../Types/global";

const ExperienceView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [experience, setExperience] = useState<ExperienceType | null>(null);

  useEffect(() => {
    const fetchExperience = async () => {
      const response = await API.get<ExperienceType>(PORTFOLIO_ENDPOINTS.VIEW(id!));
      setExperience(response.data);
    };
    fetchExperience();
  }, [id]);

  if (!experience) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{experience.title}</h2>
      <img src={experience.imageUrl} alt={experience.title} style={{ width: "300px" }} />
      <p><strong>Job Title:</strong> {experience.jobtitle}</p>
      <p><strong>Company:</strong> {experience.company}</p>
      <p><strong>Duration:</strong> {experience.duration}</p>
      <p><strong>Link:</strong> <a href={experience.link} target="_blank" rel="noopener noreferrer">Visit</a></p>
      <p><strong>Description:</strong></p>
      <div dangerouslySetInnerHTML={{ __html: experience.description }} />
      <hr/>
      {
        experience.responsibilities?.map((responsibility) => {
          return (
            <div>
              <h2>{responsibility.title}</h2>
              <p><strong>Technologies:</strong> {responsibility.technologies.join(", ")}</p>
              <div dangerouslySetInnerHTML={{ __html: responsibility.description }} />
            </div>
          );
        })
      }
    </div>
  );
};

export default ExperienceView;
