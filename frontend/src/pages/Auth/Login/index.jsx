import { useState } from "react";
import { DSButton, DSInput, DSPasswordInput, DSCheckbox } from "@/components";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginUser } from "@/axiosApi/ApiHelper";
import { jwtDecode } from "jwt-decode";
import styles from "./Login.module.css/";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

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
      if (error.response) {
        toast.error(`Login failed: ${error.response.data.message || "Error"}`);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form
        className={clsx(styles.FromWrapper, "d-flex flex-column")}
        onSubmit={handleSubmit}
      >
        <div className={clsx(styles.InputWrapper, "d-flex flex-column")}>
          <DSInput
            label={"Email or Phone"}
            type={"email"}
            placeholder={"Enter Your Phone Number Or Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <DSPasswordInput
            label={"Password"}
            placeholder={"Enter Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex justify-content-between">
            <DSCheckbox checked={rememberMe}>Remember me</DSCheckbox>
            <Link to="/forgot-password">Forgot Password ?</Link>
          </div>
        </div>
        <DSButton type="submit" variant={"primary"} block loading={isLoading}>
          Sign In
        </DSButton>
        <h6 className="text-center fw-normal">
          Don't have an account?{" "}
          <Link to={"/admin/register"}>Registration</Link>
        </h6>
      </form>
    </>
  );
};
