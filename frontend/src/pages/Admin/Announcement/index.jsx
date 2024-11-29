import { useState } from "react";
import {
  useAddAnnouncement,
  useListAnnouncement,
  useDeleteAnnouncement,
} from "@/hook/Admin/Announcement";
import {
  AddAnnouncementModal,
  AnnouncementCard,
  DSButton,
  DSCard,
  ViewAnnouncementModal,
  DeleteModal,
  DSHead,
} from "@/components";

export const Announcement = () => {
  const { submitAnnouncement } = useAddAnnouncement();
  const { announcements, refetchAnnouncements } = useListAnnouncement();
  const {
    announcementDelete,
    deleteAnnouncementData,
    setDeleteAnnouncementData,
    showDeleteModal,
    setShowDeleteModal,
  } = useDeleteAnnouncement();

  const [viewAnnouncement, setViewAnnouncement] = useState({
    open: false,
    data: [],
  });

  const [addAnnouncement, setAddAnnouncement] = useState(false);
  const [editAnnouncementData, setEditAnnouncementData] = useState(null);

  const handleActionClick = (key, announcement) => {
    if (key === "edit") {
      setEditAnnouncementData(announcement);
      setAddAnnouncement(true);
    } else if (key === "view") {
      setViewAnnouncement({ open: true, data: announcement });
    } else if (key === "delete") {
      setDeleteAnnouncementData(announcement);
      setShowDeleteModal(true);
    }
  };

  const handleModalSubmit = async (formData) => {
    const result = await submitAnnouncement(formData, refetchAnnouncements);
    if (result.success) {
      setAddAnnouncement(false);
      setEditAnnouncementData(null);
    }
  };

  const handleDeleteAnnouncement = async () => {
    if (deleteAnnouncementData) {
      const result = await announcementDelete(deleteAnnouncementData._id); // API Call to delete
      if (result.success) {
        setShowDeleteModal(false);
        setDeleteAnnouncementData(null);
        await refetchAnnouncements();
      } else {
        console.log("Error deleting announcement");
      }
    }
  };

  return (
    <>
      <DSHead
        title="Expanse Note || SMC"
        description="Manage your financial notes and announcements effectively with Expanse Note."
        keywords="financial, notes, society, announcements, updates"
        ogTitle="Expanse Note || SMC"
        ogDescription="Stay organized and keep track of your society's financial notes with Expanse Note."
        ogUrl="http://localhost:5173/admin/financial/note"
        twitterCard="summary_large_image"
        twitterTitle="Expanse Note || SMC"
        twitterDescription="Catch up with the latest financial updates and notes from your society."
      />

      <DSCard
        title="Announcement"
        headerContent={
          <DSButton variant="primary" onClick={() => setAddAnnouncement(true)}>
            Create Announcement
          </DSButton>
        }
        className="announcement-card-grid"
      >
        {announcements?.map((announcement) => (
          <AnnouncementCard
            key={announcement?._id}
            title={announcement?.announcementTitle}
            description={announcement?.announcementDescription}
            date={new Date(announcement?.announcementDate).toLocaleDateString()}
            time={new Date(announcement?.announcementTime).toLocaleDateString(
              "en-CA"
            )}
            items={[
              { label: "Edit", key: "edit" },
              { label: "View", key: "view" },
              { label: "Delete", key: "delete" },
            ]}
            onAction={(key) => handleActionClick(key, announcement)}
          />
        ))}

        {/* Add/Edit Modal */}
        {addAnnouncement && (
          <AddAnnouncementModal
            open={addAnnouncement}
            handleCancel={() => setAddAnnouncement(false)}
            handleClose={() => setAddAnnouncement(false)}
            handleOk={(formData) => handleModalSubmit(formData)}
            editData={editAnnouncementData}
          />
        )}

        {/* View Modal */}
        {viewAnnouncement.open && (
          <ViewAnnouncementModal
            open={viewAnnouncement.open}
            announcementData={viewAnnouncement.data}
            handleCancel={() =>
              setViewAnnouncement({ open: false, data: null })
            }
            handleClose={() => setViewAnnouncement({ open: false, data: null })}
            ModalTitle={"View Announcement"}
            title={viewAnnouncement?.data?.announcementTitle}
            Description={viewAnnouncement?.data?.announcementDescription}
            date={new Date(
              viewAnnouncement?.data?.announcementDate
            ).toLocaleDateString()}
            time={new Date(
              viewAnnouncement?.data?.announcementTime
            ).toLocaleDateString("en-CA")}
          />
        )}

        {/* Delete Modal */}
        {showDeleteModal && (
          <DeleteModal
            Title={"Delete Announcement?"}
            isModalOpen={showDeleteModal}
            handleClose={() => setShowDeleteModal(false)}
            handleOk={handleDeleteAnnouncement}
            onCancel={() => setShowDeleteModal(false)}
          >
            Are you sure you want to delete this announcement?
          </DeleteModal>
        )}
      </DSCard>
    </>
  );
};
