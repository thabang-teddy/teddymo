import API from "../../Helpers/axiosInstance";
import { PORTFOLIO_ENDPOINTS } from "../../Helpers/endpoints";
import {
  createPortfolioSuccess,
  deletePortfolioSuccess,
  portfoliosSuccess,
  UpdatePortfolioSuccess,
} from "./Reducer";
import { PortfolioType } from "../../Types/global";

// Fetch all portfolios
export const getAllPortfolios = () => async (dispatch: any) => {
  try {
    const response = await API.get<{
      success: boolean;
      portfolios: PortfolioType[];
    }>(PORTFOLIO_ENDPOINTS.LIST);

    if (response != null && response.data != null) {
      let results = response.data;
      if (results.success) {
        dispatch(portfoliosSuccess(results.portfolios));
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// Create new portfolio
export const createPortfolio =
  (portfolio: Omit<PortfolioType, "id">) => async (dispatch: any) => {
    try {
      const response = await API.post<{
        success: boolean;
        portfolio: PortfolioType;
        errors: string[];
      }>(PORTFOLIO_ENDPOINTS.CREATE, portfolio);
      if (response != null && response.data != null) {
        let results = response.data;
        if (results.success) {
          dispatch(createPortfolioSuccess(results.portfolio));
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

// Update portfolio
export const updatePortfolio =
  ({ id, portfolio }: { id: string; portfolio: Partial<PortfolioType> }) =>
  async (dispatch: any) => {
    try {
      const response = await API.put<{
        success: boolean;
        portfolio: PortfolioType;
        errors: string[];
      }>(PORTFOLIO_ENDPOINTS.UPDATE(id), portfolio);
      if (response != null && response.data != null) {
        let results = response.data;
        if (results.success) {
          dispatch(UpdatePortfolioSuccess(portfolio));
        }
        return results;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

// Delete portfolio
export const deletePortfolio = (id: string) => async (dispatch: any) => {
  try {
    const response = await API.delete<{
      success: boolean;
      errors: string[];
    }>(PORTFOLIO_ENDPOINTS.DELETE(id));
    if (response != null && response.data != null) {
      let results = response.data;
      if (results.success) {
        dispatch(deletePortfolioSuccess(id));
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
