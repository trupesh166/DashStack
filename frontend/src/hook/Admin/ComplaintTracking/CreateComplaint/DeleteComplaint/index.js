import { useState } from "react";
import { deleteComplaint } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";

export const useDeleteComplaint = (fetchListComplaint) => {
  const [loading, setLoading] = useState(false);
  const [deleteComplaintData, setDeleteComplaintData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const complaintDelete = async (complaintId) => {
    try {
      setLoading(true);
      const response = await deleteComplaint(complaintId);
      setLoading(false);
      if ((response.message = "success")) {
        toast.success("Expense Is Delete Successfully");
        fetchListComplaint()
        return { success: true };
      } else {
        throw new Error("Failed to delete expense");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error deleting expense:", error);
      return { success: false, error };
    }
  };

  return {
    complaintDelete,
    loading,
    deleteComplaintData,
    setDeleteComplaintData,
    showDeleteModal,
    setShowDeleteModal,
  };
};
