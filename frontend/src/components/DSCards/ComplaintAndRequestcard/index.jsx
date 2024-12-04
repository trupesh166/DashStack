import React from 'react'
import { DSEventsCard } from '../..'

export const ComplaintAndRequestcard = ({
  title,
  items,
  onAction,
  date,
  status,
  discription
}) => {
  return (
    <DSEventsCard title={title} items={items} onAction={onAction}>
      <div className="card-grid">
        <h6>Request Date</h6>
        <h6 className="fw-medium lh-base">{date}</h6>
      </div>
      <div className="card-grid">
        <h6>Status</h6>
        <h6 className="fw-medium lh-base">{status}</h6>
      </div>
      <div>
        <h6>Description</h6>
        <span className="fw-medium lh-base h6 word-break">{discription}</span>
      </div>
    </DSEventsCard>
  )
}