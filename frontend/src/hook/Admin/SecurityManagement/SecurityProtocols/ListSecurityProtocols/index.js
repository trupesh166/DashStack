import { useEffect, useState } from "react";
import { listSecurityProtocol } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "../../../../UseDecodeToken";

export const useListSecurityProtocols = () => {
  const { societyId } = UseDecodeToken()
  const [dataListProtocols, setDataListProtocols] = useState([]);

  const fetchListProtocols = async () => {
    if(!societyId) return
    try {
      const response = await listSecurityProtocol(societyId);
      setDataListProtocols(response?.data || []);
    } catch (err) {
      console.error("Failed to fetch Security Protocols:", err);
    }
  };

  useEffect(() => {
    fetchListProtocols();
  }, [societyId]);

  return { dataListProtocols, fetchListProtocols };
};
