import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listAnnouncement } from "@/axiosApi/ApiHelper";

export const useListAnnouncement = () => {
  const [announcements, setAnnouncements] = useState();
  const { societyId } = UseDecodeToken();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        console.log(societyId);

        const response = await listAnnouncement(societyId);
        console.log(response.data);

        setAnnouncements(response.data);
      } catch (err) {
        console.error("Failed to fetch announcements:", err);
      }
    };

    fetchAnnouncements();
  }, [societyId]);

  return { announcements };
};
