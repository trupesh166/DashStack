import { useState } from "react";
import {
  DSButton,
  DSInput,
  DSPasswordInput,
  DSCheckbox,
  SelectSocietyModal,
  DSModal,
  DSSelect,
} from "@/components";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Register.module.css/";

export const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fakeOptions = [
    { value: "john_doe", label: "John Doe" },
    { value: "jane_smith", label: "Jane Smith" },
    { value: "samuel_green", label: "Samuel Green" },
  ];
  return (
    <>
      <h2>Registration</h2>
      <form className={clsx(styles.FromWrapper, "d-flex flex-column")}>
        <div className={clsx(styles.InputWrapper, "d-grid flex-column")}>
          <DSInput
            label={"First Name"}
            placeholder={"Enter First Name"}
            require
          />
          <DSInput
            label={"Last Name"}
            placeholder={"Enter First Name"}
            require
          />
          <DSInput
            label={"Email or Phone"}
            placeholder={"Enter Your Phone Number Or Email"}
            require
          />
          <DSInput label={"Phone Number"} placeholder={"91+"} require />
          <DSInput label={"Country"} placeholder={"Enter Name"} require />
          <DSInput label={"State"} placeholder={"Enter Name"} require />
          <DSInput label={"City"} placeholder={"Enter Name"} require />
          <DSInput label={"Zip Code"} placeholder={"Enter Zip Code"} require />
          <DSSelect
            label={"Select Society"}
            placeholder={"Select Society*"}
            parentClassName={styles.colSpan}
            dropdownRender={(menu) => (
              <>
                {menu}
                <DSButton
                  onClick={() => setIsModalOpen(true)}
                  block
                  variant="primary"
                >
                  Open Modal Button
                </DSButton>
              </>
            )}
            options={fakeOptions}
            require
          />
          <DSPasswordInput
            label={"Password"}
            placeholder={"Enter Password"}
            parentClassName={styles.colSpan}
            require
          />
          <DSPasswordInput
            label={"Confirm Password"}
            placeholder={"Enter Confirm Password"}
            parentClassName={styles.colSpan}
            require
          />
        </div>
        <DSCheckbox>
          I agree to all the Terms and{" "}
          <Link to="/privacy-policies">Privacy Policies</Link>.
        </DSCheckbox>
        <DSButton variant={"primary"} block>
          Register
        </DSButton>
        <h6 className="text-center fw-normal">
          Already have an account? <Link to={"/login"}>Login</Link>
        </h6>
      </form>
      <DSModal
        title={"Create New Society"}
        IsFooter
        open={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        handleClose={() => setIsModalOpen(false)}
        handleContent={"Apply"}
      >
        <SelectSocietyModal />
      </DSModal>
    </>
  );
};
