import { DSEventsCard } from "@/components/";
import styles from "../EventCard/EventCard.module.css";

export const NoteCard = ({ title, description, items,onAction }) => {
  return (
    <DSEventsCard title={title} items={items} onAction={onAction} className={styles.card}>
      <div>
        <h6>Description</h6>
        <span className="fw-medium lh-base h6">{description}</span>
      </div>
    </DSEventsCard>
  );
};
