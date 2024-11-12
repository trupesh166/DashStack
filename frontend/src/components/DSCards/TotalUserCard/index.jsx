import { Card } from 'antd'
import React from 'react'
import Icons from '@/constants/Icons'
import style from "./TotalUserCard.module.css"

const TotalUserCard = ({
  title,
  amount,
  icon
}) => {
  return (
    <Card className={style.card}>
      <div className={style.body}>
        <div className={style.detail}>
          <p>{title}</p>
          <h6>
            {Icons.Rupee}
            {amount}
          </h6>
        </div>
        <div className={style.cardIcon}>
          {icon}
        </div>
      </div>
    </Card>
  )
}

export default TotalUserCard
