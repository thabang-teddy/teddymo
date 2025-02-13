import API from "../../Helpers/axiosInstance";
import { ExperienceType } from "../../Types/global";
import { EXPERIENCE_ENDPOINTS } from "../../Helpers/endpoints";
import { experiencesSuccess } from "./Reducer";

// Fetch all experiences
export const getExperiences = () => async (dispatch: any) => {
  try {
    const response = await API.get<{
      success: boolean;
      experiences: ExperienceType[];
    }>(EXPERIENCE_ENDPOINTS.PUBLIC_LIST);

    if (response != null && response.data != null) {
      let results = response.data;
      if (results.success) {
        dispatch(experiencesSuccess(results.experiences));
      }
    }
  } catch (error) {
    console.log(error);
  }
};