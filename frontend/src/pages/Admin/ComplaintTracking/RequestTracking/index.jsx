import { useState } from "react";
import { Avatar, Space, Tag, Tooltip } from "antd";
import {
  DSButton,
  DSCard,
  DSTable,
  CreateRequestModal,
  DeleteModal,
  ViewRequestModal,
  DSHead,
} from "@/components";
import Icons from "@/constants/Icons";

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

const RequestTracking = () => {
  const [createRequest, setCreateRequest] = useState(false);
  const [viewRequest, setViewRequest] = useState({
    open: false,
    data: null,
  });
  const [deleteRequest, setDeleteRequest] = useState({
    open: false,
    data: null,
  });

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
          priority === "High"
            ? "red"
            : priority === "Medium"
            ? "blue"
            : "green";
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
      render: (text, record) => (
        <Space size="middle">
          {/* Edit Button */}
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Edit}
            className="clr-success"
            onClick={() => setCreateRequest(true)} // Open Create Request modal
          />
          {/* View Button */}
          <DSButton
            type="primary"
            size="small"
            icon={Icons.EyeShow}
            className="clr-cult"
            onClick={
              () => setViewRequest({ open: true, data: record }) // Open View Request modal
            }
          />
          {/* Delete Button */}
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Trash}
            className="clr-danger"
            onClick={
              () => setDeleteRequest({ open: true, data: record }) // Open Delete Request modal
            }
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <DSHead
        title="Complaint Request || SMC"
        description="Request a complaint through the society management system."
        keywords="society, complaint request, submit complaint, society management"
        ogTitle="Complaint Request || SMC"
        ogDescription="Request a complaint and get timely responses through the Society Management System."
        ogUrl="https://dashstack-smc.web.app/admin/complaint/request"
        twitterCard="summary_large_image"
        twitterTitle="Complaint Request || SMC"
        twitterDescription="Submit your complaint request to your society management."
      />

      <DSCard
        title={"Request Tracking"}
        headerContent={
          <DSButton variant={"primary"} onClick={() => setCreateRequest(true)}>
            Create Request
          </DSButton>
        }
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

      {/* View Request Modal */}
      <ViewRequestModal
        open={viewRequest.open}
        requestData={viewRequest.data} // Pass selected request data
        handleCancel={() => setViewRequest({ open: false, data: null })}
        handleClose={() => setViewRequest({ open: false, data: null })}
        handleOk={() => setViewRequest({ open: false, data: null })}
      />

      {/* Remove Request Modal */}
      <DeleteModal
        title={"Delete Request?"}
        isModalOpen={deleteRequest.open}
        handleClose={() => setDeleteRequest({ open: false, data: null })}
        handleOk={() => {
          console.log("Deleting request:", deleteRequest.data);
          setDeleteRequest({ open: false, data: null });
        }}
        onCancel={() => setDeleteRequest({ open: false, data: null })}
      >
        Are you sure you want to delete this request?
      </DeleteModal>
    </>
  );
};

export default RequestTracking;
