export const API_BASE_URL = "https://connect.teddymo.hogiclabs.co.za/api";
// export const API_BASE_URL = "https://apiteddymo.test/api";

export const PORTFOLIO_ENDPOINTS = {
  LIST: `${API_BASE_URL}/portfolios`,
  CREATE: `${API_BASE_URL}/portfolios`,
  UPDATE: (id: string) => `${API_BASE_URL}/portfolios/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/portfolios/${id}`,
  VIEW: (id: string) => `${API_BASE_URL}/portfolios/${id}`,
};

export const EXPERIENCE_ENDPOINTS = {
  LIST: `${API_BASE_URL}/experiences`,
  CREATE: `${API_BASE_URL}/experiences`,
  UPDATE: (id: string) => `${API_BASE_URL}/experiences/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/experiences/${id}`,
  VIEW: (id: string) => `${API_BASE_URL}/experiences/${id}`,
};

export const CONTACT_ENDPOINTS = {
  LIST: `${API_BASE_URL}/contacts`,
  UPDATE: (id: string) => `${API_BASE_URL}/contacts/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/contacts/${id}`,
  VIEW: (id: string) => `${API_BASE_URL}/contacts/${id}`,
};
