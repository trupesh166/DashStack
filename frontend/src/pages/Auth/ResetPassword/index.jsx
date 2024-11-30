import { DSButton, DSInput, DSPasswordInput, DSCheckbox } from "@/components";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "../Auth.module.css";

export const ResetPassword = () => {
  return (
    <>
      <h2>Reset Password</h2>
      <form
        className={clsx(styles.FromWrapper, "d-flex flex-column")}
      >
        <div className={clsx(styles.InputWrapper, "d-flex flex-column")}>
          <DSPasswordInput
            label={"New Password"}
            placeholder={"Enter New Password"}
            require
          />
          <DSPasswordInput
            label={"Confirm Password"}
            placeholder={"Enter Confirm Password"}
            require
          />
        </div>
        <DSButton type="submit" variant={"primary"} block>
          Reset Password
        </DSButton>
      </form>
    </>
  )
}
