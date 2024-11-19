import { useEffect, useState } from "react";
import { register } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";
import debounce from "lodash.debounce";

export const useRegister = () => {
  const [societies, setSocieties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const [errors, setErrors] = useState({});

  // Fetch societies on component mount
  useEffect(() => {
    fetchSocieties();
  }, []);

  const fetchSocieties = async (zipCode = "") => {
    try {
      setLoading(true);
      const data = await register(zipCode);
      setSocieties(data.data || []);
      if (zipCode) {
        toast.success("Societies loaded for the given zip code.");
      }
    } catch (err) {
      setError("Error fetching societies.");
      toast.error("Error fetching societies.");
    } finally {
      setLoading(false);
    }
  };

  // Debounce the fetchSocieties function
  const debouncedFetchSocieties = debounce(fetchSocieties, 300);

  // Map societies into a value-label format for dropdowns
  const societyNames = societies.map((society) => ({
    value: society._id,
    label: society.name,
  }));

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle zip code change
  const handleZipCodeChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, zipCode: value }));
    if (value.length >= 5) {
      debouncedFetchSocieties(value);
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
        confirmPassword: formData.confirmPassword,
      };

      const data = await register(apiRequestData);
      toast.success("Registration successful!");
    } catch (error) {
      toast.error("Registration failed.");
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    societyNames,
    error,
    isModalOpen,
    setIsModalOpen,
    formData,
    handleChange,
    validateForm,
    handleSubmit,
    setFormData,
    errors,
    isLoading,
    handleZipCodeChange,
  };
};
