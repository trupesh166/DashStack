import { DSEventsCard } from "@/components/";

export const AnnouncementCard = ({
  title,
  description,
  date,
  time,
  items,
  onAction,
}) => {
  return (
    <DSEventsCard title={title} items={items} onAction={onAction}>
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
        <span className="fw-medium lh-base h6 word-break">{description}</span>
      </div>
    </DSEventsCard>
  );
};
