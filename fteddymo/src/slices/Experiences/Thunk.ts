import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../Helpers/axiosInstance";
import { ExperienceCreateType } from "../../Types/global";

export const createExperience = createAsyncThunk(
  "experiences/create",
  async (experienceData: ExperienceCreateType) => {
    try {
      const response = await API.post<{ success: boolean; experience: ExperienceCreateType }>(
        "/dashboard/experiences",
        experienceData
      );

      if (response != null && response.data != null) {
        let results = response.data;
        if (results.success) {
          return results.experience;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }
);

export const updateExperience = createAsyncThunk(
  "experiences/create",
  async (experienceData: ExperienceCreateType) => {
    try {
      const response = await API.post<{ success: boolean; experience: ExperienceCreateType }>(
        "/dashboard/experiences",
        experienceData
      );

      if (response != null && response.data != null) {
        let results = response.data;
        if (results.success) {
          return results.experience;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }
);
