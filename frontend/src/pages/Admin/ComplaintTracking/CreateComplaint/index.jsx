import { useState } from "react";
import { Avatar, Badge, Space, Tag, Tooltip } from "antd";
import {
  DSButton,
  DSCard,
  DSTable,
  CreateComplaintModal,
  DeleteModal,
  ViewComplaintModal,
} from "@/components";
import Icons from "@/constants/Icons";

export const ComplaintCreate = () => {
  const [createComplaint, setCreateComplaint] = useState(false);
  const [viewComplaint, setViewComplaint] = useState({
    open: false,
    data: null,
  });
  const [deleteComplaint, setDeleteComplaint] = useState({
    open: false,
    data: null,
  });

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
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Edit}
            className="clr-success"
            onClick={() => setCreateComplaint(true)} // Open Create Modal
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.EyeShow}
            className="clr-cult"
            onClick={
              () => setViewComplaint({ open: true, data: record }) // Open View Modal
            }
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Trash}
            className="clr-danger"
            onClick={
              () => setDeleteComplaint({ open: true, data: record }) // Open Delete Modal
            }
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
      priority: "High",
      status: "Solve",
    },
  ];

  return (
    <div>
      <DSCard
        title={"Create Complaint"}
        headerContent={
          <DSButton
            variant={"primary"}
            onClick={() => setCreateComplaint(true)}
          >
            Create Complaint
          </DSButton>
        }
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

      {/* View Complaint Modal */}
      <ViewComplaintModal
        open={viewComplaint.open}
        complaintData={viewComplaint.data} // Pass complaint data
        handleCancel={() => setViewComplaint({ open: false, data: null })}
        handleClose={() => setViewComplaint({ open: false, data: null })}
        handleOk={() => setViewComplaint({ open: false, data: null })}
      />

      {/* Remove Complaint Modal */}
      <DeleteModal
        title={"Delete Complaint?"}
        isModalOpen={deleteComplaint.open}
        handleClose={() => setDeleteComplaint({ open: false, data: null })}
        handleOk={() => {
          console.log("Delete this record:", deleteComplaint.data);
          setDeleteComplaint({ open: false, data: null });
        }}
        onCancel={() => setDeleteComplaint({ open: false, data: null })}
      >
        Are you sure you want to delete this complaint?
      </DeleteModal>
    </div>
  );
};
