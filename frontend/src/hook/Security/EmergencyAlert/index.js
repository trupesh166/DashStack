import { useState, useEffect } from "react";
import { createEmergency } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "@/hook/UseDecodeToken";
import toast from "react-hot-toast";

export const useEmergencyManagement = () => {
  const { token, societyId } = UseDecodeToken();
  const securityId = token?.societyData?.userId;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formData, setFormData] = useState({
    alertType: [],
    description: "",
  });

  useEffect(() => {
    if (!societyId || !securityId) {
      console.error(
        "societyId or securityId is undefined. Please check the token."
      );
    }
  }, [societyId, securityId]);

  useEffect(() => {
    setIsDisabled(!formData.alertType || !formData.description);
  }, [formData]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDisabled) return;

    if (!formData.alertType || !formData.description) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!societyId || !securityId) {
      toast.error("Missing societyId or securityId. Cannot send the alert.");
      return;
    }

    const payload = {
      societyId,
      securityId,
      alertType: formData.alertType,
      description: formData.description,
    };

    try {
      setIsSubmitting(true);
      const response = await createEmergency(payload);
      if (response?.message === "Success") {
        toast.success("Alert sent successfully!");
        setFormData({ alertType: [], description: "" });
      } else {
        throw new Error("Failed to send alert.");
      }
    } catch (error) {
      toast.error(
        error?.message || "An error occurred while sending the alert."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isDisabled,
    isSubmitting,
  };
};
