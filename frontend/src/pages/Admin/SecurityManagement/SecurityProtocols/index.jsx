import { Space } from "antd";
import {
  AddSecurityProtocolModal,
  DeleteModal,
  DSButton,
  DSCard,
  DSTable,
  EditSecurityProtocolModal,
  ViewSecurityProtocolModal,
} from "../../../../components";
import Icons from "../../../../constants/Icons";
import { useState } from "react";

const data = [
  {
    key: "1",
    title: "Physical Security",
    description: "Implementing surveillance cameras in public spaces.",
    date: "11/01/2024",
    time: "3:45 PM",
  },
  {
    key: "2",
    title: "Cybersecurity",
    description: "Securing critical infrastructure, government systems.",
    date: "12/01/2024",
    time: "6:40 AM",
  },
];

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
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

export const SecurityProtocols = () => {
  const [addSecurityProtocolModal, setAddSecurityProtocolModal] =
    useState(false);
  const [editSecurityProtocolModal, setEditSecurityProtocolModal] =
    useState(false);
  const [viewSecurityProtocolModal, setViewSecurityProtocolModal] =
    useState(false);
  const [deleteComplaint, setDeleteComplaint] = useState(false);

  return (
    <div>
      <DSCard
        title="Security Protocols"
        headerContent={
          <DSButton
            variant={"primary"}
            onClick={() => setAddSecurityProtocolModal(true)}
          >
            Create Protocol
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

      {/* Add Security Protocol Modal */}
      <AddSecurityProtocolModal
        open={addSecurityProtocolModal}
        handleCancel={() => setAddSecurityProtocolModal(false)}
        handleClose={() => setAddSecurityProtocolModal(false)}
        handleOk={() => setAddSecurityProtocolModal(false)}
      />

      {/* Edit Security Protocol Modal */}
      <EditSecurityProtocolModal
        open={editSecurityProtocolModal}
        handleCancel={() => setEditSecurityProtocolModal(false)}
        handleClose={() => setEditSecurityProtocolModal(false)}
        handleOk={() => setEditSecurityProtocolModal(false)}
      />

      {/* View Security Protocol Modal */}
      <ViewSecurityProtocolModal
        open={viewSecurityProtocolModal}
        handleCancel={() => setViewSecurityProtocolModal(false)}
        handleClose={() => setViewSecurityProtocolModal(false)}
        handleOk={() => setViewSecurityProtocolModal(false)}
      />

      {/* Remove Security Protocol Modal */}
      <DeleteModal
        title={"Delete Protocol?"}
        isModalOpen={deleteComplaint}
        handleClose={() => setDeleteComplaint(false)}
        handleOk={() => setDeleteComplaint(false)}
        onCancel={() => setDeleteComplaint(false)}
        children={"Are you sure you want to delate this Protocol?"}
      />
    </div>
  );
};
