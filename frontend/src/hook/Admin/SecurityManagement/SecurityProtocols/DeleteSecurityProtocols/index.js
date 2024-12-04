import { useState } from "react";
import { deleteSecurityProtocol } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";

export const useDeleteSecurityProtocol = (fetchListProtocols) => {
  const [loading, setLoading] = useState(false);
  const [deleteProtocolData, setDeleteProtocolData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const protocolDelete = async (protocolId) => {
    try {
      setLoading(true);
      const response = await deleteSecurityProtocol(protocolId);
      setLoading(false);
      if (response.message === "Success") {
        toast.success("Security Protocol deleted successfully.");
        fetchListProtocols();
      } else {
        throw new Error("Failed to delete security protocol.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error deleting security protocol:", error);
      toast.error("Failed to delete security protocol.");
    }
  };

  return {
    protocolDelete,
    loading,
    deleteProtocolData,
    setDeleteProtocolData,
    showDeleteModal,
    setShowDeleteModal,
  };
};
