import { useState } from "react";
import toast from "react-hot-toast";
import { deleteNote as deleteNoteApi } from "@/axiosApi/ApiHelper";

export const useDeleteNote = () => {
  const [loading, setLoading] = useState(false);
  const [deleteNoteData, setDeleteNoteData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteNote = async (noteId) => {
    setLoading(true);
    const response = await deleteNoteApi(noteId);
    setLoading(false);

    if (response?.message === "Success") {
      toast.success("Note deleted successfully");
      return { success: true };
    } else {
      throw new Error("Failed to delete note");
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
