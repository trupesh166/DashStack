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
      if (!societyId) return;
      setIsLoading(true);
      try {
        const response = await getUser(societyId);
        if (response.data) {
          const formattedData = await Promise.all(
            response.data.map(async (item, index) => {
              const documents = [
                { label: "Aadhar Front", url: item.aadharFront },
                { label: "Aadhar Back", url: item.aadharBack },
                { label: "Agreement", url: item.agreement },
                { label: "Vera Bill", url: item.veraBill },
              ];

              return {
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
                documents,
              };
            })
          );
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
