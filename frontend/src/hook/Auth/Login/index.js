import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { loginUser } from "@/axiosApi/ApiHelper";

export const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await loginUser({ email, password });
      toast.success("Login successful!");

      const token = response.token;

      // Store token based on rememberMe preference
      if (rememberMe) {
        localStorage.setItem("_token", token);
      } else {
        sessionStorage.setItem("_token", token);
      }

      const { role } = jwtDecode(token);

      // Navigate based on user role
      if (role === "Chairman") {
        navigate("/admin");
      } else if (role === "Member") {
        navigate("/");
      } else {
        toast.error("Unauthorized role. Please contact support.");
        navigate("/login");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    isLoading,
    location,
    handleSubmit,
  };
};
