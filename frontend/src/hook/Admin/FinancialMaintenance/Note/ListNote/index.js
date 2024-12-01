import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listNotes } from "@/axiosApi/ApiHelper";

export const useListNote = () => {
  const [dataListNote, setDataListNote] = useState([]);
  const { societyId } = UseDecodeToken();

  const fetchListNote = async () => {
    if (!societyId) return;
    try {
      const response = await listNotes(societyId);
      setDataListNote(response.data);
    } catch (err) {
      console.error("Failed to fetch Note:", err);
    }
  };
  useEffect(() => {
    fetchListNote();
  }, [societyId]);

  return { dataListNote, fetchListNote };
};
