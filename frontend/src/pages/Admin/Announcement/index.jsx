import { useState } from "react";
import { AddAnnouncementModal, EditAnnouncementModal, ViewAnnouncementModal } from "../../../components";

export const Announcement = () => {

  const [addAnnouncement, setAddAnnouncement] = useState(false)
  const [editAnnouncement, setEditAnnouncement] = useState(false)
  const [viewAnnouncement, setViewAnnouncement] = useState(false)

  return <div>
    Announcement

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

  </div>;
};
