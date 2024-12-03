import React from 'react'
import { ComplaintAndRequestcard, DSButton, DSCard } from '../..'

export const Request = () => {
  return (
    <DSCard
      title={"Request"}
      headerContent={(
        <DSButton variant="primary">Create Request</DSButton>
      )}
      className="announcement-card-grid"
    >

      <ComplaintAndRequestcard
        title={"Unethical Behavior"}
        items={[
          { label: "Delete", key: "delete" },
        ]}
        date={"01/07/2024"}
        status={"Open"}
        discription={"Regular waste collection services."}
      />
      <ComplaintAndRequestcard
        title={"Unethical Behavior"}
        items={[
          { label: "Delete", key: "delete" },
        ]}
        date={"01/07/2024"}
        status={"Open"}
        discription={"Regular waste collection services."}
      />
      <ComplaintAndRequestcard
        title={"Unethical Behavior"}
        items={[
          { label: "Delete", key: "delete" },
        ]}
        date={"01/07/2024"}
        status={"Open"}
        discription={"Regular waste collection services."}
      />
      <ComplaintAndRequestcard
        title={"Unethical Behavior"}
        items={[
          { label: "Delete", key: "delete" },
        ]}
        date={"01/07/2024"}
        status={"Open"}
        discription={"Regular waste collection services."}
      />
      <ComplaintAndRequestcard
        title={"Unethical Behavior"}
        items={[
          { label: "Delete", key: "delete" },
        ]}
        date={"01/07/2024"}
        status={"Open"}
        discription={"Regular waste collection services."}
      />
      <ComplaintAndRequestcard
        title={"Unethical Behavior"}
        items={[
          { label: "Delete", key: "delete" },
        ]}
        date={"01/07/2024"}
        status={"Open"}
        discription={"Regular waste collection services."}
      />

    </DSCard>
  )
}