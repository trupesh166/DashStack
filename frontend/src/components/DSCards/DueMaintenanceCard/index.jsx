import { Card, Divider } from 'antd'
import React, { useState } from 'react'
import { DSButton } from '../..'
import Icons from '../../../constants/Icons'

export const DueMaintenanceCard = ({
  dueDate,
  maintenanceAmount,
  penaltyAmount
}) => {

  const [status, setStatus] = useState(false);

  return (
    <>
      <Card title="Due Maintanance" extra={<h6 style={{ padding: "5px 12px", color: "var(--clr-white)", backgroundColor: "var(--clr-periwinkle)", borderRadius: "58px" }} >{status ? "Success" : "Pending"}</h6>}>
        <div className="card-grid">
          <h6>Date</h6>
          <h6>{dueDate}</h6>
        </div>
        <Divider />
        <div className="card-grid">
          <h6>Amount</h6>
          <h6>{maintenanceAmount}</h6>
        </div>
        <div className="card-grid">
          <h6>Due Maintenance Amount</h6>
          <h6>{penaltyAmount}</h6>
        </div>
        <DSButton block variant="primary" onClick={() => setStatus(!status)}>
          Pay Now
        </DSButton>
      </Card>
    </>
  )
}