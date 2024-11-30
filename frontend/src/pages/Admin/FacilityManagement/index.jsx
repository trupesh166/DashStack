import { useState } from "react";
import clsx from "clsx";
import {
  CreateFacilityModal,
  DSButton,
  DSCard,
  FacilityCard,
  DSHead,
} from "@/components";
import {
  useListFacilityManagement,
  useCreateFacility,
} from "@/hook/Admin/FacilityManagement";
import dayjs from "dayjs";
import styles from "./FacilityManagement.module.css";

export const FacilityManagement = () => {
  const { dataFacilityManagement, fetchAnnouncements } =
    useListFacilityManagement();

  const {
    createFacilityModal,
    setCreateFacilityModal,
    facilityName,
    description,
    scheduleDate,
    remindBefore,
    setFacilityName,
    setDescription,
    setScheduleDate,
    setEditingFacilityId,
    setRemindBefore,
    handleSubmit,
    editingFacility,
    setEditingFacility,
  } = useCreateFacility(fetchAnnouncements);

  const openCreateModal = () => {
    setEditingFacility(null);
    setFacilityName("");
    setDescription("");
    setScheduleDate(null);
    setRemindBefore(null);
    setCreateFacilityModal(true);
  };

  const openEditModal = (facility) => {
    const formattedDate = dayjs(facility.serviceDate);
    if (formattedDate.isValid()) {
      setEditingFacility(facility);
      setEditingFacilityId(facility._id);
      setFacilityName(facility.facilityName);
      setDescription(facility.description);
      setScheduleDate(formattedDate);
      setRemindBefore(facility.remindBefore);
      setCreateFacilityModal(true);
    } else {
      console.error("Invalid service date:", facility.serviceDate);
    }
  };

  const handleModalClose = () => {
    setFacilityName("");
    setDescription("");
    setScheduleDate(null);
    setRemindBefore(null);
    setCreateFacilityModal(false);
  };
  return (
    <>
      <DSHead
        title="Facility Management || SMC"
        description="Stay updated with the latest facilities in your society."
        keywords="society, facilities, updates"
        ogTitle="Facility Management || SMC"
        ogDescription="Manage and view facilities in your society."
        ogUrl="https://dashstack-smc.web.app/admin/facilities"
      />
      <DSCard
        title="Facility Management"
        className={clsx(styles.GridWrapper, "announcement-card-grid")}
        headerContent={
          <DSButton variant={"primary"} onClick={openCreateModal}>
            Create Facility
          </DSButton>
        }
      >
        {dataFacilityManagement?.map((facility) => {
          const serviceDate = new Date(facility?.serviceDate);
          const remindDays = parseInt(facility?.remindBefore.split(" ")[0], 10);
          const reminderDate = new Date(serviceDate);
          reminderDate.setDate(serviceDate.getDate() + remindDays);
          const formattedReminderDate = reminderDate.toLocaleDateString();

          return (
            <FacilityCard
              key={facility?._id}
              items={[
                {
                  label: "Edit",
                  key: "edit",
                  onClick: () => openEditModal(facility),
                },
              ]}
              title={facility?.facilityName}
              date={formattedReminderDate}
              description={facility?.description}
            />
          );
        })}
      </DSCard>

      {/* Create/ Edit Facility Modal */}
      <CreateFacilityModal
        title={editingFacility ? "Edit Facility" : "Create Facility"}
        handleContent={editingFacility ? "Edit" : "Create"}
        open={createFacilityModal}
        handleCancel={handleModalClose}
        handleClose={handleModalClose}
        handleOk={handleSubmit}
        facilityName={facilityName}
        description={description}
        scheduleDate={scheduleDate}
        remindBefore={remindBefore}
        setFacilityName={setFacilityName}
        setDescription={setDescription}
        setScheduleDate={setScheduleDate}
        setRemindBefore={setRemindBefore}
        isEditing={!!editingFacility}
      />
    </>
  );
};
