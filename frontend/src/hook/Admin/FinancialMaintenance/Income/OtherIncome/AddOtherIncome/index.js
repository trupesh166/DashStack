import { updateEvents, createEvent } from "@/axiosApi/ApiHelper";
import { useState } from "react";
import toast from "react-hot-toast";
import UseDecodeToken from "../../../../../UseDecodeToken";
import dayjs from "dayjs";

export const useAddOtherIncome = (fetchListOtherIncome) => {
    const { societyId } = UseDecodeToken()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [editId, setEditId] = useState("");
    const [formData, setFormData] = useState({
      title: "",
      amount: "",
      date: "",
      dueDate: "",
      description: "",
    });
  
    const openCreateModal = () => {
      setIsEdit(false);
      setFormData({
        title: "",
        amount: "",
        date: "",
        dueDate: "",
        description: "",
      });
      setIsModalOpen(true);
    };
  
    const openEditModal = (record) => {
      setIsEdit(true);
      setEditId(record._id || "")
      setFormData({
        title: record.title || "",
        amount: record.amount || "",
        // date: new Date(record.date).toISOString().slice(0, 10),
        date: dayjs(record.date),
        dueDate: dayjs(record.dueDate),
        // dueDate: new Date(record.dueDate).toISOString().slice(0, 10),
        description: record.description || "",
      });
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setFormData({
        title: "",
        amount: "",
        date: "",
        dueDate: "",
        description: "",
      });
    };
  
    const handleInputChange = (name, value) => {
    //   const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async () => {
        console.log("addUseOtherIncome formData ====>", formData)
        if(!societyId) return
      setIsSubmitting(true);
      try {
        const apiCall = isEdit ? updateEvents : createEvent;
        const payload = isEdit
          ? { ...formData, societyId:societyId, eventId: editId }
          : { ...formData, societyId:societyId, id: undefined }; // Remove `id` for new records
        const response = await apiCall(payload);
        console.log("response ====> ", response)
  
        if (response.message === "Success") {
          toast.success(`Other Income ${isEdit ? "Updated" : "Added"} Successfully`);
          fetchListOtherIncome(); // Refresh the list
          closeModal();
          return
        } else {
          throw new Error(`Failed to ${isEdit ? "update" : "add"} other income`);
        }
      } catch (error) {
        console.error(error);
        toast.error(`Failed to ${isEdit ? "update" : "add"} other income`);
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return {
      isModalOpen,
      isEdit,
      isSubmitting,
      formData,
      openCreateModal,
      openEditModal,
      closeModal,
      handleInputChange,
      handleSubmit,
    };
  };
  