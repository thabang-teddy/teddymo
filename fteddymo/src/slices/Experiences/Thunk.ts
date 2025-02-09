import API from "../../Helpers/axiosInstance";
import { ExperienceType } from "../../Types/global";
import { EXPERIENCE_ENDPOINTS } from "../../Helpers/endpoints";
import { createExperienceSuccess, deleteExperienceSuccess, experiencesSuccess, UpdateExperienceSuccess } from "./Reducer";

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
export const getAllExperiences = () => async (dispatch: any) => {
  try {
    const response = await API.get<{
      success: boolean;
      experiences: ExperienceType[];
    }>(EXPERIENCE_ENDPOINTS.LIST);

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

// Create new experience
export const createExperience =
  (experience: Omit<ExperienceType, "id">) => async (dispatch: any) => {
    try {
      const response = await API.post<{
        success: boolean;
        experience: ExperienceType;
        errors: string[];
      }>(EXPERIENCE_ENDPOINTS.CREATE, experience);
      if (response != null && response.data != null) {
        let results = response.data;
        if (results.success) {
          dispatch(createExperienceSuccess(results.experience));
          return results;
        } else {
          return results;
        }
      }
    } catch (error) {
      console.log(error);

      return null;
    }
  };

// Update experience
export const updateExperience =
  ({ id, experience }: { id: string; experience: Partial<ExperienceType> }) =>
  async (dispatch: any) => {
    try {
      const response = await API.post<{
        success: boolean;
        experience: ExperienceType;
        errors: string[];
      }>(EXPERIENCE_ENDPOINTS.UPDATE(id), experience);
      if (response != null && response.data != null) {
        let results = response.data;
        if (results.success) {
          dispatch(UpdateExperienceSuccess(results.experience));
          return results;
        } else {
          return results;
        }
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

// Delete experience
export const deleteExperience = (id: string) => async (dispatch: any) => {
  try {
    const response = await API.delete<{
      success: boolean;
      errors: string[];
    }>(EXPERIENCE_ENDPOINTS.DELETE(id));
    if (response != null && response.data != null) {
      let results = response.data;
      if (results.success) {
        dispatch(deleteExperienceSuccess(id));
        return results;
      } else {
        return results;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
