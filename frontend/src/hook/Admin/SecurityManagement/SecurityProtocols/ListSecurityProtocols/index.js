import { useEffect, useState } from "react";
import { listSecurityProtocol } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "../../../../UseDecodeToken";

export const useListSecurityProtocols = () => {
  const { societyId } = UseDecodeToken()
  const [dataListProtocols, setDataListProtocols] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchListProtocols = async () => {
    if (!societyId) return
    try {
      setIsLoading(true)
      const response = await listSecurityProtocol(societyId);
      setDataListProtocols(response?.data || []);
    } catch (err) {
      console.error("Failed to fetch Security Protocols:", err);
    } finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchListProtocols();
  }, [societyId]);

  return { dataListProtocols, fetchListProtocols, isLoading };
};
