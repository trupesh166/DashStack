import { DSInput, DSButton } from "@/components";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import styles from "../Auth.module.css";

export const ForgetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className={clsx(styles.FromWrapper, "d-flex flex-column")}>
      <div className={clsx(styles.contentWrapper, "d-flex flex-column")}>
        <h2>Forget Password</h2>
        <p>Enter your email and we'll send you a otp to reset your password.</p>
      </div>
      <form>
        <DSInput
          require
          label="Email or Phone"
          placeholder="Enter Email or Phone number"
        />
      </form>
      <div className={clsx(styles.contentWrapper, "d-flex flex-column")}>
        <DSButton block variant="primary" disabled>
          Get OTP
        </DSButton>
        <DSButton block variant="link" onClick={() => navigate(-1)}>
          Back to Login
        </DSButton>
      </div>
    </div>
  );
};
