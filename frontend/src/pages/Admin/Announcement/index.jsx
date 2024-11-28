import { useState, useEffect } from "react";
import {
  AddAnnouncementModal,
  DeleteModal,
  ViewAnnouncementModal,
  AnnouncementCard,
  DSButton,
  DSCard,
} from "@/components";
import { deleteAnnouncement } from "@/axiosApi/ApiHelper";
import {
  useAddAnnouncement,
  useViewAnnouncement,
  useListAnnouncement,
} from "@/hook/Admin/Announcement/";
import toast from "react-hot-toast";

export const Announcement = () => {
  const { addAnnouncement, setAddAnnouncement } = useAddAnnouncement();
  const { viewAnnouncement, setViewAnnouncement, viewAnnouncementData } =
    useViewAnnouncement();
  const { announcements } = useListAnnouncement();

  const [deleteAnnouncementState, setDeleteAnnouncementState] = useState({
    open: false,
    data: null,
  });
  const [editAnnouncementData, setEditAnnouncementData] = useState(null);
  const handleActionClick = async (key, announcement) => {
    if (key === "edit") {
      setEditAnnouncementData(announcement);
      setAddAnnouncement(true);
    } else if (key === "view") {
      setViewAnnouncement({
        open: true,
        data: announcement,
      });
    } else if (key === "delete") {
      setDeleteAnnouncementState({ open: true, data: announcement });
    }
  };

  // const handleDeleteAnnouncement = async () => {
  //   const announcementId = deleteAnnouncementState.data?._id;

  //   if (!announcementId) {
  //     toast.error("Unable to find the announcement to delete.");
  //     return;
  //   }

  //   try {
  //     await deleteAnnouncement(announcementId);
  //     toast.success("Announcement deleted successfully.");
  //     setAnnouncements((prev) =>
  //       prev.filter((announcement) => announcement._id !== announcementId)
  //     );
  //     setDeleteAnnouncementState({ open: false, data: null });
  //   } catch (error) {
  //     console.error("Failed to delete announcement:", error);
  //     toast.error("Failed to delete announcement.");
  //   }
  // };

  return (
    <>
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
            time={announcement?.announcementTime}
            items={[
              { label: "Edit", key: "edit" },
              { label: "View", key: "view" },
              { label: "Delete", key: "delete" },
            ]}
            onAction={(key) => handleActionClick(key, announcement)}
          />
        ))}
      </DSCard>

      {/* Add/Edit Announcement Modal */}
      <AddAnnouncementModal
        open={addAnnouncement}
        handleCancel={() => setAddAnnouncement(false)}
        handleClose={() => setAddAnnouncement(false)}
        handleOk={() => setAddAnnouncement(false)}
      />

      {/* View Announcement Modal */}
      <ViewAnnouncementModal
        ModalTitle={"View Security Protocol"}
        open={viewAnnouncement.open}
        announcementData={viewAnnouncement.data}
        handleCancel={() => setViewAnnouncement({ open: false, data: null })}
        handleClose={() => setViewAnnouncement({ open: false, data: null })}
        handleOk={() => setViewAnnouncement({ open: false, data: null })}
        title={viewAnnouncementData?.announcementTitle}
        Description={viewAnnouncementData?.announcementDescription}
        date={new Date(
          viewAnnouncementData?.announcementDate
        ).toLocaleDateString()}
        time={viewAnnouncementData?.announcementTime}
      />

      {/* Remove Announcement Modal */}
      {/* <DeleteModal
        title="Delete Announcement?"
        isModalOpen={deleteAnnouncementState.open}
        handleClose={() =>
          setDeleteAnnouncementState({ open: false, data: null })
        }
        handleOk={handleDeleteAnnouncement}
        onCancel={() => setDeleteAnnouncementState({ open: false, data: null })}
      >
        Are you sure you want to delete this Announcement?
      </DeleteModal> */}
    </>
  );
};
