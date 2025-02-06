import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Portfolio } from "../../Types/portfolio";
import { fetchPortfolios, createPortfolio, updatePortfolio, deletePortfolio } from "./Thunk";

interface PortfolioState {
  portfolios: Portfolio[];
  loading: boolean;
  error: string | null;
}

const initialState: PortfolioState = {
  portfolios: [],
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: "portfolios",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolios.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPortfolios.fulfilled, (state, action: PayloadAction<Portfolio[]>) => {
        state.loading = false;
        state.portfolios = action.payload;
      })
      .addCase(fetchPortfolios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch portfolios";
      })
      .addCase(createPortfolio.fulfilled, (state, action: PayloadAction<Portfolio>) => {
        state.portfolios.push(action.payload);
      })
      .addCase(updatePortfolio.fulfilled, (state, action: PayloadAction<Portfolio>) => {
        const index = state.portfolios.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) state.portfolios[index] = action.payload;
      })
      .addCase(deletePortfolio.fulfilled, (state, action: PayloadAction<string>) => {
        state.portfolios = state.portfolios.filter((p) => p.id !== action.payload);
      });
  },
});

export default portfolioSlice.reducer;
