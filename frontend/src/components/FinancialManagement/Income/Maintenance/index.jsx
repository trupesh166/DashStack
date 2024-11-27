import React, { useState } from 'react'
import style from "./Maintenance.module.css"
import { DSButton, DSCard, DSTable, ViewMaintenanceDetailsModal } from '../../..'
import { Avatar, Tag } from 'antd';
import Icons from '../../../../constants/Icons';

const data = [
  {
    key: "1",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Brooklyn Simmons",
    wingName: "A",
    unitNumber: 1001,
    date: "10/02/2024",
    residentStatus: "Owner",
    phone: "94564 96321",
    amount: 1000,
    penaltyAmount: null,
    paymentStatus: "Panding",
    paymentMethod: "Cash",
  },
  {
    key: "2",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Brooklyn Simmons",
    wingName: "B",
    unitNumber: 1010,
    date: "10/02/2024",
    residentStatus: "Tenant",
    phone: "94564 96321",
    amount: 1000,
    penaltyAmount: 250,
    paymentStatus: "Done",
    paymentMethod: "Online",
  },
];

export const Maintenance = () => {

  const [viewMaintenanceDetails, setViewMaintenanceDetails] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={record.avatar} width="40" style={{ marginRight: 8 }} />
          {text}
        </div>
      ),
    },
    {
      title: "Unit Number",
      key: "unitNumber",
      render: (record) => (
        <div className='d-flex align-items-center justify-content-center gap-4'>
          <Avatar>{record.wingName}</Avatar>
          {record.unitNumber}
        </div>
      ),
      align: "center",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "residentStatus",
      key: "residentStatus",
      render: (residentStatus) => (
        <Tag
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
      render: (amount) => <div style={{ color: "var(--clr-success)" }}>{Icons.Rupee} {amount}</div>,
      align: "center",
    },
    {
      title: "penalty",
      dataIndex: "penaltyAmount",
      key: "penaltyAmount",
      render: (penaltyAmount) => (
        <Tag
          className={style.button}
          bordered={false}
          color={penaltyAmount ? "var(--clr-danger)" : "var(--clr-silver)"}
          icon={penaltyAmount ? Icons.Rupee : ""}
        >
          {penaltyAmount || "--"}
        </Tag>
      ),
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (paymentStatus) => (
        <Tag
          className={style.button}
          bordered={false}
          color={paymentStatus === "Panding" ? "warning" : "success"}
          icon={paymentStatus === "Panding" ? Icons.Timer : Icons.Verify}
        >
          {paymentStatus}
        </Tag>
      ),
      align: "center",
    },
    {
      title: "Method",
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
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <DSButton
          onClick={() => {
            setSelectedRecord(record)
            setViewMaintenanceDetails(true)
          }}
          type="primary"
          size="small"
          icon={Icons.EyeShow}
          className="clr-cult"
        />
      ),
      align: "center",
    },
  ];

  return (
    <>
      <DSCard
        title={"Maintenance  Details"}
      >
        <DSTable
          dataSource={data}
          tableColumn={columns}
          pagination={false}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
        />
      </DSCard>

      {/* View  */}
      {
        selectedRecord && (
          <ViewMaintenanceDetailsModal
            open={viewMaintenanceDetails}
            handleCancel={() => setViewMaintenanceDetails(false)}
            handleOk={() => setViewMaintenanceDetails(false)}
            handleClose={() => setViewMaintenanceDetails(false)}
            record={selectedRecord}
          />
        )
      }

    </>
  )
}