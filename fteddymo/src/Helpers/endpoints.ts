// const protocol = window.location.protocol; // "https:"
// const hostname = window.location.hostname; // "example.com"
// const port = window.location.port;     // "443" or "" if default

export const API_BASE_URL = "https://localhost:8081";
// export const API_BASE_URL = protocol + "//api." + hostname + (port == "" || port == "80" || port == "443" ? "" : ":" + port );

export const PORTFOLIO_ENDPOINTS = {
  PUBLIC_LIST: `${API_BASE_URL}/data/portfolios`,
};

export const EXPERIENCE_ENDPOINTS = {
  PUBLIC_LIST: `${API_BASE_URL}/data/experiences`,
};

export const CONTACT_ENDPOINTS = {
  PUBLIC_SEND: `${API_BASE_URL}/data/send-contact`,
};
