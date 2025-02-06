const API_BASE_URL = "https://your-laravel-api.com/api";

export const PORTFOLIO_ENDPOINTS = {
  LIST: `${API_BASE_URL}/portfolios`,
  CREATE: `${API_BASE_URL}/portfolios`,
  UPDATE: (id: string) => `${API_BASE_URL}/portfolios/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/portfolios/${id}`,
  VIEW: (id: string) => `${API_BASE_URL}/portfolios/${id}`,
};
