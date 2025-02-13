import API from "../../Helpers/axiosInstance";
import { PORTFOLIO_ENDPOINTS } from "../../Helpers/endpoints";
import { portfoliosSuccess } from "./Reducer";
import { PortfolioType } from "../../Types/global";

// Fetch all portfolios
export const getPortfolios = () => async (dispatch: any) => {
  try {
    const response = await API.get<{
      success: boolean;
      portfolios: PortfolioType[];
    }>(PORTFOLIO_ENDPOINTS.PUBLIC_LIST);

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
