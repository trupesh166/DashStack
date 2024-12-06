import { useState } from "react";
import { Space } from "antd";
import {
  AddSecurityProtocolModal,
  DeleteModal,
  DSButton,
  DSCard,
  DSTable,
  ViewSecurityProtocolModal,
} from "@/components";
import Icons from "@/constants/Icons";
import {
  useAddSecurityProtocol,
  useListSecurityProtocols,
  useDeleteSecurityProtocol,
} from "@/hook/Admin/SecurityManagement";

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

const SecurityProtocols = () => {
  const { dataListProtocols, fetchListProtocols, isLoading } = useListSecurityProtocols();
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
  } = useAddSecurityProtocol(fetchListProtocols);
  const {
    protocolDelete,
    loading,
    deleteProtocolData,
    setDeleteProtocolData,
    showDeleteModal,
    setShowDeleteModal,
  } = useDeleteSecurityProtocol(fetchListProtocols);

  const [viewProtocolData, setViewProtocolData] = useState(null);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(), // Formats to 'MM/DD/YYYY'
      time: date.toLocaleTimeString(), // Formats to 'HH:MM:SS AM/PM'
    };
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "discription",
      key: "description",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "date",
      render: (createdAt) => {
        const { date } = formatDate(createdAt);
        return date;
      },
    },
    {
      title: "Time",
      dataIndex: "createdAt",
      key: "time",
      render: (createdAt) => {
        const { time } = formatDate(createdAt);
        return time;
      },
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
            className="edit-btn"
            onClick={() => openEditModal(record)}
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.EyeShow}
            className="view-btn"
            onClick={() => setViewProtocolData(record)}
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Trash}
            className="delete-btn"
            onClick={() => {
              setDeleteProtocolData(record);
              setShowDeleteModal(true);
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <DSCard
        title="Security Protocols"
        headerContent={
          <DSButton variant={"primary"} onClick={openCreateModal}>
            Create Protocol
          </DSButton>
        }
      >
        <DSTable
          dataSource={dataListProtocols}
          tableColumn={columns}
          pagination={false}
          loading={isLoading}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
        />
      </DSCard>

      {/* Add Security Protocol Modal */}
      <AddSecurityProtocolModal
        open={isModalOpen}
        handleCancel={closeModal}
        handleClose={closeModal}
        handleOk={handleSubmit}
        protocol={formData}
        isEdit={isEdit}
        handleChange={handleChange}
        isSubmitting={isSubmitting}
      // handleCancel={() => setAddSecurityProtocolModal(false)}
      // handleClose={() => setAddSecurityProtocolModal(false)}
      // handleOk={() => setAddSecurityProtocolModal(false)}
      // protocol={selectedProtocol} // Pass the selected protocol data if editing
      />

      {/* View Security Protocol Modal */}
      <ViewSecurityProtocolModal
        // open={viewSecurityProtocolModal}
        open={!!viewProtocolData}
        protocol={viewProtocolData}
        handleCancel={() => setViewProtocolData(null)}
        handleClose={() => setViewProtocolData(null)}
      // handleCancel={() => setViewSecurityProtocolModal(false)}
      // handleClose={() => setViewSecurityProtocolModal(false)}
      // handleOk={() => setViewSecurityProtocolModal(false)}
      // protocol={selectedProtocol} // Pass the selected protocol data for viewing
      />

      {/* Remove Security Protocol Modal */}
      <DeleteModal
        title={"Delete Protocol?"}
        isModalOpen={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleOk={() => {
          protocolDelete(deleteProtocolData._id);
          setShowDeleteModal(false);
        }}
        onCancel={() => setShowDeleteModal(false)}
        children={"Are you sure you want to delete this Protocol?"}
      // protocol={selectedProtocol} // Pass the selected protocol data for deletion
      />
    </div>
  );
};
export default SecurityProtocols;
