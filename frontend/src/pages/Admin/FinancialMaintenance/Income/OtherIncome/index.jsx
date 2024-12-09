import { useState } from "react";
import { Flex } from "antd";
import {
  CreateOtherIncomeModal,
  DSButton,
  DSCard,
  OtherIncomeCard,
} from "@/components";
import {
  useListOtherIncome,
  useAddOtherIncome,
  useDeleteOtherIncome,
} from "@/hook/Admin/FinancialMaintenance";
import { DeleteModal } from "../../../../../components";

export const OtherIncome = () => {
  const { dataListOtherIncome, fetchListOtherIncome } = useListOtherIncome();
  const {
    isModalOpen,
    isEdit,
    isSubmitting,
    formData,
    openCreateModal,
    openEditModal,
    closeModal,
    handleInputChange,
    handleSubmit,
  } = useAddOtherIncome(fetchListOtherIncome);
  const {
    isDeleting,
    isModalOpen: isDeleteModalOpen,
    selectedRecord,
    openDeleteModal,
    closeDeleteModal,
    handleDelete,
  } = useDeleteOtherIncome(fetchListOtherIncome);

  const handleActionClick = (key, otherIncome) => {
    if (key === "edit") {
      // setEditAnnouncementData(announcement);
      // setAddAnnouncement(true);
      openEditModal(otherIncome);
    } else if (key === "view") {
      // setViewOtherIncome({ open: true, data: announcement });
    } else if (key === "delete") {
      openDeleteModal(otherIncome);
    }
  };

  return (
    <>
      <DSCard
        title={"Other Income"}
        headerContent={
          <DSButton variant={"primary"} onClick={openCreateModal}>
            Create Other Income
          </DSButton>
        }
        className={"announcement-card-grid"}
      >
        {dataListOtherIncome?.map((content) => (
          <OtherIncomeCard
            key={content._id}
            title={content.title}
            amount={content.amount}
            totalMember={content.MemberCount}
            date={new Date(content?.date).toLocaleDateString()}
            dueDate={new Date(content?.dueDate).toLocaleDateString()}
            description={content.description}
            items={[
              { label: "Edit", key: "edit" },
              { label: "Delete", key: "delete" },
            ]}
            onAction={(key) => handleActionClick(key, content)}
          />
        ))}
      </DSCard>

      {/* Create Other Income Modal */}
      <CreateOtherIncomeModal
        open={isModalOpen}
        handleCancel={closeModal}
        handleClose={closeModal}
        handleOk={handleSubmit}
        formData={formData}
        isEdit={isEdit}
        isSubmitting={isSubmitting}
        handleInputChange={handleInputChange}
      />

      <DeleteModal
        Title={`Delete ${selectedRecord?.title}`}
        children={"Are you sure you want to delate this?"}
        isModalOpen={isDeleteModalOpen}
        handleClose={closeDeleteModal}
        onCancel={closeDeleteModal}
        handleOk={handleDelete}
        confirmLoading={isDeleting}
      />
    </>
  );
};
