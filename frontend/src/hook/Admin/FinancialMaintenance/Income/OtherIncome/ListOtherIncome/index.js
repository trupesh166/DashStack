import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { getEvents } from "@/axiosApi/ApiHelper";

export const useListOtherIncome = () => {
  const [dataListOtherIncome, setDataListOtherIncome] = useState([]);
  const { societyId } = UseDecodeToken();

  const fetchListOtherIncome = async () => {
    if (!societyId) return;
    try {
      const response = await getEvents(societyId);
      setDataListOtherIncome(response.data);
    } catch (err) {
      console.error("Failed to fetch List Income:", err);
    }
  };
  useEffect(() => {
    fetchListOtherIncome();
  }, [societyId]);

  return { dataListOtherIncome, fetchListOtherIncome };
};
