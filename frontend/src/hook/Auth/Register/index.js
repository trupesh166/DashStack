import { useState } from "react";
import { register, getSociety } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [societies, setSocieties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    societyId: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  // Fetch societies based on zip code
  const fetchSocieties = async (zipCode) => {
    try {
      const response = await getSociety();
      const filteredSocieties = response.data.filter(
        (item) => item.zipcode === Number(zipCode)
      );
      setSocieties(filteredSocieties);
    } catch (err) {
      toast.error("Error fetching societies.");
    }
  };

  // Handle zip code change and fetch societies
  const handleZipCodeChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, zipCode: value }));
    if (value.length >= 5) {
      fetchSocieties(value);
    }
  };

  // Map societies for dropdown
  const societyNames = societies.map((society) => ({
    value: society._id,
    label: society.name,
  }));

  // Handle input change
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Check password match dynamically
    if (name === "password" || name === "confirmPassword") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword:
          name === "confirmPassword" && value !== formData.password
            ? "Passwords do not match."
            : undefined,
      }));
    }
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.number) newErrors.number = "Phone number is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.state) newErrors.state = "State is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.societyId) newErrors.societyId = "Please select a society.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms and conditions.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check if all fields are filled and valid
  const isDisabled =
    Object.values(formData).some(
      (value) => value === "" || (typeof value === "boolean" && !value)
    ) || Object.keys(errors).length > 0;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const apiRequestData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        number: formData.number,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        societyId: formData.societyId,
        password: formData.password,
      };

      await register(apiRequestData);
      toast.success("Registration successful!");
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
  };
};
