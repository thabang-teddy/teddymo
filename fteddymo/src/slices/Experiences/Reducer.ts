import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExperienceCreateType, ExperienceType } from "../../Types/global";
import { createExperience } from "./Thunk";

interface ExperienceState {
  experiences: ExperienceType[];
  selectedExperience: ExperienceType | null;
}

const initialState: ExperienceState = {
  experiences: [],
  selectedExperience: null
};

const experienceSlice = createSlice({
  name: "experiences",
  initialState,
  reducers: {
    experienceSuccess(state, action) {
      state.experiences = action.payload;
    },
    selectExperience(state, action) {
      let experienceIndex = state.experiences.findIndex(sp => sp.id != null && sp.id === action.payload);
      if (state.experiences[experienceIndex] != null) {
        localStorage.setItem("experienceId", action.payload);
        state.selectedExperience = state.experiences[experienceIndex];
      } else {
		    localStorage.removeItem("experienceId");
      }
    }
  },
});

export default experienceSlice.reducer;
