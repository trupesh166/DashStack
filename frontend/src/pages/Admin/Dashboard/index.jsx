import { Col, Row } from "antd";
import { Chart, ComplaintCard, ImportantNumbersCard, PendingMaintenancesCard, TotalUserCard, UpcomingActivityCard } from "../../../components";
import { useState } from "react";

export const Dashboard = () => {

  return (
    <div>
      <Row className="mb-4">
        <Col span={24}><TotalUserCard /></Col>
      </Row>
      <Row gutter={18} className="mb-4">
        <Col span={12}>
          <Chart />
        </Col>
        <Col span={6}>
          <ImportantNumbersCard />
        </Col>
        <Col span={6}>
          <PendingMaintenancesCard />
        </Col>
      </Row>
      <Row gutter={18}>
        <Col span={18}>
          <ComplaintCard />
        </Col>
        <Col span={6}>
          <UpcomingActivityCard />
        </Col>
      </Row>

    </div>
  );
};
