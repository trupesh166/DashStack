import { useState } from "react";
import toast from "react-hot-toast";
import { createSecurityProtocol, updateSecurityProtocol } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "../../../UseDecodeToken";

export const useAddSecurityProtocol = (onSubmitSuccess) => {

    const { societyId } = UseDecodeToken()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingProtocolId, setEditingProtocolId] = useState(null);

  const openCreateModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (protocol) => {
    setEditingProtocolId(protocol._id);
    setFormData({
      title: protocol.title,
      description: protocol.discription,
    });
    setIsEdit(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    resetForm();
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
    });
    setEditingProtocolId(null);
    setIsEdit(false);
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const { title, description} = formData;
    if (!title || !description) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    const data = {
        societyId:societyId,
        title:formData.title,
        discription:formData.description
    }
    try {
      if (editingProtocolId) {
        await updateSecurityProtocol(editingProtocolId, data);
        toast.success("Security Protocol updated successfully.");
      } else {
        await createSecurityProtocol(data);
        toast.success("Security Protocol created successfully.");
      }

      if (onSubmitSuccess) onSubmitSuccess();
      closeModal();
    } catch (error) {
      console.error("Error submitting security protocol:", error);
      toast.error("Failed to submit security protocol.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    isSubmitting,
    isModalOpen,
    openCreateModal,
    openEditModal,
    closeModal,
    handleSubmit,
    isEdit,
  };
};
