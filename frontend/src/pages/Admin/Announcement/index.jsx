import { useState } from "react";
import {
  AddAnnouncementModal,
  DeleteModal,
  ViewAnnouncementModal,
  AnnouncementCard,
  DSButton,
  DSCard,
} from "@/components";

export const Announcement = () => {
  const [addAnnouncement, setAddAnnouncement] = useState(false);
  const [viewAnnouncement, setViewAnnouncement] = useState({
    open: false,
    data: null,
  });
  const [deleteAnnouncement, setDeleteAnnouncement] = useState({
    open: false,
    data: null,
  });

  const announcements = [
    {
      id: "1",
      title: "Community Initiatives",
      description:
        "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.",
      date: "01/02/2024",
      time: "10:15 AM",
    },
    {
      id: "2",
      title: "Water Conservation",
      description: "Encourage community participation in water-saving habits.",
      date: "05/02/2024",
      time: "11:30 AM",
    },
  ];

  const handleActionClick = (key, announcement) => {
    if (key === "edit") {
      setAddAnnouncement(true);
    } else if (key === "view") {
      setViewAnnouncement({ open: true, data: announcement });
    } else if (key === "delete") {
      setDeleteAnnouncement({ open: true, data: announcement });
    }
  };

  return (
    <>
      <DSCard
        title="Announcement"
        headerContent={
          <DSButton
            variant={"primary"}
            onClick={() => setAddAnnouncement(true)}
          >
            Create Announcement
          </DSButton>
        }
        className="announcement-card-grid"
      >
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            description={announcement.description}
            date={announcement.date}
            time={announcement.time}
            items={[
              { label: "Edit", key: "edit" },
              { label: "View", key: "view" },
              { label: "Delete", key: "delete" },
            ]}
            onAction={(key) => handleActionClick(key, announcement)}
          />
        ))}
      </DSCard>

      {/* Add Announcement Modal */}
      <AddAnnouncementModal
        open={addAnnouncement}
        handleCancel={() => setAddAnnouncement(false)}
        handleClose={() => setAddAnnouncement(false)}
        handleOk={() => setAddAnnouncement(false)}
      />

      {/* View Announcement Modal */}
      <ViewAnnouncementModal
        open={viewAnnouncement.open}
        announcementData={viewAnnouncement.data}
        handleCancel={() => setViewAnnouncement({ open: false, data: null })}
        handleClose={() => setViewAnnouncement({ open: false, data: null })}
        handleOk={() => setViewAnnouncement({ open: false, data: null })}
      />

      {/* Remove Announcement Modal */}
      <DeleteModal
        title={"Delete Announcement?"}
        isModalOpen={deleteAnnouncement.open}
        handleClose={() => setDeleteAnnouncement({ open: false, data: null })}
        handleOk={() => {
          console.log("Deleting announcement:", deleteAnnouncement.data);
          setDeleteAnnouncement({ open: false, data: null });
        }}
        onCancel={() => setDeleteAnnouncement({ open: false, data: null })}
      >
        Are you sure you want to delete this Announcement?
      </DeleteModal>
    </>
  );
};
