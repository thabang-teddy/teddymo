import { createSlice } from "@reduxjs/toolkit";
import { AlertType } from "../../Types/global";
// import { v4 as uuidv4 } from 'uuid';

interface AlertState {
  all: AlertType[];
}

const initialState: AlertState = {
  all: [],
};

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert(state, action) {
      state.all = [...state.all, action.payload];
    },
    removeAlert(state, action) {
      state.all = state.all.filter(item => item.id !== action.payload);
    },
  },
});

export const { addAlert , removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
