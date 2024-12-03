import { useState } from "react";
import { deleteExpense } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";

export const useDeleteExpense = (fetchListExpense) => {
  const [loading, setLoading] = useState(false);
  const [deleteExpenseData, setDeleteExpenseData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const expenseDelete = async (expenseId) => {
    try {
      setLoading(true);
      const response = await deleteExpense(expenseId);
      setLoading(false);
      if ((response.message = "success")) {
        toast.success("Expense Is Delete Successfully");
        fetchListExpense()
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
    expenseDelete,
    loading,
    deleteExpenseData,
    setDeleteExpenseData,
    showDeleteModal,
    setShowDeleteModal,
  };
};
