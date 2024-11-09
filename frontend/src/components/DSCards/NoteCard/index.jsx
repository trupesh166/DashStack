import { Card } from "antd";
import styles from "../EventCard/EventCard.module.css";

export const NoteCard = ({ title, description, extra }) => {
  return (
    <Card title={title} extra={extra} className={styles.card}>
      <div>
        <h6>Description</h6>
        <span className="fw-medium lh-base h6">{description}</span>
      </div>
    </Card>
  );
};
