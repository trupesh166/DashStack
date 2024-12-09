import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listGuard, imageDetails } from "@/axiosApi/ApiHelper";

export const useListSecurity = () => {
  const { societyId } = UseDecodeToken();
  const [dataListSecurity, setDataListSecurity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchListSecurity = async () => {
    if (!societyId) return;
    try {
      setIsLoading(true);
      let response = await listGuard(societyId);
      console.log(response)
      response = response?.data;

    //   const imageUrls = response.reduce((acc, item) => {
    //     if (item.photo) {
    //       acc[item._id] = item.photo;
    //     }
    //     return acc;
    //   }, {});

    //   const imageData = await imageDetails(imageUrls);

    //   const mergedData = response.map((item) => ({
    //     ...item,
    //     photo: imageData.data[item._id] || null,
    //   }));

      setDataListSecurity(response);
    } catch (err) {
      console.error("Failed to fetch Security:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchListSecurity();
  }, [societyId]);

  return { dataListSecurity, fetchListSecurity, isLoading };
};
