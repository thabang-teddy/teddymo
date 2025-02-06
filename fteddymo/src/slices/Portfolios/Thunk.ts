import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../Helpers/axiosInstance";
import { Portfolio } from "../../Types/portfolio";
import { PORTFOLIO_ENDPOINTS } from "../../Helpers/endpoints";

// Fetch all portfolios
export const fetchPortfolios = createAsyncThunk("portfolios/fetchAll", async () => {
  const response = await API.get<Portfolio[]>(PORTFOLIO_ENDPOINTS.LIST);
  return response.data;
});

// Create new portfolio
export const createPortfolio = createAsyncThunk("portfolios/create", async (portfolio: Omit<Portfolio, "id">) => {
  const response = await API.post<Portfolio>(PORTFOLIO_ENDPOINTS.CREATE, portfolio);
  return response.data;
});

// Update portfolio
export const updatePortfolio = createAsyncThunk("portfolios/update", async ({ id, data }: { id: string; data: Partial<Portfolio> }) => {
  const response = await API.put<Portfolio>(PORTFOLIO_ENDPOINTS.UPDATE(id), data);
  return response.data;
});

// Delete portfolio
export const deletePortfolio = createAsyncThunk("portfolios/delete", async (id: string) => {
  await API.delete(PORTFOLIO_ENDPOINTS.DELETE(id));
  return id;
});
