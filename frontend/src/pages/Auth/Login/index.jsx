import { DSButton, DSInput, DSPasswordInput, DSCheckbox } from "@/components";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Login.module.css/";

export const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <form className={clsx(styles.FromWrapper, "d-flex flex-column")}>
        <div className={clsx(styles.InputWrapper, "d-flex flex-column")}>
          <DSInput
            label={"Email or Phone"}
            placeholder={"Enter Your Phone Number Or Email"}
          />
          <DSPasswordInput label={"Password"} placeholder={"Enter Password"} />
          <div className="d-flex justify-content-between">
            <DSCheckbox>Remember me</DSCheckbox>
            <Link to="/forgot-password">Forgot Password ?</Link>
          </div>
        </div>
        <DSButton variant={"primary"} block>
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
