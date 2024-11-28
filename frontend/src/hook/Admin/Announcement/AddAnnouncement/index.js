import { createAnnouncement } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";

export const useAddAnnouncement = () => {
  const submitAnnouncement = async (formData, onSuccess) => {
    try {
      await createAnnouncement(formData);
      toast.success("Announcement Added successfully.");
      if (onSuccess) {
        onSuccess();
      }
      return { success: true };
    } catch (error) {
      toast.error("Failed to submit announcement.");
      return { success: false, error };
    }
  };

  return { submitAnnouncement };
};
