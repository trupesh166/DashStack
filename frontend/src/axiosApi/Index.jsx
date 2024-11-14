import axios from "axios";
import toast from "react-hot-toast";

// Base URL for the backend
const backendUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;

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
    axiosApi.defaults.headers.Authorization = `Bearer ${token}`;
  }
};

// Set the authorization token initially
setAuthHeader();

// Intercept responses to handle errors globally
axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const errorMsg = error?.response?.data?.message || "An error occurred";

    if (status === 404) {
      toast.error("API not available (404)");
    } else if (status === 500) {
      toast.error("Server Error (500)");
    } else if (status === 401) {
      toast.error(errorMsg);
      localStorage.removeItem("_token");
      window.location.href = "/";
    } else {
      toast.error(`Error ${status}: ${errorMsg}`);
    }

    return Promise.reject(error);
  }
);

export { axiosApi, setAuthHeader };
