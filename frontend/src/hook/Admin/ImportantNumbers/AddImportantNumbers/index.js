import { createImportantNumber } from "@/axiosApi/ApiHelper";
import { useState } from "react";
import { toast } from "react-hot-toast";
import UseDecodeToken from "../../../UseDecodeToken";

export const useAddImportantNumber = (handleClose) => {
  const { societyId } = UseDecodeToken();
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    phoneNumber: "",
    work: "",
  });

  //   const { fetchimportantNumber } = useListImportantNumber()

  // Compute if the form is valid
  const isFormValid = Object.values(formValues).every((value) => value !== "");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
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
      await createImportantNumber({
        ...formValues,
        societyId: societyId,
      });
      toast.success("Society created successfully!");
      setFormValues({
        fullName: "",
        phoneNumber: "",
        work: "",
      });
      handleClose?.();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleInputChange,
    handleSubmit,
    formValues,
    isFormValid,
    isLoading,
  };
};
