import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  DSButton,
  DSInput,
  DSPasswordInput,
  DSCheckbox,
  SelectSocietyModal,
  DSSelect,
} from "@/components";
import { useRegister } from "@/hook/Auth/Register";
import styles from "./Register.module.css";

export const Register = () => {
  const {
    societyNames,
    formData,
    handleChange,
    handleZipCodeChange,
    handleSubmit,
    setFormData,
    isModalOpen,
    setIsModalOpen,
    errors,
    isLoading,
    isDisabled,
  } = useRegister();

  return (
    <>
      <h2>Registration</h2>
      <form
        onSubmit={handleSubmit}
        className={clsx(styles.FormWrapper, "d-flex flex-column")}
      >
        <div className={clsx(styles.InputWrapper, "d-grid flex-column")}>
          <DSInput
            label="First Name"
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            require
          />
          <DSInput
            label="Last Name"
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            require
          />
          <DSInput
            label="Email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            require
          />
          <DSInput
            label="Phone Number"
            name="phoneNumber"
            placeholder="91+"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
            require
          />
          <DSInput
            label="Country"
            name="country"
            placeholder="Enter Country"
            value={formData.country}
            onChange={handleChange}
            error={errors.country}
            require
          />
          <DSInput
            label="State"
            name="state"
            placeholder="Enter State"
            value={formData.state}
            onChange={handleChange}
            error={errors.state}
            require
          />
          <DSInput
            label="City"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
            require
          />
          <DSInput
            label="Zip Code"
            name="zipCode"
            placeholder="Enter Zip Code"
            value={formData.zipCode}
            onChange={handleZipCodeChange}
            error={errors.zipCode}
            require
          />
          <DSSelect
            showSearch
            label="Select Society"
            name="selectSociety"
            placeholder="Select Society"
            parentClassName={styles.colSpan}
            options={societyNames}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            value={formData.selectSociety}
            require
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, selectSociety: value }))
            }
            error={errors.selectSociety}
            dropdownRender={(menu) => (
              <>
                {menu}
                <DSButton
                  onClick={() => setIsModalOpen(true)}
                  block
                  variant="primary"
                  className={styles.selectSociety}
                >
                  Create New Society
                </DSButton>
              </>
            )}
          />
          <DSPasswordInput
            label="Password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            parentClassName={styles.colSpan}
            require
          />
          <DSPasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            parentClassName={styles.colSpan}
            require
          />
        </div>

        <DSCheckbox
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
        >
          I agree to all the Terms and {""}
          <Link to="/privacy-policies">Privacy Policies</Link>.
        </DSCheckbox>

        <DSButton
          variant="primary"
          block
          type="submit"
          disabled={isDisabled}
          loading={isLoading}
        >
          Register
        </DSButton>

        {location.pathname === "/admin/register" && (
          <h6 className="text-center fw-normal">
            Already have an account? <Link to="/admin/login">Login</Link>
          </h6>
        )}
      </form>
      <SelectSocietyModal
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
