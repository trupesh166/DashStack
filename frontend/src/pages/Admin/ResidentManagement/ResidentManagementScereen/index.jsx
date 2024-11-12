import React, { useState } from 'react';
import style from "./ResidentManagement.module.css";
import { PlusSquareOutlined, EditOutlined, EyeOutlined, ShopFilled, CalendarFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { DSButton, DSTable, DSModal, DSCheckbox } from '../../../../components';

const dataSource = [
  {
    key: '1',
    firstname: 'Mike',
    unitnumber: ["A", 1001],
    unitstatus: "Occupied",
    residentstatus: "tenant" || "--",
    phonenumber: "01234 56789" || "--",
    member: 1 || "-",
    vehicle: 2 || "-",
    action: "" || "--"
  },
  {
    key: '2',
    firstname: 'Joy',
    unitnumber: ["A", 1011],
    unitstatus: "Vacate",
    residentstatus: "Owner" || "--",
    phonenumber: "01234 56789" || "--",
    member: 5 || "-",
    vehicle: 2 || "-",
    action: "" || "--"
  },
];

const tableColumn = [
  {
    title: <div className={style.tableHeader}>Full Name</div>,
    dataIndex: 'firstname',
    key: 'firstname',
    render: (text) => <div className={style.tableData}>
      <img src="" alt="profile photo" />
      {text}
    </div>,
  },
  {
    title: <div className={style.tableHeader}>Unit Number</div>,
    dataIndex: 'unitnumber',
    key: 'unitnumber',
    render: (text) => <div className={style.tableData}>{text}</div>,
  },
  {
    title: <div className={style.tableHeader}>Unit Status</div>,
    dataIndex: 'unitstatus',
    key: 'unitstatus',
    render: (text) => (
      <div className={style.tableData}>
        {
          text === "Occupied"
            ? <Button style={{ backgroundColor: "var(--clr-Pearls)", color: "var(--clr-cyan)" }}><ShopFilled />{text}</Button>
            : <Button style={{ backgroundColor: "var(--clr-snow)", color: "var(--clr-violet)" }}><CalendarFilled />{text}</Button>
        }
      </div>),
  },
  {
    title: <div className={style.tableHeader}>Resident Status</div>,
    dataIndex: 'residentstatus',
    key: 'residentstatus',
    render: (text) => <div className={style.tableData}>{text}</div>,
  },
  {
    title: <div className={style.tableHeader}>Phone Number</div>,
    dataIndex: 'phonenumber',
    key: 'phonenumber',
    render: (text) => <div className={style.tableData}>{text}</div>,
  },
  {
    title: <div className={style.tableHeader}>Member</div>,
    dataIndex: 'member',
    key: 'member',
    render: (text) => <div className={style.tableData}>{text}</div>,
  },
  {
    title: <div className={style.tableHeader}>Vehicle</div>,
    dataIndex: 'vehicle',
    key: 'vehicle',
    render: (text) => <div className={style.tableData}>{text}</div>,
  },
  {
    title: <div className={style.tableHeader}>Action</div>,
    dataIndex: 'action',
    key: 'action',
    render: (_) => (
      <div style={{ display: "flex", gap: "20px" }}>
        <Button
          icon={<EditOutlined />}
          className={style.successButton}
          style={{ width: "24px", height: "24px" }}
        />
        <Button
          icon={<EyeOutlined />}
          className={style.cultButton}
          style={{ width: "24px", height: "24px" }}
        />
      </div>
    ),
  },
];

const ResidentManagementScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("Occupied");

  const handleButtonClick = (value) => {
    console.log(value)
    setActiveButton(value);
  };

  return (
    <div className={style.residentManagementScreen}>
      <div className={style.rmHeader}>
        <h5>Resident Tenant and Owner Details</h5>
        <DSButton variant={"primary"} icon={<PlusSquareOutlined />} onClick={() => setIsModalOpen(true)}>
          Add New Resident details
        </DSButton>
        <DSModal
          title={"Residence Status"}
          open={isModalOpen}
          closeIcon
          handleOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          handleClose={() => setIsModalOpen(false)}
          IsFooter
          handleContent={"Save"}
          disabledButton={false}
        >
          <div className={style.cardButton}>
            <DSButton
              className={activeButton === 'Occupied' ? style.activeButton : style.inactiveButton}
              onClick={() => handleButtonClick('Occupied')}
            >
              Occupied
            </DSButton>
            <DSButton
              className={activeButton === 'Vacate' ? style.activeButton : style.inactiveButton}
              onClick={() => handleButtonClick('Vacate')}
            >
              Vacate
            </DSButton>
          </div>
          <div>
            <DSCheckbox>By submitting, you agree to select Occupied</DSCheckbox>
          </div>
        </DSModal>
      </div>
      <div className={style.rmTable}>
        <DSTable tableColumn={tableColumn} tableDataSource={dataSource} />
      </div>
    </div>
  );
};

export default ResidentManagementScreen;
