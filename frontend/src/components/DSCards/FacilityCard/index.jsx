import { Card } from "antd";
import styles from "../EventCard/EventCard.module.css";

export const FacilityCard = ({ title, description, extra, date }) => {
  return (
    <Card title={title} extra={extra} className={styles.card}>
      <div className="card-grid">
        <h6>Upcoming Schedule Service Date</h6>
        <h6>{date}</h6>
      </div>
      <div>
        <h6>Description</h6>
        <span className="fw-medium lh-base h6">{description}</span>
      </div>
    </Card>
  );
};
