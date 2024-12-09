import { useState, useEffect } from "react";
import { getUser } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";
import UseDecodeToken from "@/hook/UseDecodeToken";

const useResidentData = () => {
  const { societyId } = UseDecodeToken();
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getUser(societyId);
        if (response.data) {
          const formattedData = response.data.map((item, index) => ({
            key: item._id || index,
            fullName: item.userId?.fullName || "-",
            avatar: item.profileImage || "",
            unitNumber: item.unit?.unitNumber || "-",
            wing: item.wing?.wingName || "-",
            unitStatus: item.unitStatus || "Vacate",
            residentStatus: item.residentStatus || "Tenant",
            phoneNumber: item.userId?.phoneNumber || "--",
            member: item.familyMember?.length || "-",
            vehicle: item.vehicle?.length || "-",
            email: item.userId?.email || "--",
            age: item.age || "-",
            gender: item.gender || "-",
            familyMembers: item.familyMember || [],
            vehicles: item.vehicle || [],
            aadharFront: item.aadharFront || "",
            aadharBack: item.aadharBack || "",
            veraBill: item.veraBill || "",
            agreement: item.agreement || "",
          }));
          setTableData(formattedData);
        } else {
          toast.error("Failed to fetch data.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [societyId]);

  return { tableData, isLoading };
};

export default useResidentData;
