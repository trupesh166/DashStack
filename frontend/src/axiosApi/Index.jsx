import axios from "axios";
import toast from "react-hot-toast";

// Base URL for the backend
const backendUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;
// const backendUrl = "http://localhost:5000";

const axiosApi = axios.create({
  baseURL: backendUrl,
});

// Helper to get cookie by name
const getCookie = (name) => {
  const cookieMatch = document.cookie.match("(?:^|; )" + name + "=([^;]*)");
  return cookieMatch ? decodeURIComponent(cookieMatch[1]) : "";
};

// Function to set Authorization header
const setAuthHeader = () => {
  const token = window.localStorage.getItem("_token") || getCookie("_token");
  if (token) {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosApi.defaults.headers.common["Authorization"];
  }
};

// Set the authorization token initially
setAuthHeader();

// Intercept requests to ensure the latest token is always used
axiosApi.interceptors.request.use(
  (config) => {
    setAuthHeader();
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercept responses to handle errors globally
axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const errorMsg = error.response?.data?.message || "An error occurred";

    switch (status) {
      case 400:
        toast.error(`Bad Request: ${errorMsg}`);
        break;
      case 401:
        toast.error(`Unauthorized: ${errorMsg}`);
        localStorage.removeItem("_token");
        window.location.href = "/login";
        break;
      case 403:
        toast.error(`Forbidden: ${errorMsg}`);
        break;
      case 404:
        toast.error("API not available (404)");
        break;
      case 500:
        toast.error("Server Error (500)");
        break;
      case 502:
        toast.error("Bad Gateway (502)");
        break;
      case 503:
        toast.error("Service Unavailable (503)");
        break;
      case 504:
        toast.error("Gateway Timeout (504)");
        break;
      default:
        toast.error(`Unexpected Error (${status || "Unknown"}): ${errorMsg}`);
    }

    return Promise.reject(error);
  }
);

export { axiosApi, setAuthHeader };
