import clsx from "clsx";
import Icons from "@/constants/Icons";
import { DSButton, DSInputOtp } from "@/components";
import { useVerifyOtp } from "@/hook/Auth/VerifyOtp";
import styles from "../Auth.module.css";

export const OTP = () => {
  const { loading, handleInputChange, handleSubmit, otp } = useVerifyOtp();

  return (
    <div className={clsx(styles.FromWrapper, "d-flex flex-column")}>
      <div className={clsx(styles.contentWrapper, "d-flex flex-column")}>
        <h2>Enter OTP</h2>
        <p>Please enter the 6 digit code that was sent to your phone number.</p>
      </div>
      <form>
        <DSInputOtp
          block
          placeholder="00000"
          value={otp}
          onChange={handleInputChange}
        />
        <div className="d-flex justify-content-between mt-4">
          <h6>
            {Icons.Timer} <span>00:30 sec</span>
          </h6>
          <p>Resend OTP</p>
        </div>
      </form>
      <div className={clsx(styles.contentWrapper, "d-flex flex-column")}>
        <DSButton
          block
          variant="primary"
          onClick={handleSubmit}
          // disabled={!isFormValid || loading}
          loading={loading}
        >
          {loading ? "Verifying..." : "Verify"}
        </DSButton>
      </div>
    </div>
  );
};
