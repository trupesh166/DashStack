import React from 'react'
import style from "./EventMemberList.module.css"
import { DSCard, DSTable } from '../../..'
import { Avatar, Tag } from 'antd';
import Icons from '../../../../constants/Icons';

export const EventMemberList = () => {

  const data = [
    {
      key: "1",
      wingName: "A",
      unitNumber: 1001,
      paymentDate: "10/02/2024",
      residentStatus: "Owner",
      phone: "94564 96321",
      amount: 1000,
      paymentMethod: "Cash",
    },
    {
      key: "2",
      wingName: "B",
      unitNumber: 1010,
      paymentDate: "10/02/2024",
      residentStatus: "Tenant",
      phone: "94564 96321",
      amount: 1000,
      paymentMethod: "Online",
    },
  ];

  const columns = [
    {
      title: "Unit Number",
      key: "unitNumber",
      render: (record) => (
        <div className="d-flex align-items-center justify-content-center gap-4">
          <Avatar style={{ color: "var(--clr-cult)", backgroundColor: "var(--clr-foundation)" }}>{record.wingName}</Avatar>
          {record.unitNumber}
        </div>
      ),
      align: "center",
    },
    {
      title: "Payment Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      align: "center",
    },
    {
      title: "Tnant/Owner Status",
      dataIndex: "residentStatus",
      key: "residentStatus",
      render: (residentStatus) => (
        <Tag
          block
          className={style.button}
          bordered={false}
          color={residentStatus === "Owner" ? "blue" : "pink"}
          icon={residentStatus === "Owner" ? Icons.TagUser : Icons.User}
        >
          {residentStatus}
        </Tag>
      ),
      align: "center",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <div style={{ color: "var(--clr-success)" }}>
          {Icons.Rupee} {amount}
        </div>
      ),
      align: "center",
    },
    {
      title: "Payment",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      render: (paymentMethod) => (
        <Tag
          className={style.button}
          bordered={false}
          color={paymentMethod === "Online" ? "blue" : "default"}
          icon={paymentMethod === "Online" ? Icons.Wallet : Icons.Money}
        >
          {paymentMethod}
        </Tag>
      ),
      align: "center",
    },
  ];

  return (
    <DSCard title={"Ganesh Chaturthi Participator Member List"}>
      <DSTable
        dataSource={data}
        tableColumn={columns}
        pagination={false}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
      />
    </DSCard>
  )
}