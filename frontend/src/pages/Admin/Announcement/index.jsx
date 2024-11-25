import { useState } from "react";
import {
  AddAnnouncementModal,
  DeleteModal,
  EditAnnouncementModal,
  ViewAnnouncementModal,
  AnnouncementCard,
  DSButton,
  DSCard,
} from "@/components";

export const Announcement = () => {
  const [addAnnouncement, setAddAnnouncement] = useState(false);
  const [editAnnouncement, setEditAnnouncement] = useState(false);
  const [viewAnnouncement, setViewAnnouncement] = useState(false);
  const [deleteComplaint, setDeleteComplaint] = useState(false);

  return (
    <>
      <DSCard
        title="Announcement"
        headerContent={
          <>
            <DSButton
              variant={"primary"}
              onClick={() => setAddAnnouncement(true)}
            >
              Create Announcement
            </DSButton>
          </>
        }
      >
        <AnnouncementCard
          title={"Community Initiatives"}
          description={
            "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
          }
          date="01/02/2024"
          time={"10:15 AM"}
        />
      </DSCard>
      {/* Add Announcement Modal */}
      <AddAnnouncementModal
        open={addAnnouncement}
        handleCancel={() => setAddAnnouncement(false)}
        handleClose={() => setAddAnnouncement(false)}
        handleOk={() => setAddAnnouncement(false)}
      />
      {/* Edit Announcement Modal */}
      <EditAnnouncementModal
        open={editAnnouncement}
        handleCancel={() => setEditAnnouncement(false)}
        handleClose={() => setEditAnnouncement(false)}
        handleOk={() => setEditAnnouncement(false)}
      />
      {/* View Announcement Modal */}
      <ViewAnnouncementModal
        open={viewAnnouncement}
        handleCancel={() => setViewAnnouncement(false)}
        handleClose={() => setViewAnnouncement(false)}
        handleOk={() => setViewAnnouncement(false)}
      />
      {/* Remove Announcement Modal */}
      <DeleteModal
        title={"Delete Announcement?"}
        isModalOpen={deleteComplaint}
        handleClose={() => setDeleteComplaint(false)}
        handleOk={() => setDeleteComplaint(false)}
        onCancel={() => setDeleteComplaint(false)}
        children={"Are you sure you want to delate this Announcement?"}
      />
    </>
  );
};
