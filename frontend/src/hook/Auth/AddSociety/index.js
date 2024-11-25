import { useState } from "react";
import { toast } from "react-hot-toast";
import { createSociety } from "@/axiosApi/ApiHelper";

export const useAddSociety = (handleClose) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    societyName: "",
    societyAddress: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
  });

  // Compute if the form is valid
  const isFormValid = Object.values(formData).every((value) => value !== "");

  // Handle input change
  const handleChange = (e) => {
    const { societyName, value } = e.target;
    setFormData((prev) => ({ ...prev, [societyName]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    if (!isFormValid) {
      toast.error("All fields are required!");
      return;
    }
    try {
      await createSociety(formData);
      toast.success("Society created successfully!");
      setFormData({
        societyName: "",
        societyAddress: "",
        country: "",
        state: "",
        city: "",
        zipcode: "",
      });
      handleClose?.();
    } finally {
      setIsLoading(false);
    }
  };

  return { handleChange, handleSubmit, formData, isFormValid, isLoading };
};
