import clsx from "clsx";
import { DSCard, NoteCard } from "../../../../components";
import styles from "./Note.module.css";

export const Note = () => {
  return (
    <DSCard
      title="Note"
      className={clsx(styles.GridWrapper, "d-grid")}
      button
      buttonContent="Create Note"
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
  );
};
