import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listAnnouncement } from "@/axiosApi/ApiHelper";

export const useListAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const { societyId } = UseDecodeToken();

  const fetchAnnouncements = async () => {
    if (!societyId) return;
    try {
      const response = await listAnnouncement(societyId);
      setAnnouncements(response.data);
    } catch (err) {
      console.error("Failed to fetch announcements:", err);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, [societyId]);

  return { announcements, refetchAnnouncements: fetchAnnouncements };
};
