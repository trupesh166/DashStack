import React, { useState } from "react";
import {
  DSButton,
  DSCard,
  DSTable,
  ViewMaintenanceDetailsModal,
} from "@/components";
import { Avatar, Tag } from "antd";
import UseDecodeToken from "@/hook/UseDecodeToken";
import useMaintenanceData from "@/hook/Admin/FinancialMaintenance/Income/Maintenance/ListMaintenance";
import styles from "./Maintenance.module.css";
import Icons from "../../../../../constants/Icons";

export const Maintenance = () => {
  const { societyId } = UseDecodeToken();
  const { maintenanceData, isLoading } = useMaintenanceData(societyId);
  const [viewMaintenanceDetails, setViewMaintenanceDetails] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={record.avatar} style={{ marginRight: 8 }} />
          {text}
        </div>
      ),
    },
    {
      title: "Wing & Unit",
      key: "unitNumber",
      render: (record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar>{record.wingName}</Avatar>
          {record.unitNumber}
        </div>
      ),
      align: "center",
    },
    {
      title: "Date",
      dataIndex: "dueDate",
      key: "dueDate",
      render: (dueDate) => (
        <div>{dueDate ? new Date(dueDate).toLocaleDateString() : "--"}</div>
      ),
      align: "center",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <div style={{ color: "var(--clr-success)" }}>₹ {amount}</div>
      ),
      align: "center",
    },
    {
      title: "Penalty",
      dataIndex: "penaltyAmount",
      key: "penaltyAmount",
      render: (penaltyAmount) => (
        <Tag
          color={
            penaltyAmount !== "--" ? "var(--clr-danger)" : "var(--clr-silver)"
          }
        >
          ₹ {penaltyAmount}
        </Tag>
      ),
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (paymentStatus) => (
        <Tag color={paymentStatus === "Pending" ? "warning" : "success"}>
          {paymentStatus}
        </Tag>
      ),
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <DSButton
          type="primary"
          size="small"
          icon={Icons.EyeShow}
          className="view-btn"
          onClick={() => {
            setSelectedRecord(record);
            setViewMaintenanceDetails(true);
          }}
        />
      ),
      align: "center",
    },
  ];

  return (
    <>
      <DSCard title={"Maintenance Details"}>
        <DSTable
          dataSource={maintenanceData}
          tableColumn={columns}
          pagination={false}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
          loading={isLoading}
        />
      </DSCard>

      {/* View Maintenance Details Modal */}
      {selectedRecord && (
        <ViewMaintenanceDetailsModal
          open={viewMaintenanceDetails}
          handleCancel={() => setViewMaintenanceDetails(false)}
          handleOk={() => setViewMaintenanceDetails(false)}
          handleClose={() => setViewMaintenanceDetails(false)}
          record={selectedRecord}
        />
      )}
    </>
  );
};
