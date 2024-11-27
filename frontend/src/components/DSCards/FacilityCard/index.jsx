import { Card } from "antd";
import styles from "../EventCard/EventCard.module.css";
import { DSEventsCard } from "@/components/";

export const FacilityCard = ({ title, description, extra, date }) => {
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
