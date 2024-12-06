import { useState, useEffect } from "react";
import { listMaintenance } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";

const useMaintenanceData = (societyId) => {
  const [maintenanceData, setMaintenanceData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await listMaintenance(societyId);
        if (response?.data) {
          const formattedData = response.data.map((item, index) => {
            const {
              memberId,
              maintenanceId,
              amount,
              penaltyAmount,
              paymentStatus,
              paymentMethod,
            } = item;
            const { userId, wing, unit } = memberId || {};
            return {
              key: item._id || index,
              fullName: userId?.fullName || "-",
              avatar: memberId?.profileImage || "",
              unitNumber: unit?.unitNumber || "-",
              wingName: wing?.wingName || "-",
              residentStatus: memberId?.residentStatus || "Tenant",
              phoneNumber: userId?.phoneNumber || "--",
              amount: amount || 0,
              penaltyAmount: penaltyAmount || "--",
              paymentStatus: paymentStatus || "Pending",
              paymentMethod: paymentMethod || "Pending",
              email: userId?.email || "--",
              dueDate: maintenanceId?.dueDate || "--",
              maintenanceAmount: maintenanceId?.maintenanceAmount || 0,
            };
          });
          setMaintenanceData(formattedData);
        } else {
          toast.error("Failed to fetch maintenance details.");
        }
      } catch (error) {
        toast.error("Error fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    if (societyId) {
      fetchData();
    }
  }, [societyId]);

  return { maintenanceData, isLoading };
};

export default useMaintenanceData;
