import { Card } from 'antd';
import React, { useState } from 'react'
import { DSButton } from '../..';
import { PaymentMethodDetailModal } from '../../DSModalComponents/ModalTemplate/PaymentPortalModal/PaymentMethodModa';
import { PaymentMethodModal } from '../../DSModalComponents/ModalTemplate/PaymentPortalModal/PaymentMethodModal';

export const DueEventPayment = ({
  title,
  dueDate,
  amount,
}) => {

  const [status, setStatus] = useState(false);
  const [paymentMethodModal, setPaymentMethodModal] = useState(false)
  const [paymentMethodDetailModal, setPaymentMethodDetailModal] = useState(false)

  return (
    <>
      <Card title="Due Event Payment" extra={<h6 style={{ padding: "5px 12px", color: "var(--clr-white)", backgroundColor: "var(--clr-periwinkle)", borderRadius: "58px" }} >{status ? "Success" : "Pending"}</h6>}>
        <div className="card-grid">
          <h6>Event Name</h6>
          <h6>{title}</h6>
        </div>
        <div className="card-grid">
          <h6>Event Due Date</h6>
          <h6>{dueDate}</h6>
        </div>
        <div className="card-grid">
          <h6 className="fw-semibold">Amount</h6>
          <h6 className="clr-danger lh-1 fw-semibold">
            {amount}.00
          </h6>
        </div>
        <DSButton
          block
          variant="primary"
          onClick={() => {
            setPaymentMethodModal(true)
            setStatus(!status)
          }}
        >
          Pay Now
        </DSButton>
      </Card>
      {/* Payment Method Modal */}
      {
        paymentMethodModal && (
          <PaymentMethodModal
            open={paymentMethodModal}
            handleCancel={() => setPaymentMethodModal(false)}
            handleClose={() => setPaymentMethodModal(false)}
            handleOk={() => {
              setPaymentMethodModal(false)
              setPaymentMethodDetailModal(true)
            }}
          />
        )
      }

      {/* Payment Detail Page */}
      {
        paymentMethodDetailModal && (
          <PaymentMethodDetailModal
            open={paymentMethodDetailModal}
            handleCancel={() => setPaymentMethodDetailModal(false)}
            handleClose={() => setPaymentMethodDetailModal(false)}
            handleOk={() => setPaymentMethodDetailModal(false)}
          />
        )
      }
    </>
  )
}