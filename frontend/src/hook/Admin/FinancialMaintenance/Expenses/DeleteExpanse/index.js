import { useState } from "react";
import { deleteExpense } from "@/axiosApi/apiHelper";
import toast from "react-hot-toast";

export const useDeleteExpanse = (fetchData) => {
  const [deleteComplaint, setDeleteComplaint] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const handleDelete = async () => {
    if (selectedExpense) {
      try {
        await deleteExpense(selectedExpense.key);
        toast.success("Expense deleted successfully.");

        fetchData();

        setSelectedExpense(null);
        setDeleteComplaint(false);
      } catch (error) {
        toast.error("Failed to delete the expense.");
      }
    }
  };

  return {
    deleteComplaint,
    setDeleteComplaint,
    selectedExpense,
    setSelectedExpense,
    handleDelete,
  };
};
