import { useState } from "react";
import { deleteAnnouncement } from "../../../../axiosApi/ApiHelper";
import toast from "react-hot-toast";

export const useDeleteAnnouncement = () => {
  const [loading, setLoading] = useState(false);
  const [deleteAnnouncementData, setDeleteAnnouncementData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const announcementDelete = async (announcementId) => {
    try {
      setLoading(true);
      const response = await deleteAnnouncement(announcementId);
      setLoading(false);
      if ((response.message = "success")) {
        toast.success("Announcement Is Delete Successfully");
        return { success: true };
      } else {
        throw new Error("Failed to delete announcement");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error deleting announcement:", error);
      return { success: false, error };
    }
  };

  return {
    announcementDelete,
    loading,
    deleteAnnouncementData,
    setDeleteAnnouncementData,
    showDeleteModal,
    setShowDeleteModal,
  };
};
