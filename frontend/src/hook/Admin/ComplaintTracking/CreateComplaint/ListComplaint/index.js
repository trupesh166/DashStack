import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listComplaint } from "@/axiosApi/ApiHelper";

export const useListComplaint = (type) => {
  const [dataListComplaint, setDataListComplaint] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { societyId } = UseDecodeToken();

  const fetchListComplaint = async () => {
    if (!societyId) return;
    try {
      setIsLoading(true)
      let response = await listComplaint({societyId:societyId, type:type});
      console.log("response ====> ", response)
      response = response?.data
      setDataListComplaint(response);
    } catch (err) {
      console.error("Failed to fetch Note:", err);
    } finally {
      setIsLoading(false)
    }
  };
  useEffect(() => {
    fetchListComplaint();
  }, [societyId]);

  return { dataListComplaint, fetchListComplaint, isLoading };
};
