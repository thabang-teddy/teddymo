import { createSlice } from "@reduxjs/toolkit";
import { ExperienceType } from "../../Types/global";

interface ExperienceState {
  all: ExperienceType[];
  loading: Boolean;
  error: string[] | null;
}

const initialState: ExperienceState = {
  all: [],
  loading: true,
  error: null,
};

const experienceSlice = createSlice({
  name: "experiences",
  initialState,
  reducers: {
    experiencesSuccess(state, action) {
      state.all = action.payload;
      state.loading = false;
    },
    UpdateExperienceSuccess(state, action) {
      state.all = state.all.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
      state.loading = false;
    },
    deleteExperienceSuccess(state, action) {
      state.all = state.all.filter(item => item.id !== action.payload);
      state.loading = false;
    }
  },
});

export const {
  experiencesSuccess,
  UpdateExperienceSuccess,
  deleteExperienceSuccess
} = experienceSlice.actions

export default experienceSlice.reducer;
