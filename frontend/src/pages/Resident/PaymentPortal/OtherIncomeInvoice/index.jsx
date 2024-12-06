import React from 'react'
import { DSButton, DSCard, DueEventPayment } from '../../../../components'
import { useNavigate } from 'react-router-dom'

export const OtherIncomeInvoice = () => {

  const navigate = useNavigate()

  const handalNavigate = () => {
    navigate("/resident/payment/other-income-invoice/view-invoices")
  }

  return (
    <>
      <DSCard
        title={"Due Event Payment"}
        className="announcement-card-grid"
        headerContent={
          <DSButton variant={"primary"} onClick={handalNavigate}>View Invoice</DSButton>
        }
      >
        <DueEventPayment
          title={"Navratri"}
          dueDate={"11/01/2024"}
          amount={"1000"}
        />
        <DueEventPayment
          title={"Navratri"}
          dueDate={"11/01/2024"}
          amount={"1000"}
        />
        <DueEventPayment
          title={"Navratri"}
          dueDate={"11/01/2024"}
          amount={"1000"}
        />
        <DueEventPayment
          title={"Navratri"}
          dueDate={"11/01/2024"}
          amount={"1000"}
        />
      </DSCard>
    </>
  )
}