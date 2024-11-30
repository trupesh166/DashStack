import { useState } from "react";
import dayjs from "dayjs";
import { createNotes, updateNote } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "@/hook/UseDecodeToken";
import toast from "react-hot-toast";

export const useAddNote = (onSubmitSuccess) => {
  const { societyId } = UseDecodeToken();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setScheduleDate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);

  const openCreateModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (note) => {
    const formattedDate = dayjs(note.date);
    setEditingNoteId(note._id);
    setTitle(note.title);
    setDescription(note.description);
    setScheduleDate(formattedDate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    resetForm();
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setScheduleDate(null);
    setEditingNoteId(null);
  };

  const handleSubmit = async () => {
    if (!title || !description || !date || isNaN(new Date(date).getTime())) {
      console.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      societyId,
      title,
      description,
      date: dayjs(date).toISOString(),
    };

    try {
      if (editingNoteId) {
        const response = await updateNote(editingNoteId, payload);
        if (response.message == "Success") {
          toast.success("Note Edit successfully.");
        }
      } else {
        const response = await createNotes(payload);
        if (response.message == "Success") {
          toast.success("Note created successfully.");
        }
      }

      if (onSubmitSuccess) onSubmitSuccess();
      closeModal();
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
    setScheduleDate,
    isSubmitting,
    isModalOpen,
    openCreateModal,
    openEditModal,
    closeModal,
    handleSubmit,
  };
};
