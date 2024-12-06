import Icons from "@/constants/Icons";
import { DSEventsCard } from "../..";
import styles from "./OtherIncomeCard.module.css";

export const OtherIncomeCard = ({
  title,
  amount,
  totalMember,
  date,
  dueDate,
  description,
  items,
  onAction,
}) => {
  return (
    <DSEventsCard
      title={title}
      className={styles.card}
      items={items}
      onAction={onAction}
    >
      <div className="card-grid">
        <h6>Amount Per Member</h6>
        <h6 className="fw-medium lh-base">
          {Icons.Rupee} {amount}
        </h6>
      </div>
      <div className="card-grid">
        <h6>Total Member</h6>
        <h6 className="fw-medium lh-base">{totalMember}</h6>
      </div>
      <div className="card-grid">
        <h6>Date</h6>
        <h6 className="fw-medium lh-base">{date}</h6>
      </div>
      <div className="card-grid">
        <h6>Due Date</h6>
        <h6 className="fw-medium lh-base">{dueDate}</h6>
      </div>
      <div>
        <h6>Description</h6>
        <span className="fw-medium lh-base h6">{description}</span>
      </div>
    </DSEventsCard>
  );
};
