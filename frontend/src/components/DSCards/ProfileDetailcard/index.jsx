import React from 'react'
import style from "./ProfileDetailcard.module.css"
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import { Card } from 'antd'
import clsx from 'clsx'

const ProfileDetailcard = ({
  name = "afseawef",
  number = "12345465",
  work = "xtdfhbfdh"
}) => {
  return (
    <Card className={style.card}>

      <div className={style.body}>
        <div className={style.detail}>
          <p>Name : <span>{name}</span></p>
          <p>Ph Number : <span>{number}</span></p>
          <p>Work : <span>{work}</span></p>
        </div>
        <div className={style.actions}>
          <DeleteFilled className={clsx(style.delateButton, style.btn)} />
          <EditFilled className={clsx(style.editButton, style.btn)} />
        </div>
      </div>

    </Card>
  )
}

export default ProfileDetailcard
