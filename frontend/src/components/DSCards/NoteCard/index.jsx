import { DSEventsCard } from "@/components/";
import styles from "../EventCard/EventCard.module.css";

export const NoteCard = ({ title, description, extra }) => {
  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <DSEventsCard title={title} items={items} className={styles.card}>
      <div>
        <h6>Description</h6>
        <span className="fw-medium lh-base h6">{description}</span>
      </div>
    </DSEventsCard>
  );
};
