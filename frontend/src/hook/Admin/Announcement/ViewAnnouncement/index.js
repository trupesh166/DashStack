import { useEffect, useState } from "react";
import { ViewAnnouncement } from "@/axiosApi/ApiHelper";

export const useViewAnnouncement = () => {
  const [viewAnnouncement, setViewAnnouncement] = useState({
    open: false,
    data: [],
  });

  useEffect(() => {
    const fetchAnnouncementById = async (announcementId) => {
      try {
        const response = await ViewAnnouncement(announcementId);
        console.log(response);
        setViewAnnouncement((prev) => ({ ...prev, data: response.data }));
      } catch (error) {
        console.error("Error fetching announcement by ID:", error);
      }
    };

    if (viewAnnouncement.open && viewAnnouncement.data?._id) {
      fetchAnnouncementById(viewAnnouncement.data._id);
    }
  }, [viewAnnouncement.open, viewAnnouncement.data?._id]);

  const viewAnnouncementData = viewAnnouncement.data;

  return { viewAnnouncement, viewAnnouncementData, setViewAnnouncement };
};
