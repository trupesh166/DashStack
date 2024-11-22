import { Avatar, Space, Tag, Tooltip } from "antd";
import { DSButton, DSCard, DSTable } from "@/components";
import Icons from "@/constants/Icons";
import { useState } from "react";
import { CreateRequestModal, EditRequestModal, ViewRequestModal } from "../../../../components";

const columns = [
  {
    title: "Requester Name",
    dataIndex: "requesterName",
    key: "requesterName",
    render: (text, record) => (
      <Space>
        <Avatar src={record.avatar} />
        {text}
      </Space>
    ),
  },
  {
    title: "Request Name",
    dataIndex: "requestName",
    key: "requestName",
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
    title: "Request Date",
    dataIndex: "requestDate",
    key: "requestDate",
  },
  {
    title: "Unit Number",
    dataIndex: "unitNumber",
    key: "unitNumber",
    render: (text, record) => <Tag color={record.unitColor}>{text}</Tag>,
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
    requesterName: "Evelyn Harper",
    avatar: "/placeholder.svg?height=32&width=32",
    requestName: "Unethical Behavior",
    description: "Regular waste collection services.",
    requestDate: "10/02/2024",
    unitNumber: "1001",
    unitColor: "blue",
    priority: "Medium",
    status: "Pending",
  },
  {
    key: "2",
    requesterName: "Guy Hawkins",
    avatar: "/placeholder.svg?height=32&width=32",
    requestName: "Preventive Measures",
    description: "Event and recreational activities.",
    requestDate: "11/02/2024",
    unitNumber: "1002",
    unitColor: "blue",
    priority: "Low",
    status: "Solve",
  },
  {
    key: "3",
    requesterName: "Robert Fox",
    avatar: "/placeholder.svg?height=32&width=32",
    requestName: "Unethical Behavior",
    description: "Regular waste collection services.",
    requestDate: "12/02/2024",
    unitNumber: "1003",
    unitColor: "blue",
    priority: "High",
    status: "Open",
  },
];

export const RequestTracking = () => {

  const [createRequest, setCreateRequest] = useState(false)
  const [editRequest, setEditRequest] = useState(false)
  const [viewRequest, setViewRequest] = useState(false)

  return (
    <div>
      <DSCard
        title={"Request Tracking"}
        buttonContent={"Create Request"}
        button={true}
        onClick={() => setCreateRequest(true)}
      >
        <DSTable tableColumn={columns} dataSource={data} pagination={false} />
      </DSCard>

      {/* Create Request Modal */}
      <CreateRequestModal
        open={createRequest}
        handleCancel={() => setCreateRequest(false)}
        handleClose={() => setCreateRequest(false)}
        handleOk={() => setCreateRequest(false)}
      />

      {/* Edit Request Modal */}
      <EditRequestModal
        open={editRequest}
        handleCancel={() => setEditRequest(false)}
        handleClose={() => setEditRequest(false)}
        handleOk={() => setEditRequest(false)}
      />

      {/* View Request Modal */}
      <ViewRequestModal
        open={viewRequest}
        handleCancel={() => setViewRequest(false)}
        handleClose={() => setViewRequest(false)}
        handleOk={() => setViewRequest(false)}
      />
    </div>
  );
};
