import { useState, useEffect } from "react";
import { listVisitor } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";

export const useVisitorLogs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchVisitorLogs = async () => {
      setIsLoading(true);
      try {
        // Retrieve society ID
        const societyId = "672de776054707c95880ec63";

        // Fetch data using API helper
        console.log(societyId);

        const response = await listVisitor(societyId);
        console.log(response);

        if (response.message === "Success" && response.data) {
          const formattedData = response.data.map((item, index) => ({
            key: item._id || index,
            name: item.visitorName || "-",
            avatar: item.avatar || "",
            phone: item.phone || "-",
            date: item.date || "-",
            time: item.time || "-",
            unit: item.unitName || "-",
            unitNumber: item.unitNumber || "-",
          }));
          setData(formattedData);
        } else {
          toast.info("No visitor logs available.");
          setData([]);
        }
      } catch (error) {
        toast.error("Failed to fetch visitor logs.");
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitorLogs();
  }, []);

  return { data, isLoading };
};