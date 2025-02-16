import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioType } from "../../Types/global";

interface PortfolioState {
  all: PortfolioType[];
  loading: Boolean;
  error: string[] | null;
}

const initialState: PortfolioState = {
  all: [],
  loading: true,
  error: null,
};

const portfolioSlice = createSlice({
  name: "portfolios",
  initialState,
  reducers: {
    portfoliosSuccess(state, action) {
      state.all = action.payload;
      state.loading = false;
    },
    UpdatePortfolioSuccess(state, action) {
      state.all = state.all.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
      state.loading = false;
    },
    deletePortfolioSuccess(state, action) {
      state.all = state.all.filter(item => item.id !== action.payload);
      state.loading = false;
    }
  },
});

export const {
  portfoliosSuccess,
  UpdatePortfolioSuccess,
  deletePortfolioSuccess
} = portfolioSlice.actions

export default portfolioSlice.reducer;
