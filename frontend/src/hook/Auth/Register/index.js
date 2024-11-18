import { useEffect, useState } from "react";
import { axiosApi } from "@/axiosApi/";

export const useRegister = () => {
  const [societyList, setSocietyList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSocietyList = async () => {
      try {
        const response = await axiosApi.get("/society/list");
        setSocietyList(response.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch society list:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSocietyList();
  }, []);

  const societyNames = societyList?.data?.map((society) => ({
    value: society._id,
    label: society.societyName,
  }));

  return { societyNames, loading, error, isModalOpen, setIsModalOpen };
};
