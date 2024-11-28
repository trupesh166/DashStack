import { Card } from "antd";
import styles from "../EventCard/EventCard.module.css";
import { DSEventsCard } from "@/components/";

export const FacilityCard = ({ title, description, items, date, onAction }) => {
  return (
    <DSEventsCard
      title={title}
      items={items}
      className={styles.card}
      onAction={onAction}
    >
      <div className="card-grid">
        <h6>Upcoming Schedule Service Date</h6>
        <h6>{date}</h6>
      </div>
      <div>
        <h6>Description</h6>
        <span className="fw-medium lh-base h6">{description}</span>
      </div>
    </DSEventsCard>
  );
};
