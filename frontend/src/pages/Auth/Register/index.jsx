import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  DSButton,
  DSInput,
  DSPasswordInput,
  DSCheckbox,
  SelectSocietyModal,
  DSModal,
  DSSelect,
} from "@/components";
import { useRegister } from "@/hook/Auth/Register";
import styles from "./Register.module.css";

export const Register = () => {
  const {
    societyNames,
    isModalOpen,
    setIsModalOpen,
    formData,
    handleChange,
    handleSubmit,
    setFormData,
    errors,
    isLoading,
    handleZipCodeChange,
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
          />
          <DSInput
            label="Last Name"
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
          <DSInput
            label="Email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <DSInput
            label="Phone Number"
            name="number"
            placeholder="91+"
            value={formData.number}
            onChange={handleChange}
            error={errors.number}
          />
          <DSInput
            label="Country"
            name="country"
            placeholder="Enter Country"
            value={formData.country}
            onChange={handleChange}
            error={errors.country}
          />
          <DSInput
            label="State"
            name="state"
            placeholder="Enter State"
            value={formData.state}
            onChange={handleChange}
            error={errors.state}
          />
          <DSInput
            label="City"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
          />
          <DSInput
            label="Zip Code"
            name="zipCode"
            placeholder="Enter Zip Code"
            value={formData.zipCode}
            onChange={handleZipCodeChange}
            error={errors.zipCode}
          />
          <DSSelect
            label="Select Society"
            name="societyId"
            placeholder="Select Society*"
            parentClassName={styles.colSpan}
            options={societyNames}
            value={formData.societyId}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, societyId: value }))
            }
            error={errors.societyId}
            dropdownRender={(menu) => (
              <>
                {menu}
                <DSButton
                  onClick={() => setIsModalOpen(true)}
                  block
                  variant="primary"
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
          />
          <DSPasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            parentClassName={styles.colSpan}
          />
        </div>

        <DSCheckbox
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
        >
          I agree to all the Terms and
          <Link to="/privacy-policies">Privacy Policies</Link>.
        </DSCheckbox>

        <DSButton
          variant="primary"
          block
          type="submit"
          disabled={isLoading}
          loading={isLoading}
        >
          Register
        </DSButton>

        <h6 className="text-center fw-normal">
          Already have an account? <Link to="/login">Login</Link>
        </h6>
      </form>

      <DSModal
        title="Create New Society"
        IsFooter
        open={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        handleClose={() => setIsModalOpen(false)}
        handleContent="Apply"
      >
        <SelectSocietyModal />
      </DSModal>
    </>
  );
};
