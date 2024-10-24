import axios from "axios";
import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;

const axiosApi = axios.create({
    baseURL: backendUrl,
});

const setAuthHeader = (name) => {
    const cookieMatch = document.cookie.match("(?:^|; )" + name + "=([^;]*)");
    return cookieMatch ? decodeURIComponent(cookieMatch[1]) : "";
};

if (typeof window !== "undefined") {
    axiosApi.defaults.headers = {
        Authorization: window?.localStorage?.getItem("_token")
            ? `Bearer ${window?.localStorage?.getItem("_token")}`
            : "",
        //requestToken: config?.REQUEST_TOKEN,
    };
}

axiosApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 404) {
            toast.error("ERROR => 404 => API not available");
            console.log("ERROR => 404 => API not available");
        } else if (error?.response?.status === 500) {
            console.log("ERROR => 500 => Server Error");
            toast.error("ERROR => 500 => Server Error");
        } else if (error?.response?.status === 401) {
            toast.error(error.response.data.message);
            console.log("ERROR => 401 => User is not authorized");
            if (localStorage.getItem("_token")) {
                localStorage.removeItem("_token");
                window.location("/");
            }
        } else {
            console.log("/other-errors.");
        }

        return Promise.reject(error);
    }
);

export { axiosApi, setAuthHeader };