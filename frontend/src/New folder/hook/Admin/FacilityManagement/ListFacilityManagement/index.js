import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listFacility } from "@/axiosApi/ApiHelper";

export const useListFacilityManagement = () => {
  const [dataFacilityManagement, setDataFacilityManagement] = useState([]);
  const { societyId } = UseDecodeToken();

  const fetchAnnouncements = async () => {
    if (!societyId) return;
    try {
      const response = await listFacility(societyId);
      setDataFacilityManagement(response.data);
    } catch (err) {
      console.error("Failed to fetch Facility Management:", err);
    }
  };
  useEffect(() => {
    fetchAnnouncements();
  }, [societyId]);

  return { dataFacilityManagement, fetchAnnouncements };
};
