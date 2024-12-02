import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listImportantNumber } from "@/axiosApi/ApiHelper";

export const useListImportantNumber = () => {
  const [importantNumber, setImportantNumber] = useState();
  const { societyId } = UseDecodeToken();

  const fetchimportantNumber = async () => {
    try {

      if(societyId){
        const response = await listImportantNumber(societyId);
        console.log(response.data);
  
        setImportantNumber(response.data);
      }

    } catch (err) {
      console.error("Failed to fetch importantNumber:", err);
    }
  };
  useEffect(() => {
    fetchimportantNumber();
  }, [societyId]);

  return { importantNumber, fetchimportantNumber };
};
