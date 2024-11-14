import React, { useState } from "react";
import clsx from "clsx";
import { Card, Divider } from "antd";
import { DSButton } from "@/components/";
import Icons from "@/constants/Icons";

export const MaintenanceCard = ({
  date,
  datePending,
  maintenance,
  penalty,
  total,
}) => {
  const [status, setStatus] = useState(false);

  return (
    <Card title="Maintenance" extra={status ? "Success" : "Pending"}>
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
      <DSButton block variant="primary" onClick={() => setStatus(!status)}>
        Pay Now
      </DSButton>
    </Card>
  );
};
