import React from "react";
import { Avatar, Tag } from "antd";
import { DSCard, DSTable } from "../../../../components";

const data = [
  {
    key: "1",
    name: "Evelyn Harper",
    phone: "97852 12369",
    date: "10/01/2024",
    unit: "A",
    unitNumber: "1001",
    time: "3:45 PM",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    key: "2",
    name: "Wade Warren",
    phone: "97852 25893",
    date: "11/01/2024",
    unit: "B",
    unitNumber: "1002",
    time: "2:45 AM",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const columns = [
  {
    title: "Visitor Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={record.avatar} width={40} style={{ marginRight: 8 }} />
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

export const VisitorLogs = () => {
  return (
    <DSCard title="Visitor Logs">
      <DSTable
        dataSource={data}
        tableColumn={columns}
        pagination={false}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
      />
    </DSCard>
  );
};
