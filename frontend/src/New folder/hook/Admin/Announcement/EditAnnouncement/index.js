import { updateAnnouncement } from "@/axiosApi/ApiHelper";

export const EditAnnouncement = () => {
  const handleUpdateAnnouncement = async (formData, refetchAnnouncements) => {
    const response = await updateAnnouncement(formData);
    toast.success("Announcement updated successfully:", response.data);
    refetchAnnouncements();
    return { success: true };
  };

  return { handleUpdateAnnouncement };
};
