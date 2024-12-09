import { useState } from "react";
import {
  useAddAnnouncement,
  useListAnnouncement,
  useDeleteAnnouncement,
  useEditAnnouncement
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
import dayjs from "dayjs";

const Announcement = () => {
  const { submitAnnouncement } = useAddAnnouncement();
  const { handleUpdateAnnouncement } = useEditAnnouncement();
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
  const [editAnnouncementId, setEditAnnouncementId] = useState(null);

  const handleActionClick = (key, announcement) => {
    if (key === "edit") {
      setEditAnnouncementId(announcement._id)
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
    let result
    if(editAnnouncementData){
      result = await handleUpdateAnnouncement(formData, refetchAnnouncements, editAnnouncementId);
    }else{
      result = await submitAnnouncement(formData, refetchAnnouncements);
    }
    if (result.success) {
      setAddAnnouncement(false);
      setEditAnnouncementData(null);
    }
  };

  const handleDeleteAnnouncement = async () => {
    if (deleteAnnouncementData) {
      const result = await announcementDelete(deleteAnnouncementData._id);
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
        title="Expanse Note || SMS"
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
        {announcements?.map((announcement) => {
          const formattedDate = dayjs(announcement?.announcementDate);
          const formattedTime = dayjs(announcement?.announcementTime);

          return (
            <AnnouncementCard
              key={announcement?._id}
              _id={announcement?._id}
              title={announcement?.announcementTitle}
              description={announcement?.announcementDescription}
              date={
                formattedDate.isValid()
                  ? formattedDate.format("YYYY-MM-DD")
                  : "Invalid Date"
              }
              time={
                formattedTime.isValid()
                  ? formattedTime.format("YYYY-MM-DD")
                  : "Invalid Time"
              }
              items={[
                { label: "Edit", key: "edit" },
                { label: "View", key: "view" },
                { label: "Delete", key: "delete" },
              ]}
              onAction={(key) => handleActionClick(key, announcement)}
            />
          );
        })}

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
            date={
              dayjs(viewAnnouncement?.data?.announcementDate).isValid()
                ? dayjs(viewAnnouncement?.data?.announcementDate).format(
                    "YYYY-MM-DD"
                  )
                : "Invalid Date"
            }
            time={
              dayjs(viewAnnouncement?.data?.announcementTime).isValid()
                ? dayjs(viewAnnouncement?.data?.announcementTime).format(
                    "YYYY-MM-DD"
                  )
                : "Invalid Time"
            }
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

export default Announcement;
