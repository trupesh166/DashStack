import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listComplaint } from "@/axiosApi/ApiHelper";

export const useListComplaint = () => {
  const [dataListComplaint, setDataListComplaint] = useState([]);
  const { societyId } = UseDecodeToken();

  const fetchListComplaint = async () => {
    if (!societyId) return;
    try {
      let response = await listComplaint({societyId:societyId, type:"Complain"});
      response = response?.data
      setDataListComplaint(response);
    } catch (err) {
      console.error("Failed to fetch Note:", err);
    }
  };
  useEffect(() => {
    fetchListComplaint();
  }, [societyId]);

  return { dataListComplaint, fetchListComplaint };
};
