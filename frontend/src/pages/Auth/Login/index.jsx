import { DSButton, DSInput, DSPasswordInput, DSCheckbox } from "@/components";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useLogin } from "@/hook/Auth/Login";
import styles from "../Auth.module.css";

export const Login = () => {
  const {
    setEmail,
    isLoading,
    setPassword,
    rememberMe,
    email,
    password,
    handleSubmit,
    location,
  } = useLogin();

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
        {location.pathname === "/admin/login" && (
          <h6 className="text-center fw-normal">
            Don't have an account?{" "}
            <Link to={"/admin/register"}>Registration</Link>
          </h6>
        )}
      </form>
    </>
  );
};
