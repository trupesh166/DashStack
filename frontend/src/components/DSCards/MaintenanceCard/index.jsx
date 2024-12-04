import React, { useState } from "react";
import { Card, Divider } from "antd";
import { DSButton } from "@/components/";
import Icons from "@/constants/Icons";
import { PaymentMethodModal } from "../../DSModalComponents/ModalTemplate/PaymentPortalModal/PaymentMethodModal";
import { PaymentMethodDetailModal } from "../../DSModalComponents/ModalTemplate/PaymentPortalModal/PaymentMethodModa";

export const MaintenanceCard = ({
  date,
  datePending,
  maintenance,
  penalty,
  total,
}) => {
  const [status, setStatus] = useState(false);
  const [paymentMethodModal, setPaymentMethodModal] = useState(false)
  const [paymentMethodDetailModal, setPaymentMethodDetailModal] = useState(false)

  return (
    <>
      <Card title="Maintenance" extra={<h6 style={{ padding: "5px 12px", color: "var(--clr-white)", backgroundColor: "var(--clr-periwinkle)", borderRadius: "58px" }} >{status ? "Success" : "Pending"}</h6>}>
        <div className="card-grid">
          <h6>Bill Date</h6>
          <h6>{date}</h6>
        </div>
        <div className="card-grid">
          <h6>Pending Date</h6>
          <h6>{datePending}</h6>
        </div>
        <Divider />
        <div className="card-grid">
          <h6>Maintenance Amount</h6>
          <h6>{maintenance}</h6>
        </div>
        <div className="card-grid">
          <h6>Maintenance Penalty Amount</h6>
          <h6>{penalty}</h6>
        </div>
        <Divider />
        <div className="card-grid">
          <h6 className="fw-semibold">Grand Total</h6>
          <h6 className="clr-success lh-1 fw-semibold">
            {Icons.Rupee}
            {total}
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
  );
};
