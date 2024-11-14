import React, { useState } from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import { DSButton, DSModal, DSCheckbox, DSCard } from "@/components";
import style from "./ResidentManagement.module.css";
import { DSTable } from "../../../../components";
import { Avatar, Space, Tag } from "antd";
import Icons from "../../../../constants/Icons";

const columns = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    render: (text, record) => (
      <Space>
        <Avatar src={record.avatar} width="40" style={{ marginRight: 8 }} />
        {text}
      </Space>
    ),
  },
  {
    title: "Unit Number",
    dataIndex: "unitNumber",
    key: "unitNumber",
    render: (text, record) => <Tag color={record.unitColor}>{text}</Tag>,
  },
  {
    title: "Unit Status",
    dataIndex: "unitStatus",
    key: "unitStatus",
    render: (status) => (
      <Tag color={status === "Occupied" ? "green" : "purple"}>{status}</Tag>
    ),
  },
  {
    title: "Resident Status",
    dataIndex: "residentStatus",
    key: "residentStatus",
    render: (status) => (
      <Tag color={status === "Tenant" ? "pink" : "blue"}>{status}</Tag>
    ),
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Member",
    dataIndex: "member",
    key: "member",
  },
  {
    title: "Vehicle",
    dataIndex: "vehicle",
    key: "vehicle",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) =>
      record.unitStatus !== "Vacate" ? (
        <Space size="middle">
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Edit}
            className="clr-success"
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.EyeShow}
            className="clr-cult"
          />
        </Space>
      ) : <Tag>--</Tag>,
  },
];

const data = [
  {
    key: "1",
    fullName: "Evelyn Harper",
    avatar: "https://example.com/avatar1.jpg",
    unitNumber: "1001",
    unitColor: "blue",
    unitStatus: "Occupied",
    residentStatus: "Tenant",
    phoneNumber: "97587 85828",
    member: "1",
    vehicle: "2",
  },
  {
    key: "2",
    fullName: "-",
    avatar: "",
    unitNumber: "1002",
    unitColor: "blue",
    unitStatus: "Vacate",
    residentStatus: "--",
    phoneNumber: "--",
    member: "-",
    vehicle: "-",
  },
];

const ResidentManagementScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("Occupied");

  const handleButtonClick = (value) => {
    console.log(value);
    setActiveButton(value);
  };

  return (
    <>
      <DSCard
        title="Resident Tenant and Owner Details"
        className={style.residentManagementScreen}
        icon={<PlusSquareOutlined />}
        onClick={() => setIsModalOpen(true)}
        button
        buttonContent="Add New Resident details"
      >
        <div className={style.rmTable}>
          <DSTable tableColumn={columns} dataSource={data} pagination={false} />
        </div>
      </DSCard>
      <DSModal
        title={"Residence Status"}
        open={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        handleClose={() => setIsModalOpen(false)}
        IsFooter
        handleContent={"Save"}
        disabledButton={false}
      >
        <div className={style.cardButton}>
          <DSButton
            className={
              activeButton === "Occupied"
                ? style.activeButton
                : style.inactiveButton
            }
            onClick={() => handleButtonClick("Occupied")}
          >
            Occupied
          </DSButton>
          <DSButton
            className={
              activeButton === "Vacate"
                ? style.activeButton
                : style.inactiveButton
            }
            onClick={() => handleButtonClick("Vacate")}
          >
            Vacate
          </DSButton>
        </div>
        <div>
          <DSCheckbox>By submitting, you agree to select Occupied</DSCheckbox>
        </div>
      </DSModal>
    </>
  );
};

export default ResidentManagementScreen;
