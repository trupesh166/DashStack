import { useState } from "react";
import clsx from "clsx";
import { AddNote, DSButton, DSCard, EditNote, NoteCard } from "@/components";
import styles from "./Note.module.css";

export const Note = () => {
  const [addNote, setAddNote] = useState(false);

  return (
    <>
      <DSCard
        title="Note"
        className={clsx(styles.GridWrapper, "d-grid")}
        headerContent={
          <DSButton variant={"primary"} onClick={() => setAddNote(true)}>
            Create Note
          </DSButton>
        }
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
    </>
  );
};
