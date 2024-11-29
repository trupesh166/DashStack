import { useState } from "react";
import clsx from "clsx";
import { AddNote, DSButton, DSCard, NoteCard, DeleteModal } from "@/components";
import { useAddNote, useListNote } from "@/hook/Admin/FinancialMaintenance";
import { useDeleteNote } from "@/hook/Admin/FinancialMaintenance/Note/DeleteNote";

import styles from "./Note.module.css";

export const Note = () => {
  const { dataListNote, fetchListNote } = useListNote(); // Fetch the notes
  const {
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
  } = useAddNote(fetchListNote);

  const {
    deleteNote,
    loading,
    deleteNoteData,
    setDeleteNoteData,
    showDeleteModal,
    setShowDeleteModal,
  } = useDeleteNote();

  const [mode, setMode] = useState("add");

  const handleActionClick = (key, note) => {
    if (key === "edit") {
      setMode("edit");
      openEditModal(note);
    } else if (key === "delete") {
      console.log("Delete action triggered for note:", note);
      setDeleteNoteData(note); // Set the note to be deleted
      setShowDeleteModal(true); // Show the delete confirmation modal
    }
  };

  const handleDeleteNote = async () => {
    if (!deleteNoteData) return;

    const { success } = await deleteNote(deleteNoteData._id); // Delete the selected note
    if (success) {
      fetchListNote(); // Refresh the note list after successful deletion
    }
    setShowDeleteModal(false); // Close the modal
  };

  return (
    <>
      <DSCard
        title="Notes"
        className={clsx(styles.GridWrapper, "announcement-card-grid")}
        headerContent={
          <DSButton
            variant={"primary"}
            onClick={() => {
              setMode("add");
              openCreateModal();
            }}
          >
            Create Note
          </DSButton>
        }
      >
        {dataListNote?.map((note) => (
          <NoteCard
            key={note._id}
            title={note.title}
            description={note.description}
            date={new Date(note.date).toLocaleDateString()}
            items={[
              { label: "Edit", key: "edit" },
              { label: "Delete", key: "delete" },
            ]}
            onAction={(key) => handleActionClick(key, note)}
          />
        ))}
      </DSCard>

      <AddNote
        open={isModalOpen}
        handleOk={handleSubmit}
        handleCancel={closeModal}
        handleClose={closeModal}
        headerTitle={mode === "add" ? "Add Note" : "Edit Note"}
        handleContent={mode === "add" ? "Save" : "Edit"}
        disabledButton={isSubmitting || !title || !description || !date}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        date={date}
        setScheduleDate={setScheduleDate}
        isSubmitting={isSubmitting}
      />

      <DeleteModal
        Title={"Delete Note?"}
        isModalOpen={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleOk={handleDeleteNote}
        onCancel={() => setShowDeleteModal(false)}
        loading={loading}
      >
        <p>Debug: showDeleteModal is {showDeleteModal ? "true" : "false"}</p>
        Are you sure you want to delete this note?
      </DeleteModal>
    </>
  );
};
