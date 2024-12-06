import React, { useState } from "react";
import Icons from "@/constants/Icons";
import { DeleteModal, DSEventsCard, EditOtherIncomeModal } from "../..";
import { useNavigate } from "react-router-dom";
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
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [editOtherIncome, setEditOtherIncome] = useState(false);
  const [deleteOtherIncome, setDeleteOtherIncome] = useState(false);

  return (
    <>
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

      {/* Edit Other Income Modal */}
      <EditOtherIncomeModal
        open={editOtherIncome}
        handleCancel={() => setEditOtherIncome(false)}
        handleClose={() => setEditOtherIncome(false)}
        handleOk={() => setEditOtherIncome(false)}
        record={selectedRecord}
      />

      {/* Delete Other Income Modal */}
      <DeleteModal
        Title={`Delete ${title}`}
        children={"Are you sure you want to delate this?"}
        isModalOpen={deleteOtherIncome}
        handleClose={() => setDeleteOtherIncome(false)}
        handleOk={() => setDeleteOtherIncome(false)}
        onCancel={() => setDeleteOtherIncome(false)}
      />
    </>
  );
};
