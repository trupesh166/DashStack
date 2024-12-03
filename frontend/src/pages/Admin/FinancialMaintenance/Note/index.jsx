import { useState, useEffect } from "react";
import clsx from "clsx";
import { AddNote, DSButton, DSCard, NoteCard, DeleteModal } from "@/components";
import { useAddNote, useListNote } from "@/hook/Admin/FinancialMaintenance";
import { useDeleteNote } from "@/hook/Admin/FinancialMaintenance/Note/DeleteNote";
import styles from "./Note.module.css";

export const Note = () => {
  const { dataListNote, fetchListNote } = useListNote();
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
  } = useDeleteNote(fetchListNote);

  const [mode, setMode] = useState("add");

  const handleActionClick = (key, note) => {
    if (key === "edit") {
      setMode("edit");
      openEditModal(note);
    } else if (key === "delete") {
      setDeleteNoteData(note);
      setShowDeleteModal(true);
    }
  };

  const handleDeleteNote = async () => {
    if (!deleteNoteData) return;

    const { success } = await deleteNote(deleteNoteData._id);
    if (success) {
      fetchListNote();
    }
    setShowDeleteModal(false);
  };

  return (
    <>
      {/* Card displaying all notes */}
      <DSCard
        title="Notes"
        className={clsx(styles.GridWrapper, "announcement-card-grid")}
        headerContent={
          <DSButton
            variant="primary"
            onClick={() => {
              setMode("add");
              openCreateModal();
            }}
          >
            Create Note
          </DSButton>
        }
      >
        {/* Render NoteCard for each note */}
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

      {/* Add/Edit Note Modal */}
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

      {/* Delete Confirmation Modal */}
      <DeleteModal
        Title="Delete Note?"
        isModalOpen={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleOk={handleDeleteNote}
        onCancel={() => setShowDeleteModal(false)}
        loading={loading}
      >
        Are you sure you want to delete this note?
      </DeleteModal>
    </>
  );
};
