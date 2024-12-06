import React, { useState } from 'react'
import { CreateComplaintModal, DeleteModal, DSButton, DSCard } from '../..'
import { Col, Row } from 'antd'
import { ComplaintAndRequestcard } from '../..'

export const Complaint = () => {

  const [createComplaintModal, setCreateComplaintModal] = useState(false)
  const [delateComplaintModal, setDelateComplaintModal] = useState(false)

  return (
    <>
      <DSCard
        title={"Complaint"}
        headerContent={(
          <DSButton
            variant="primary"
            onClick={() => setCreateComplaintModal(true)}
          >
            Create Complaint
          </DSButton>
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
          onAction={() => setDelateComplaintModal(true)}
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

      {/* Create Complaint Modal */}
      <CreateComplaintModal
        open={createComplaintModal}
        handleCancel={() => setCreateComplaintModal(false)}
        handleOk={() => setCreateComplaintModal(false)}
        handleClose={() => setCreateComplaintModal(false)}
      />

      {/* Remove Complaint Modal */}
      <DeleteModal
        Title="Delete Complain?"
        children="Are you sure you want to delate this Complain?"
        open={delateComplaintModal}
        handleClose={() => setDelateComplaintModal(false)}
        handleOk={() => setDelateComplaintModal(false)}
        handleCancel={() => setDelateComplaintModal(false)}
      />

    </>
  )
}