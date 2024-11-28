import { DSButton } from "@/components";
import clsx from "clsx";
import styles from "../Auth.module.css";
import { DSInputOtp } from "../../../components";
import Icons from "../../../constants/Icons";

export const OTP = () => {
  return (
    <div className={clsx(styles.FromWrapper, "d-flex flex-column")}>
      <div className={clsx(styles.contentWrapper, "d-flex flex-column")}>
        <h2>Enter OTP</h2>
        <p>
          Please enter the 6 digit code that send to your phone number.
        </p>
      </div>
      <form>
        <DSInputOtp
          block
          placeholder="000000"
        />

        <div className="d-flex justify-content-between mt-4">
          <h6>{Icons.Timer} <span>00:30 sec</span></h6>
          <p>Resend OTP</p>
        </div>
      </form>
      <div className={clsx(styles.contentWrapper, "d-flex flex-column")}>
        <DSButton
          block
          variant="primary"
        >
          Verify
        </DSButton>
      </div>
    </div>
  )
}
