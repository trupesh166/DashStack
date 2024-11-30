import { useState } from "react";
import toast from "react-hot-toast";
import { createFacility, editFacility } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "@/hook/UseDecodeToken";
import dayjs from "dayjs";

export const useCreateFacility = (onSuccess) => {
  const { societyId } = UseDecodeToken();
  const [createFacilityModal, setCreateFacilityModal] = useState(false);

  // State for form inputs
  const [facilityName, setFacilityName] = useState("");
  const [description, setDescription] = useState("");
  const [scheduleDate, setScheduleDate] = useState(null);
  const [remindBefore, setRemindBefore] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingFacilityId, setEditingFacilityId] = useState(null);
  const [editingFacility, setEditingFacility] = useState(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Validate form inputs
    if (!facilityName || !description || !scheduleDate || !remindBefore) {
      toast.error("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    // Ensure scheduleDate is correctly formatted
    const formattedScheduleDate = dayjs(scheduleDate).isValid()
      ? dayjs(scheduleDate).toISOString()
      : null;

    const payload = {
      societyId,
      facilityName,
      description,
      serviceDate: formattedScheduleDate,
      remindBefore,
    };

    try {
      let response;
      if (editingFacilityId) {
        response = await editFacility(editingFacilityId, payload);
      } else {
        response = await createFacility(payload);
      }

      if (response.message === "Success") {
        toast.success(
          editingFacilityId
            ? "Facility updated successfully!"
            : "Facility created successfully!"
        );
        onSuccess();
        setCreateFacilityModal(false);
        resetForm();
      } else {
        toast.error(
          editingFacilityId
            ? "Failed to update facility."
            : "Failed to create facility."
        );
      }
    } catch (error) {
      toast.error("An error occurred while processing the request.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFacilityName("");
    setDescription("");
    setScheduleDate(null);
    setRemindBefore("");
    setEditingFacilityId(null);
    setEditingFacility(null);
  };

  const openEditModal = (facility) => {
    setEditingFacility(facility);
    setEditingFacilityId(facility._id);
    setFacilityName(facility.facilityName);
    setDescription(facility.description);
    setScheduleDate(new Date(facility.serviceDate));
    setRemindBefore(facility.remindBefore);
    setCreateFacilityModal(true);
  };

  const openCreateModal = () => {
    resetForm();
    setCreateFacilityModal(true);
  };

  return {
    createFacilityModal,
    setCreateFacilityModal,
    facilityName,
    description,
    scheduleDate,
    remindBefore,
    setFacilityName,
    setDescription,
    setScheduleDate,
    setRemindBefore,
    handleSubmit,
    isSubmitting,
    openCreateModal,
    openEditModal,
    editingFacility,
    setEditingFacility,
    setEditingFacilityId,
  };
};
