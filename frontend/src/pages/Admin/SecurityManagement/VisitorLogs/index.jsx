import React from "react";
import { Avatar, Tag, Spin } from "antd";
import { DSCard, DSTable } from "@/components";
import { useVisitorLogs } from "@/hook/Admin/SecurityManagement/VisitorLogs";

export const VisitorLogs = () => {
  const { data, isLoading } = useVisitorLogs();

  const columns = [
    {
      title: "Visitor Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={record.avatar} size={40} style={{ marginRight: 8 }} />
          {text}
        </div>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Unit Number",
      key: "unit",
      render: (text, record) => (
        <span>
          <Tag color="blue" style={{ marginRight: 8 }}>
            {record.unit}
          </Tag>
          {record.unitNumber}
        </span>
      ),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
  ];

  return (
    <DSCard title="Visitor Logs">
      <DSTable
        dataSource={data}
        tableColumn={columns}
        pagination={false}
        loading={isLoading}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
      />
    </DSCard>
  );
};
