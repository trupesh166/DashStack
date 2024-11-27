import { Card } from "antd";
import Icons from "@/constants/Icons";
import styles from "./EventCard.module.css";

export const EventCard = ({
  title,
  amount,
  phone,
  age,
  gender,
  description,
  extra,
}) => {
  return (
    <Card title={title} extra={extra} className={styles.card}>
      <div className={"card-grid"}>
        <h6>Amount Per Member</h6>
        <h6 className="lh-1 fw-semibold">
          {Icons.Rupee}
          {amount}
        </h6>
      </div>
      <div className={"card-grid"}>
        <h6>Phone Number</h6>
        <h6 className="fw-medium lh-base">{phone}</h6>
      </div>
      <div className={"card-grid"}>
        <h6>Age</h6>
        <h6 className="fw-medium lh-base">{age}</h6>
      </div>
      <div className={"card-grid"}>
        <h6>Gender</h6>
        <h6 className="fw-medium lh-base">{gender}</h6>
      </div>
      <div>
        <h6>Description</h6>
        <span className="fw-medium lh-base h6">{description}</span>
      </div>
    </Card>
  );
};
