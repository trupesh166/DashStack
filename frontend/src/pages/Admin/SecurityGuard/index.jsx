import { useState } from "react";
import { Avatar, Space, Tag } from "antd";
import {
  AddSecurityModal,
  DeleteModal,
  DSButton,
  DSCard,
  DSTable,
  ViewSecurityModal,
} from "@/components";
import Icons from "@/constants/Icons";

const data = [
  {
    key: "1",
    name: "Brooklyn Simmons",
    phone: "94564 96321",
    shift: "Day",
    date: "10/02/2024",
    time: "2:45 PM",
    gender: "Male",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    key: "2",
    name: "Brooklyn Simmons",
    phone: "94564 96321",
    shift: "Night",
    date: "10/02/2024",
    time: "2:45 PM",
    gender: "Female",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  // Add more data items as needed
];

export const SecurityGuard = () => {
  const [addSecurity, setAddSecurity] = useState(false);
  const [viewSecurity, setViewSecurity] = useState(false);
  const [deleteComplaint, setDeleteComplaint] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null); // Store the selected record

  const columns = [
    {
      title: "Security Guard Name",
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
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Select Shift",
      dataIndex: "shift",
      key: "shift",
      render: (shift) => (
        <Tag
          color={shift === "Day" ? "gold" : "gray"}
          icon={shift === "Day" ? "☀️" : "🌙"}
        >
          {shift}
        </Tag>
      ),
    },
    {
      title: "Shift Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Shift Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => (
        <Tag color={gender === "Male" ? "blue" : "pink"}>{gender}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Edit}
            className="clr-success"
            onClick={() => {
              setSelectedRecord(record); // Set selected record for editing
              setAddSecurity(true); // Open AddSecurityModal instead of Edit
            }}
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.EyeShow}
            className="clr-cult"
            onClick={() => {
              setSelectedRecord(record); // Set selected record for viewing
              setViewSecurity(true); // Open the View Modal
            }}
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Trash}
            className="clr-primary"
            onClick={() => {
              setSelectedRecord(record); // Set selected record for deletion
              setDeleteComplaint(true); // Open the Delete Modal
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <DSCard
        title="SecurityGuard"
        headerContent={
          <DSButton
            icon={Icons.AddSquare}
            variant={"primary"}
            onClick={() => setAddSecurity(true)}
          >
            Add Security
          </DSButton>
        }
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

      {/* Add Security Modal */}
      <AddSecurityModal
        open={addSecurity}
        handleCancel={() => setAddSecurity(false)}
        handleClose={() => setAddSecurity(false)}
        handleOk={() => setAddSecurity(false)}
        record={selectedRecord} // Pass selected record if needed
      />

      {/* View Security Modal */}
      <ViewSecurityModal
        open={viewSecurity}
        handleCancel={() => setViewSecurity(false)}
        handleClose={() => setViewSecurity(false)}
        handleOk={() => setViewSecurity(false)}
        record={selectedRecord} // Pass selected record to View Modal
      />

      {/* Remove Security Modal */}
      <DeleteModal
        title={"Delete Security?"}
        isModalOpen={deleteComplaint}
        handleClose={() => setDeleteComplaint(false)}
        handleOk={() => setDeleteComplaint(false)}
        onCancel={() => setDeleteComplaint(false)}
        children={"Are you sure you want to delete this Security?"}
        record={selectedRecord} // Pass selected record to Delete Modal
      />
    </>
  );
};
