import React from 'react'
import style from "./ImportantNumbersCard.module.css"
import Icons from "@/constants/Icons";
import { Card } from 'antd'
import { DSButton } from '../..';
import clsx from 'clsx';

const ImportantNumbersCard = () => {

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

  return (
    <Card size='small' className={style.card}>

      <div className='d-flex justify-content-between align-items-center'>
        <h3 className='fw-semibold'>Important Numbers</h3>
        <DSButton
          size={"small"}
          variant={"primary"}
          icon={Icons.AddSquare}>Add</DSButton>
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
  )
}

export default ImportantNumbersCard
