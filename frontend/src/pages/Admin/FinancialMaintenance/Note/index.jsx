import clsx from "clsx";
import { AddNote, DSCard, EditNote, NoteCard } from "../../../../components";
import styles from "./Note.module.css";
import { useState } from "react";

export const Note = () => {

  const [addNote, setAddNote] = useState(false)
  const [editNote, setEditNote] = useState(false)

  return (
    <div>
      <DSCard
        title="Note"
        className={clsx(styles.GridWrapper, "d-grid")}
        button
        buttonContent="Create Note"
        onClick={() => setEditNote(true)}
      >
        <NoteCard
          title="Rent or Mortgage"
          date="01/07/2024"
          description="A visual representation of your spending categories visual representation. "
        />
        <NoteCard
          title="Housing Costs"
          date="01/07/2024"
          description="A visual representation of your spending categories visual representation. "
        />
        <NoteCard
          title="Property Taxes"
          date="01/07/2024"
          description="A visual representation of your spending categories visual representation. "
        />
        <NoteCard
          title="Maintenance Fees"
          date="01/07/2024"
          description="A visual representation of your spending categories visual representation. "
        />
      </DSCard>

      {/* Add Note Modal */}
      <AddNote
        open={addNote}
        handleOk={() => setAddNote(false)}
        handleCancel={() => setAddNote(false)}
        handleClose={() => setAddNote(false)}
      />

      <EditNote
        open={editNote}
        handleOk={() => setEditNote(false)}
        handleCancel={() => setEditNote(false)}
        handleClose={() => setEditNote(false)}
      />

    </div>
  );
};
