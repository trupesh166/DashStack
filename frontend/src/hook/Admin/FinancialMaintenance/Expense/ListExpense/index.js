import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listExpense, imageDetails } from "@/axiosApi/ApiHelper";

export const useListExpense = () => {
  const { societyId } = UseDecodeToken();
  const [dataListExpense, setDataListExpense] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("societyId ====> ", societyId)
  const fetchListExpense = async () => {
    if (!societyId) return;
    try {
      setIsLoading(true)
      let response = await listExpense(societyId);
      response = response?.data?.data
      
      const imageUrls = response.reduce((acc, item) => {
        if (item.billDocument) {
          acc[item._id] = item.billDocument;
        }
        return acc;
      }, {});
      const imageData = await imageDetails(imageUrls)

      const mergedData = response.map(item => ({
        ...item,
        billDocument: imageData.data[item._id] || null
      }));
      
      setDataListExpense(mergedData);
    } catch (err) {
      console.error("Failed to fetch Note:", err);
    }finally{
      setIsLoading(false)
    }
  };
  useEffect(() => {
    fetchListExpense();
  }, [societyId]);

  return { dataListExpense, fetchListExpense, isLoading };
};
