import { Avatar, Space, Tag } from "antd";
import { AddSecurityModal, DeleteModal, DSButton, DSCard, DSTable, EditSecurityModal, ViewSecurityModal } from "../../../components";
import Icons from "../../../constants/Icons";
import { useState } from "react";

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
      <Tag
        color={gender === "Male" ? "blue" : "pink"}
      // icon={gender === "Male" ? <ManOutlined /> : <WomanOutlined />}
      >
        {gender}
      </Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
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
        <DSButton
          type="primary"
          size="small"
          icon={Icons.Trash}
          className="clr-primary"
        />
      </Space>
    ),
  },
];

export const SecurityGuard = () => {

  const [addSecurity, setAddSecurity] = useState(false)
  const [editSecurity, setEditSecurity] = useState(false)
  const [viewSecurity, setViewSecurity] = useState(false)
  const [deleteComplaint, setDeleteComplaint] = useState(false)

  return (
    <div>
      <DSCard
        title="SecurityGuard"
        button={true}
        icon={Icons.AddSquare}
        buttonContent={"Add Security"}
        onClick={() => setAddSecurity(true)}
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
      />

      {/* Edit Security Modal */}
      <EditSecurityModal
        open={editSecurity}
        handleCancel={() => setEditSecurity(false)}
        handleClose={() => setEditSecurity(false)}
        handleOk={() => setEditSecurity(false)}
      />

      {/* View Security Modal */}
      <ViewSecurityModal
        open={viewSecurity}
        handleCancel={() => setViewSecurity(false)}
        handleClose={() => setViewSecurity(false)}
        handleOk={() => setViewSecurity(false)}
      />

      {/* Remove Security Modal */}
      <DeleteModal
        title={"Delete Security?"}
        isModalOpen={deleteComplaint}
        handleClose={() => setDeleteComplaint(false)}
        handleOk={() => setDeleteComplaint(false)}
        onCancel={() => setDeleteComplaint(false)}
        children={"Are you sure you want to delate this Security?"}
      />

    </div>
  );
};
