import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listImportantNumber } from "@/axiosApi/ApiHelper";

export const useListImportantNumber = () => {
  const [importantNumber, setImportantNumber] = useState();
  const { societyId } = UseDecodeToken();

  const fetchimportantNumber = async () => {
    try {
      const response = await listImportantNumber(societyId);

      setImportantNumber(response.data);
    } catch (err) {
      console.error("Failed to fetch importantNumber:", err);
    }
  };
  useEffect(() => {
    fetchimportantNumber();
  }, [societyId]);

  return { importantNumber, fetchimportantNumber };
};
