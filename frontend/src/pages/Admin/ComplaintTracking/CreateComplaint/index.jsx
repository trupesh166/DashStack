import { useState } from "react";
import { Avatar, Badge, Space, Tag, Tooltip } from "antd";
import {
  DSButton,
  DSCard,
  DSTable,
  CreateComplaintModal,
  DeleteModal,
  ViewComplaintModal,
  DSHead,
} from "@/components";
import Icons from "@/constants/Icons";
import { useAddComplaint, useListComplaint, useDeleteComplaint } from "@/hook/Admin/ComplaintTracking";

const ComplaintCreate = () => {

  const { dataListComplaint, fetchListComplaint, isLoading } = useListComplaint("Complain")
  const {
    formData,
    handleChange,
    isSubmitting,
    isModalOpen,
    openCreateModal,
    openEditModal,
    closeModal,
    handleSubmit,
    isEdit,
  } = useAddComplaint(fetchListComplaint)
  const {
    complaintDelete,
    deleteComplaintData,
    setDeleteComplaintData,
    showDeleteModal,
    setShowDeleteModal,
  } = useDeleteComplaint(fetchListComplaint);


  const [viewComplaint, setViewComplaint] = useState({
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
      dataIndex: "discription",
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
      render: (text, record) => <Badge color={"blue"}>{record.unitId.unitNumber}</Badge>,
    },
    {
      title: "Priority",
      key: "priority",
      dataIndex: "priorityStatus",
      render: (priority) => {
        let color =
          priority === "High"
            ? "red"
            : priority === "Medium"
              ? "blue"
              : "green";
        return (
          <Tag color={color} key={priority}>
            {priority?.toUpperCase()}
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
            onClick={() => openEditModal(record)}
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.EyeShow}
            className="clr-cult"
            onClick={
              () => setViewComplaint({ open: true, data: record })
            }
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Trash}
            className="clr-danger"
            onClick={() => {
              setShowDeleteModal(true)
              setDeleteComplaintData(record)
            }}
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

  const handleDeleteComplaint = async () => {
    if (deleteComplaintData) {
      const result = await complaintDelete(deleteComplaintData._id);
      if (result.success) {
        setShowDeleteModal(false);
        setDeleteComplaintData(null);
        await refetchAnnouncements();
      } else {
        console.log("Error deleting announcement");
      }
    }
  };

  console.log("dataListComplaint ======> ", dataListComplaint)

  return (
    <>
      <DSHead
        title="Create Complaint || SMC"
        description="Create and submit your complaint to the society management system."
        keywords="society, complaints, create complaint, society management"
        ogTitle="Create Complaint || SMC"
        ogDescription="Submit your complaints and get timely responses through the Society Management System."
        ogUrl="https://dashstack-smc.web.app/admin/complaint/create"
        twitterCard="summary_large_image"
        twitterTitle="Create Complaint || SMC"
        twitterDescription="Easily create and submit complaints for your society management."
      />

      <DSCard
        title={"Create Complaint"}
        headerContent={
          <DSButton
            variant={"primary"}
            onClick={openCreateModal}
          >
            Create Complaint
          </DSButton>
        }
      >
        <DSTable tableColumn={columns} dataSource={dataListComplaint} pagination={false} loading={isLoading} />
      </DSCard>

      {/* Create Complaint Modal */}
      <CreateComplaintModal
        open={isModalOpen}
        handleCancel={closeModal}
        handleClose={closeModal}
        handleOk={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        isSubmitting={isSubmitting}
        isEdit={isEdit}
      />

      {/* View Complaint Modal */}
      <ViewComplaintModal
        open={viewComplaint.open}
        complaintData={viewComplaint.data}
        handleCancel={() => setViewComplaint({ open: false, data: null })}
        handleClose={() => setViewComplaint({ open: false, data: null })}
        handleOk={() => setViewComplaint({ open: false, data: null })}
      />

      {/* Remove Complaint Modal */}
      <DeleteModal
        title={"Delete Complaint?"}
        isModalOpen={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleOk={handleDeleteComplaint}
        onCancel={() => setShowDeleteModal(false)}
      >
        Are you sure you want to delete this complaint?
      </DeleteModal>
    </>
  );
};

export default ComplaintCreate;
