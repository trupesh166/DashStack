import { useState } from "react";
import { deleteGuard } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";

export const useDeleteSecurity = (fetchListSecurity) => {
  const [loading, setLoading] = useState(false);
  const [deleteSecurityData, setDeleteSecurityData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const securityDelete = async (securityId) => {
    try {
      setLoading(true);
      const response = await deleteGuard(securityId);
      setLoading(false);
      if ((response.message = "success")) {
        toast.success("Expense Is Delete Successfully");
        fetchListSecurity()
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
    securityDelete,
    loading,
    deleteSecurityData,
    setDeleteSecurityData,
    showDeleteModal,
    setShowDeleteModal,
  };
};
