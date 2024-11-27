import React, { useState } from 'react'
import style from "./OtherIncomeCard.module.css"
import { Card } from 'antd'
import Icons from '../../../constants/Icons'
import { DeleteModal, EditOtherIncomeModal } from '../..'
import { useNavigate } from 'react-router-dom'

export const OtherIncomeCard = ({ title, amount, totalMember, date, dueDate, description }) => {

  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [editOtherIncome, setEditOtherIncome] = useState(false);
  const [deleteOtherIncome, setDeleteOtherIncome] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  const handleView = () => {
    navigate("/admin/financial/income")
  }

  const handleEdit = () => {
    setSelectedRecord({
      title,
      amount,
      totalMember,
      date,
      dueDate,
      description,
    });
    setEditOtherIncome(true);
  };

  return (
    <>
      <Card
        title={title}
        extra={
          <>
            <div className={style.menuIcon} onClick={toggleMenu}>{Icons.MoreSquare}</div>
          </>
        }
        className={style.card}
      >
        {menuVisible && (
          <div className={style.menu}>
            <h6 className={style.h6} onClick={handleEdit}>Edit</h6>
            <h6 className={style.h6} onClick={handleView}>View</h6>
            <h6 className={style.h6} onClick={() => setDeleteOtherIncome(true)}>Delete</h6>
          </div>
        )}
        <div className="card-grid">
          <h6>Amount Per Member</h6>
          <h6 className="fw-medium lh-base">{Icons.Rupee} {amount}</h6>
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
      </Card>

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
  )
}