import { Avatar, Badge, Space, Tag, Tooltip } from "antd";
import { DSButton, DSCard, DSTable } from "@/components";
import Icons from "@/constants/Icons";
import { useState } from "react";
import {
  CreateComplaintModal,
  DeleteModal,
  EditComplaintModal,
  ViewComplaintModal,
} from "../../../../components";

const columns = [
  {
    title: "Complainer Name",
    dataIndex: "complainerName",
    key: "complainerName",
    render: (text, record) => (
      <Space>
        <Avatar src={record.avatar} />
        {text}
      </Space>
    ),
  },
  {
    title: "Complaint Name",
    dataIndex: "complaintName",
    key: "complaintName",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    ellipsis: {
      showTitle: false,
    },
    render: (description) => (
      <Tooltip placement="topLeft" title={description}>
        {description}
      </Tooltip>
    ),
  },
  {
    title: "Unit Number",
    dataIndex: "unitNumber",
    key: "unitNumber",
    render: (text, record) => <Badge>{text}</Badge>,
  },
  {
    title: "Priority",
    key: "priority",
    dataIndex: "priority",
    render: (priority) => {
      let color =
        priority === "High" ? "red" : priority === "Medium" ? "blue" : "green";
      return (
        <Tag color={color} key={priority}>
          {priority.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      let color =
        status === "Pending" ? "gold" : status === "Open" ? "cyan" : "lime";
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
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
          className="clr-danger"
        />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    complainerName: "Evelyn Harper",
    avatar: "/placeholder.svg?height=32&width=32",
    complaintName: "Unethical Behavior",
    description: "Providing false information or deliberately.",
    unitNumber: "1001",
    unitColor: "blue",
    priority: "Medium",
    status: "Pending",
  },
  {
    key: "2",
    complainerName: "Esther Howard",
    avatar: "/placeholder.svg?height=32&width=32",
    complaintName: "Preventive Measures",
    description: "Regular waste collection services.",
    unitNumber: "1002",
    unitColor: "blue",
    priority: "Low",
    status: "Open",
  },
  {
    key: "3",
    complainerName: "Jenny Wilson",
    avatar: "/placeholder.svg?height=32&width=32",
    complaintName: "Unethical Behavior",
    description: "Designated garages for residents and guests.",
    unitNumber: "1003",
    unitColor: "blue",
    priority: "High",
    status: "Solve",
  },
];

export const ComplaintCreate = () => {
  const [createComplaint, setCreateComplaint] = useState(false);
  const [editComplaint, setEditComplaint] = useState(false);
  const [viewComplaint, setViewComplaint] = useState(false);
  const [deleteComplaint, setDeleteComplaint] = useState(false);

  return (
    <div>
      <DSCard
        title={"Create Complaint"}
        buttonContent={"Create Complaint"}
        button={true}
        onClick={() => setCreateComplaint(true)}
      >
        <DSTable tableColumn={columns} dataSource={data} pagination={false} />
      </DSCard>

      {/* Create Complaint Modal */}
      <CreateComplaintModal
        open={createComplaint}
        handleCancel={() => setCreateComplaint(false)}
        handleClose={() => setCreateComplaint(false)}
        handleOk={() => setCreateComplaint(false)}
      />

      {/* Edit Complaint Modal */}
      <EditComplaintModal
        open={editComplaint}
        handleCancel={() => setEditComplaint(false)}
        handleClose={() => setEditComplaint(false)}
        handleOk={() => setEditComplaint(false)}
      />

      {/* View Complaint Modal */}
      <ViewComplaintModal
        open={viewComplaint}
        handleCancel={() => setViewComplaint(false)}
        handleClose={() => setViewComplaint(false)}
        handleOk={() => setViewComplaint(false)}
      />

      {/* Remove Complaint Modal */}
      <DeleteModal
        title={"Delete Complain?"}
        isModalOpen={deleteComplaint}
        handleClose={() => setDeleteComplaint(false)}
        handleOk={() => setDeleteComplaint(false)}
        onCancel={() => setDeleteComplaint(false)}
        children={"Are you sure you want to delate this complain?"}
      />
    </div>
  );
};
