const API_BASE_URL = "https://apiteddymo.test/api";

export const PORTFOLIO_ENDPOINTS = {
  PUBLIC_LIST: `${API_BASE_URL}/portfolios/get`,
  LIST: `${API_BASE_URL}/portfolios`,
  CREATE: `${API_BASE_URL}/portfolios`,
  UPDATE: (id: string) => `${API_BASE_URL}/portfolios/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/portfolios/${id}`,
  VIEW: (id: string) => `${API_BASE_URL}/portfolios/${id}`,
};

export const EXPERIENCE_ENDPOINTS = {
  PUBLIC_LIST: `${API_BASE_URL}/experiences/get`,
  LIST: `${API_BASE_URL}/experiences`,
  CREATE: `${API_BASE_URL}/experiences`,
  UPDATE: (id: string) => `${API_BASE_URL}/experiences/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/experiences/${id}`,
  VIEW: (id: string) => `${API_BASE_URL}/experiences/${id}`,
};

export const CONTACT_ENDPOINTS = {
  PUBLIC_SEND: `${API_BASE_URL}/contacts/send`,
  LIST: `${API_BASE_URL}/contacts`,
  UPDATE: (id: string) => `${API_BASE_URL}/contacts/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/contacts/${id}`,
  VIEW: (id: string) => `${API_BASE_URL}/contacts/${id}`,
};
