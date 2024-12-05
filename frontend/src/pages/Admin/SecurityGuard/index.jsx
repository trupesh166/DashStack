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
import { useAddSecurity, useListSecurity, useDeleteSecurity } from "@/hook/Admin/SecurityGuard";

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
  const { dataListSecurity, fetchListSecurity, isLoading } = useListSecurity();
  const { 
    openCreateModal, 
    openEditModal, 
    closeModal, 
    formData, 
    handleSubmit, 
    isModalOpen, 
    isSubmitting, 
    isEdit,
    handleInputChange,
    handleFileChange,
    handleFileRemove
  } = useAddSecurity(fetchListSecurity);
  const { 
    securityDelete, 
    loading: deleteLoading, 
    setShowDeleteModal, 
    showDeleteModal 
  } = useDeleteSecurity(fetchListSecurity);

  const [addSecurity, setAddSecurity] = useState(false);
  const [viewSecurity, setViewSecurity] = useState(false);
  const [deleteComplaint, setDeleteComplaint] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null); // Store the selected record

  const tableData = dataListSecurity.map((item) => ({
    _id: item._id,
    name: item.userId?.fullName || "N/A",
    email: item.userId?.email || "N/A",
    phone: item.userId?.phoneNumber || "N/A",
    shift: item.shift,
    date: new Date(item.joiningDate).toLocaleDateString(), // Format date
    time: item.shiftTime,
    gender: item.gender,
    avatar: item.profileImage || "https://via.placeholder.com/150", 
    bill: item.adharCardImage || "https://via.placeholder.com/150",
  }));

  const handleDelete = async () => {
    if (selectedRecord && selectedRecord._id) {
      const result = await securityDelete(selectedRecord._id);
      if (result.success) {
        setShowDeleteModal(false);
      }
    }
  };

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
          color={shift === "Day Shift" ? "gold" : "gray"}
          icon={shift === "Day Shift" ? "☀️" : "🌙"}
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
            className="edit-btn"
            onClick={() => {
              openEditModal(record);
              setSelectedRecord(record);
            }}
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.EyeShow}
            className="view-btn"
            onClick={() => {
              setSelectedRecord(record);
              setViewSecurity(true);
            }}
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Trash}
            className="delete-btn"
            onClick={() => {
              setSelectedRecord(record);
              setShowDeleteModal(true);
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
            onClick={openCreateModal}
          >
            Add Security
          </DSButton>
        }
      >
        <DSTable
          dataSource={tableData}
          tableColumn={columns}
          pagination={false}
          loading={isLoading}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
        />
      </DSCard>

      {/* Add Security Modal */}
      <AddSecurityModal
        open={isModalOpen}
        handleCancel={closeModal}
        handleClose={closeModal}
        handleOk={handleSubmit}
        record={selectedRecord}
        isSubmitting={isSubmitting}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        isEdit={isEdit}
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
        isModalOpen={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleOk={handleDelete}
        onCancel={() => setShowDeleteModal(false)}
        children={"Are you sure you want to delete this Security?"}
        record={selectedRecord} // Pass selected record to Delete Modal
        loading={deleteLoading}
      />
    </>
  );
};
