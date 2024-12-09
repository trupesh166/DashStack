import { deleteEvent } from "@/axiosApi/ApiHelper";
import { useState } from "react";
import toast from "react-hot-toast";

export const useDeleteOtherIncome = (fetchListOtherIncome) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const openDeleteModal = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedRecord(null);
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    console.log(selectedRecord)
    if (!selectedRecord?._id) return;

    setIsDeleting(true);
    try {
      const response = await deleteEvent(selectedRecord._id);
      if (response.message === "Success") {
        toast.success("Other Income deleted successfully");
        fetchListOtherIncome();
        closeDeleteModal();
      } else {
        throw new Error("Failed to delete other income");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete other income");
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    isDeleting,
    isModalOpen,
    selectedRecord,
    openDeleteModal,
    closeDeleteModal,
    handleDelete,
  };
};
