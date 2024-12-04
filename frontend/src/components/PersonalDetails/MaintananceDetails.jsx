import React from 'react'
import { DSButton, DSCard, DueMaintenanceCard, MaintenanceCard } from '..'
import { Col, Flex, Row } from 'antd'
import styles from "./PersonalDetails.module.css"
import Icons from '../../constants/Icons'
import { useNavigate } from 'react-router-dom'

export const MaintananceDetails = () => {

  const navigate = useNavigate()

  const handalNavigate = () => {
    navigate("/resident/payment/maintenance-invoices/view-invoices")
  }

  return (
    <>
      {/* Maintenance Details */}
      <DSCard
        rootClass={"mb-4"}
        title="Show Maintenance Details"
        headerContent={
          <Flex gap="middle">
            <div className={styles.maintenanceAmount}>
              <div className={styles.maintenanceBox}></div>
              <h5 style={{ fontWeight: "500" }}>Maintenance Amount</h5>
              <h2 style={{ color: "var(--clr-success)", fontWeight: "bold" }}>
                {Icons.Rupee} 0
              </h2>
            </div>
            <div className={styles.penaltyAmount}>
              <div className={styles.penaltyBox}></div>
              <h5 style={{ fontWeight: "500" }}>Penalty Amount</h5>
              <h2 style={{ color: "var(--clr-danger)", fontWeight: "bold" }}>
                {Icons.Rupee} 0
              </h2>
            </div>
          </Flex>
        }
      />

      {/* Pending Maintanance Card */}
      <DSCard
        rootClass={"mb-4"}
        title="Pending Maintanance"
        className="announcement-card-grid"
        headerContent={
          location.pathname === "/resident/payment/maintenance-invoices" && <DSButton variant={"primary"} onClick={handalNavigate}>View Invoice</DSButton>
        }
      >
        <MaintenanceCard
          date="11/01/2024"
          datePending="11/01/2024"
          maintenance="1000"
          penalty="250"
          total="1250"
        />
        <MaintenanceCard
          date="11/01/2024"
          datePending="11/01/2024"
          maintenance="1000"
          penalty="250"
          total="1250"
        />
        <MaintenanceCard
          date="11/01/2024"
          datePending="11/01/2024"
          maintenance="1000"
          penalty="250"
          total="1250"
        />
        <MaintenanceCard
          date="11/01/2024"
          datePending="11/01/2024"
          maintenance="1000"
          penalty="250"
          total="1250"
        />
      </DSCard>

      {/* Due Maintanance Card */}
      <DSCard
        rootClass={"mb-4"}
        title="Due Maintanance"
        className="announcement-card-grid"
      >
        <DueMaintenanceCard
          dueDate="11/01/2024"
          maintenanceAmount={"1000"}
          penaltyAmount={"250"}
        />
        <DueMaintenanceCard
          dueDate="11/01/2024"
          maintenanceAmount={"1000"}
          penaltyAmount={"250"}
        />
      </DSCard>
    </>
  )
}