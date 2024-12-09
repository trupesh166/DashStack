import { useState } from "react";
import dayjs from "dayjs";
import { createGuard, editGuard } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "@/hook/UseDecodeToken";
import toast from "react-hot-toast";

export const useAddSecurity = (onSubmitSuccess) => {
  const { societyId } = UseDecodeToken();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: null,
    shift: null,
    shiftDate: null,
    shiftTime: "",
    photo: null,
    bill: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingSecurityId, setEditingSecurityId] = useState(null);

  const openCreateModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (security) => {
    setEditingSecurityId(security._id);
    setFormData({
      fullName: security.name,
      email: security.email,
      phoneNumber: security.phone,
      gender: security.gender,
      shift: security.shift,
      shiftDate: dayjs(security.date),
      shiftTime: security.time,
      photo: security.avatar || null,
      bill: security.bill || null,
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
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: null,
      shift: null,
      shiftDate: null,
      shiftTime: "",
      photo: null,
      bill: null,
    });
    setEditingSecurityId(null);
    setIsEdit(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    const allowedFormats = ["image/jpeg", "application/pdf"];
    if (!allowedFormats.includes(file.type)) {
      alert("Only JPG and PDF formats are allowed.");
      return;
    }
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleFileRemove = (field) => {
    setFormData((prev) => ({ ...prev, [field]: null }));
  };

  const handleSubmit = async () => {
    const { fullName, email, phoneNumber, gender, shift, shiftDate, shiftTime, photo, bill } = formData;
    if (!fullName || !email || !phoneNumber || !gender || !shift || !shiftDate || !shiftTime || !photo || !bill) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    const payload = new FormData();
    payload.append("societyId", societyId);
    payload.append("fullName", fullName);
    payload.append("email", email);
    payload.append("phoneNumber", phoneNumber);
    payload.append("gender", gender);
    payload.append("shift", shift);
    payload.append("joiningDate", dayjs(shiftDate).toISOString());
    payload.append("shiftTime", shiftTime);
    payload.append("profileImage", photo);
    payload.append("adharCardImage", bill);

    try {
      if (isEdit && editingSecurityId) {
        const response = await editGuard(editingSecurityId, payload);
        if (response.message === "Success") {
          toast.success("Security updated successfully.");
        }
      } else {
        const response = await createGuard(payload);
        if (response.message === "Success") {
          toast.success("Security created successfully.");
        }
      }

      if (onSubmitSuccess) onSubmitSuccess();
      closeModal();
    } catch (error) {
      console.error("Error submitting security:", error);
      toast.error("Failed to submit security.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleInputChange,
    handleFileChange,
    handleFileRemove,
    isSubmitting,
    isModalOpen,
    openCreateModal,
    openEditModal,
    closeModal,
    handleSubmit,
    isEdit,
  };
};
