import { DSEventsCard } from "@/components/";
import styles from "../EventCard/EventCard.module.css";

export const NoteCard = ({ title, description, items }) => {
  return (
    <DSEventsCard title={title} items={items} className={styles.card}>
      <div>
        <h6>Description</h6>
        <span className="fw-medium lh-base h6">{description}</span>
      </div>
    </DSEventsCard>
  );
};
