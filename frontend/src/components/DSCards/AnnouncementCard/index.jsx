import { DSEventsCard } from "@/components/";
import styles from "../EventCard/EventCard.module.css";

export const AnnouncementCard = ({ title, description, date, time }) => {
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
      <div className="card-grid">
        <h6>Announcement Date</h6>
        <h6 className="fw-medium lh-base">{date}</h6>
      </div>
      <div className="card-grid">
        <h6>Announcement Time</h6>
        <h6 className="fw-medium lh-base">{time}</h6>
      </div>
      <div>
        <h6>Description</h6>
        <span className="fw-medium lh-base h6">{description}</span>
      </div>
    </DSEventsCard>
  );
};
