import React, { useState } from 'react'
import { ComplaintAndRequestcard, CreateRequestModal, DeleteModal, DSButton, DSCard } from '../..'

export const Request = () => {

  const [createRequestModal, setCreateRequestModal] = useState(false)
  const [delateRequestModal, setDelateRequestModal] = useState(false)

  return (
    <>
      <DSCard
        title={"Request"}
        headerContent={(
          <DSButton
            variant="primary"
            onClick={() => setCreateRequestModal(true)}
          >Create Request
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
          onAction={() => setDelateRequestModal(true)}
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

      {/* Create Request Modal */}
      <CreateRequestModal
        open={createRequestModal}
        handleCancel={() => setCreateRequestModal(false)}
        handleOk={() => setCreateRequestModal(false)}
        handleClose={() => setCreateRequestModal(false)}
      />

      {/* Remove Request Modal */}
      <DeleteModal
        Title="Delete Request?"
        children="Are you sure you want to delate this Request?"
        open={delateRequestModal}
        handleClose={() => setDelateRequestModal(false)}
        handleOk={() => setDelateRequestModal(false)}
        handleCancel={() => setDelateRequestModal(false)}
      />

    </>
  )
}