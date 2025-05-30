// const protocol = window.location.protocol; // "https:"
// const hostname = window.location.hostname; // "example.com"
// const port = window.location.port;     // "443" or "" if default

export const API_BASE_URL = "https://localhost:8081";
// export const API_BASE_URL = protocol + "//" + hostname.replace("dashboard", "api") + (port == "" || port == "80" || port == "443" ? "" : ":" + port );

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
