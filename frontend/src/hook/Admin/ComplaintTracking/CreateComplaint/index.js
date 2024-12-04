import { useState } from "react";
import toast from "react-hot-toast";
import { createComplaint, updateComplaint } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "../../../UseDecodeToken";

export const useAddComplaint = (onSubmitSuccess) => {
    const { societyId } = UseDecodeToken()
    const [formData, setFormData] = useState({
        complainerName: "",
        complaintName: "",
        description: "",
        wing: "",
        unit: "",
        priority: "Medium", 
        status: "Pending",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editingComplaintId, setEditingComplaintId] = useState(null);

    const openCreateModal = () => {
        resetForm();
        setIsModalOpen(true);
    };

    const openEditModal = (complaint) => {
        setEditingComplaintId(complaint._id);
        setFormData({
            complainerName: complaint.complainerName,
            complaintName: complaint.complaintName,
            description: complaint.discription,
            wing: complaint.wingId._id,
            unit: complaint.unitId._id,
            priority: complaint.priorityStatus,
            status: complaint.status,
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
            complainerName: "",
            complaintName: "",
            description: "",
            wing: "",
            unit: "",
            priority: "Medium",
            status: "Pending",
        });
        setEditingComplaintId(null);
        setIsEdit(false);
    };

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (type) => {
        if (!societyId) return
        const { complainerName, complaintName, description, wing, unit } = formData;
        if (!complainerName || !complaintName || !description || !wing || !unit) {
            toast.error("Please fill in all required fields.");
            return;
        }
        setIsSubmitting(true);
        console.log("formData ====> ", formData)

        const data = {
            societyId: societyId,
            complainerName: formData.complainerName,
            complaintName: formData.complaintName,
            discription: formData.description,
            wingId: formData.wing,
            unitId: formData.unit,
            priorityStatus: formData.priority,
            status: formData.status,
            complaintype: formData.status,
            complaintype:type
        }
        try {
            if (editingComplaintId) {
                const response = await updateComplaint(editingComplaintId, data);
                if (response.message === "Success") {
                    toast.success("Complaint updated successfully.");
                }
            } else {
                console.log("create data ====> ", data)
                const response = await createComplaint({ ...data });
                if (response.message === "Success") {
                    toast.success("Complaint created successfully.");
                }
            }

            if (onSubmitSuccess) onSubmitSuccess();
            closeModal();
        } catch (error) {
            console.error("Error submitting complaint:", error);
            toast.error("Failed to submit complaint.");
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
