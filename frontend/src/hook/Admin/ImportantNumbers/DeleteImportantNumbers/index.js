import { useState } from "react";
import { deleteAnnouncement } from "../../../../axiosApi/ApiHelper";
import toast from "react-hot-toast";

export const usedeleteImportantNumber = () => {
  const [loading, setLoading] = useState(false);
  const [importantNumberData, setImportantNumberData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const importantNumberDelete = async (announcementId) => {
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
    importantNumberDelete,
    loading,
    importantNumberData,
    setImportantNumberData,
    showDeleteModal,
    setShowDeleteModal,
  };
};
