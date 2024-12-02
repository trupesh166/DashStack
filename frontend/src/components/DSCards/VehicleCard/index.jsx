import { Card } from 'antd'
import React from 'react'

export const VehicleCard = ({
  vehicleType,
  vehicleName,
  vehicleNumber
}) => {
  return (
    <Card title={vehicleType}>
      <div className={"card-grid"}>
        <h6>Vehicle Name</h6>
        <h6 className="fw-medium lh-base">{vehicleName}</h6>
      </div>
      <div className={"card-grid"}>
        <h6>Vehicle Number</h6>
        <h6 className="fw-medium lh-base">{vehicleNumber}</h6>
      </div>
    </Card>
  )
}