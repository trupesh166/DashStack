import { Card } from "antd";
import styles from "../EventCard/EventCard.module.css";

export const AnnouncementCard = ({ title, description, extra, date, time }) => {
  return (
    <Card title={title} extra={extra} className={styles.card}>
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
    </Card>
  );
};
