import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listExpense } from "@/axiosApi/ApiHelper";

export const useListExpense = () => {
  const [dataListExpense, setDataListExpense] = useState([]);
  const { societyId } = UseDecodeToken();

  const fetchListExpense = async () => {
    if (!societyId) return;
    try {
      const response = await listExpense(societyId);
      setDataListExpense(response.data);
    } catch (err) {
      console.error("Failed to fetch Note:", err);
    }
  };
  useEffect(() => {
    fetchListExpense();
  }, [societyId]);

  return { dataListExpense, fetchListExpense };
};
