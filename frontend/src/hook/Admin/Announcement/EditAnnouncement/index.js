import { updateAnnouncement } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";

export const useEditAnnouncement = () => {
  const handleUpdateAnnouncement = async (formData, refetchAnnouncements, editAnnouncementId) => {
    const response = await updateAnnouncement(editAnnouncementId, formData);
    toast.success("Announcement updated successfully:", response.data);
    refetchAnnouncements();
    return { success: true };
  };

  return { handleUpdateAnnouncement };
};
