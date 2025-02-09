import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioType } from "../../Types/global";

interface PortfolioState {
  all: PortfolioType[];
  loading: Boolean;
  error: string[] | null;
}

const initialState: PortfolioState = {
  all: [],
  loading: false,
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
    createPortfolioSuccess(state, action) {
      state.all = [...state.all, action.payload];
      state.loading = false;
    },
    UpdatePortfolioSuccess(state, action) {
      state.all = [...state.all, action.payload];
      state.loading = false;
    },
    deletePortfolioSuccess(state, action) {
      state.all = [...state.all, action.payload];
      state.loading = false;
    }
  },
});

export const {
  portfoliosSuccess,
  createPortfolioSuccess,
  UpdatePortfolioSuccess,
  deletePortfolioSuccess
} = portfolioSlice.actions

export default portfolioSlice.reducer;
