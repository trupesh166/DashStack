import { useState } from "react";
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
import { axiosApi } from "../../../axiosApi";

export const Register = () => {
  const { societyNames, isModalOpen, setIsModalOpen } = useRegister();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailOrPhone: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    society: null,
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.emailOrPhone)
      newErrors.emailOrPhone = "Email or phone is required.";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.state) newErrors.state = "State is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.society) newErrors.society = "Please select a society.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Transform formData to match the required API request format
      const apiRequestData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.emailOrPhone.includes("@") ? formData.emailOrPhone : "",
        phoneNumber: formData.phoneNumber,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        selectSociety: formData.society,
      };

      const response = await axiosApi.post(
        "/society-handler/create",
        apiRequestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setIsLoading(false);
    }
  };
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
            label="Email or Phone"
            name="emailOrPhone"
            placeholder="Enter Your Phone Number Or Email"
            value={formData.emailOrPhone}
            onChange={handleChange}
            error={errors.emailOrPhone}
          />
          <DSInput
            label="Phone Number"
            name="phoneNumber"
            placeholder="91+"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
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
          {/* <DSInput
            label="Zip Code"
            name="zipCode"
            placeholder="Enter Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
            error={errors.zipCode}
          /> */}
          <DSSelect
            label="Select Society"
            name="society"
            placeholder="Select Society*"
            parentClassName={styles.colSpan}
            options={societyNames}
            value={formData.society}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, society: value }))
            }
            error={errors.society}
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
          // checked={formData.termsAccepted}
          // onChange={handleChange}
        >
          I agree to all the Terms and
          <Link to="/privacy-policies">Privacy Policies</Link>.
        </DSCheckbox>

        <DSButton
          variant="primary"
          block
          type="submit"
          disabled={isLoading}
          isLoading={isLoading}
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
