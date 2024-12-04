import { useState } from "react";
import dayjs from "dayjs";
import { createExpense, updateExpense, deleteExpense } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "@/hook/UseDecodeToken";
import toast from "react-hot-toast";

export const useAddExpense = (onSubmitSuccess) => {
  const { societyId } = UseDecodeToken();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [amount, setAmount] = useState("");
  const [bill, setBill] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingExpenseId, setEditingExpenseId] = useState(null);

  const openCreateModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (expense) => {
    console.log("expense =====> ", expense)
    const formattedDate = dayjs(expense.date);
    setEditingExpenseId(expense._id);
    setTitle(expense.title);
    setDescription(expense.discription);
    setDate(formattedDate);
    setAmount(expense.amount);
    setBill(expense.billDocument || null); // Preload bill if applicable
    setIsEdit(true)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    resetForm();
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDate(null);
    setAmount("");
    setBill(null);
    setEditingExpenseId(null);
    setIsEdit(false)
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setBill(file);
  };

  const handleFileRemove = () => {
    setBill(null);
  };

  const handleSubmit = async () => {
    if (!title || !description || !date || !amount || !bill) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("societyId", societyId);
    payload.append("title", title);
    payload.append("discription", description);
    payload.append("date", dayjs(date).toISOString());
    payload.append("amount", amount);
    payload.append("file", bill);

    try {
      if (editingExpenseId) {
        const response = await updateExpense(editingExpenseId, payload);
        if (response.message === "Success") {
          toast.success("Expense updated successfully.");
        }
      } else {
        const response = await createExpense(payload);
        if (response.message === "Success") {
          toast.success("Expense created successfully.");
        }
      }

      if (onSubmitSuccess) onSubmitSuccess();
      closeModal();
    } catch (error) {
      console.error("Error submitting expense:", error);
      toast.error("Failed to submit expense.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    date,
    setDate,
    amount,
    setAmount,
    bill,
    handleFileChange,
    handleFileRemove,
    isSubmitting,
    isModalOpen,
    openCreateModal,
    openEditModal,
    closeModal,
    handleSubmit,
    isEdit
  };
};
