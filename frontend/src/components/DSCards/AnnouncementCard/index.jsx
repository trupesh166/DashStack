import { DSEventsCard } from "@/components/";
import styles from "../EventCard/EventCard.module.css";

export const AnnouncementCard = ({
  title,
  description,
  date,
  time,
  items,
  onAction,
}) => {
  return (
    <DSEventsCard
      title={title}
      items={items}
      className={styles.card}
      onAction={onAction}
    >
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
