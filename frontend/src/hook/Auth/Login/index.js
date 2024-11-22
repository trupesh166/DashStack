import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { loginUser } from "@/axiosApi/ApiHelper";

export const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiRequestData = {
      email,
      password,
    };

    setIsLoading(true);
    try {
      const response = await loginUser(apiRequestData);
      const { data } = response;
      toast.success("Login successful!");

      const token = data;
      localStorage.setItem("_token", token);
      const decodedToken = jwtDecode(token);
      const { userData, exp } = decodedToken;
      const { role } = userData;

      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime >= exp) {
        toast.error("Session expired. Please log in again.");
        return;
      }

      if (role === "admin") {
        navigate("/admin");
      } else if (role === "user") {
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      if (!error.response) {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    setEmail,
    isLoading,
    setPassword,
    rememberMe,
    setRememberMe,
    handleSubmit,
    email,
    password,
    location,
  };
};
