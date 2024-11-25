import React, { useState } from 'react'
import style from "./ImportantNumbersCard.module.css"
import Icons from "@/constants/Icons";
import { Card } from 'antd'
import { AddImportantNumberModal, DeleteModal, DSButton, EditImportantNumberModal } from '../..';
import clsx from 'clsx';

export const ImportantNumbersCard = () => {

  const ImportantNumber = [
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh"
    },
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh"
    },
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh"
    },
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh"
    },
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh"
    },
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh"
    },
  ]

  const [addImportantNumber, setAddImportantNumber] = useState(false)
  const [editImportantNumber, setEditImportantNumber] = useState(false)
  const [deleteComplaint, setDeleteComplaint] = useState(false)

  return (
    <div>
      <Card size='small' className={style.card}>

        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='fw-semibold'>Important Numbers</h3>
          <DSButton
            size={"small"}
            variant={"primary"}
            icon={Icons.AddSquare}
            onClick={() => setAddImportantNumber(true)}
          >
            Add
          </DSButton>
        </div>

        <div className={clsx(style.body, "mt-5")}>
          {
            ImportantNumber.map((item) => (
              <div className={style.importantNumber}>
                <div className={style.detail}>
                  <p>Name : <span>{item.fullName}</span></p>
                  <p>Ph Number : <span>{item.phoneNumber}</span></p>
                  <p>Work : <span>{item.work}</span></p>
                </div>
                <div className={style.actions}>
                  <DSButton icon={Icons.Trash} className={style.trashButton} size={"small"} />
                  <DSButton icon={Icons.Edit} className={style.editButton} size={"small"} />
                </div>
              </div>
            ))
          }
        </div>

      </Card>

      {/* Add Important Number Modal */}
      <AddImportantNumberModal
        open={addImportantNumber}
        handleCancel={() => setAddImportantNumber(false)}
        handleClose={() => setAddImportantNumber(false)}
        handleOk={() => setAddImportantNumber(false)}
      />

      {/* Edit Important Number Modal */}
      <EditImportantNumberModal
        open={editImportantNumber}
        handleCancel={() => setEditImportantNumber(false)}
        handleClose={() => setEditImportantNumber(false)}
        handleOk={() => setEditImportantNumber(false)}
      />

      {/* Remove Important Number Modal */}
      <DeleteModal
        title={"Delete Number?"}
        isModalOpen={deleteComplaint}
        handleClose={() => setDeleteComplaint(false)}
        handleOk={() => setDeleteComplaint(false)}
        onCancel={() => setDeleteComplaint(false)}
        children={"Are you sure you want to delate this number?"}
      />

    </div>
  )
}
