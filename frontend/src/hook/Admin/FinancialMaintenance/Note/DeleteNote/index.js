import { useState } from "react";
import toast from "react-hot-toast";
import { deleteNote as deleteNoteApi } from "@/axiosApi/ApiHelper";

export const useDeleteNote = () => {
  const [loading, setLoading] = useState(false);
  const [deleteNoteData, setDeleteNoteData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteNote = async (announcementId) => {
    try {
      setLoading(true);
      const response = await deleteNoteApi(announcementId);
      setLoading(false);
      if ((response.message = "success")) {
        toast.success("Note Is Delete Successfully");
        return { success: true };
      } else {
        throw new Error("Failed to Delete Note");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error Deleting Note:", error);
      return { success: false, error };
    }
  };

  return {
    deleteNote,
    loading,
    deleteNoteData,
    setDeleteNoteData,
    showDeleteModal,
    setShowDeleteModal,
  };
};
