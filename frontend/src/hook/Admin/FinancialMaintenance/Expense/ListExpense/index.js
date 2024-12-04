import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listExpense, imageDetails } from "@/axiosApi/ApiHelper";

export const useListExpense = () => {
  const [dataListExpense, setDataListExpense] = useState([]);
  const { societyId } = UseDecodeToken();
  console.log("societyId ====> ", societyId)
  const fetchListExpense = async () => {
    if (!societyId) return;
    try {
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
    }
  };
  useEffect(() => {
    fetchListExpense();
  }, [societyId]);

  return { dataListExpense, fetchListExpense };
};
