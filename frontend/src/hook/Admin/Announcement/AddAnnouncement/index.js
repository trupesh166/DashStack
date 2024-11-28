import { createAnnouncement } from "@/axiosApi/ApiHelper";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const useAddAnnouncement = (handleClose) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        announcementTitle: "",
        announcementDescription: "",
        announcementDate: "",
        announcementTime: ""
    })

    // Compute if the form is valid
    const isFormValid = Object.values(formData).every((value) => value !== "");

    // Handle input change
    const handleChange = (e) => {
        let name, value;

        if (e && e.target) {
            name = e.target.name;
            value = e.target.value;
        } else if (e && e.name) {
            name = e.name;
            value = e.value;
        } else {
            console.error("Unrecognized event in handleChange:", e);
            return;
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
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
          await createAnnouncement({...formData, societyId:"67363d9023e13554b1e7ae79"});
          toast.success("Society created successfully!");
          setFormData({
            announcementTitle: "",
            announcementDescription: "",
            announcementDate: "",
            announcementTime: ""
          });
          handleClose?.();
        } finally {
          setIsLoading(false);
        }
      };

    return { handleChange, handleSubmit, formData, isFormValid, isLoading };
}

