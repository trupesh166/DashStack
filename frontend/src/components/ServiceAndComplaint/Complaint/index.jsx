import React from 'react'
import { DSButton, DSCard } from '../..'
import { Col, Row } from 'antd'
import { ComplaintAndRequestcard } from '../..'

export const Complaint = () => {
  return (
    <DSCard
      title={"Complaint"}
      headerContent={(
        <DSButton variant="primary">Create Complaint</DSButton>
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