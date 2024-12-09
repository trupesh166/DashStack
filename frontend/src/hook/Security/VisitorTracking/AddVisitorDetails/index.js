import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createVisitor, listWing, listUnit } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "@/hook/UseDecodeToken";

export const useAddVisitorDetails = () => {
  const { societyId } = UseDecodeToken();
  const [wing, setWing] = useState([]);
  const [unit, setUnit] = useState([]);
  const [selectWingId, setSelectWingId] = useState("");

  useEffect(() => {
    console.log(societyId);
    const fetchWings = async () => {
      try {
        if (societyId) {
          const result = await listWing(societyId);
          console.log(result);
          if (result?.data) {
            const wings = result.data.map((value) => ({
              value: value._id,
              label: value.wingName,
            }));
            setWing(wings);
          }
        }
      } catch (error) {
        console.error("Error fetching wings:", error);
      }
    };
    fetchWings();
  }, [societyId]);

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        if (selectWingId) {
          const result = await listUnit(selectWingId);
          console.log(result);
          if (result?.data) {
            const units = result.data.map((value) => ({
              value: value._id,
              label: value.unitNumber,
            }));
            setUnit(units);
          }
        }
      } catch (error) {
        console.error("Error fetching units:", error);
      }
    };
    fetchUnits();
  }, [selectWingId]);

  const submitVisitorDetails = async (formData) => {
    try {
      await createVisitor(formData);
      toast.success("Visitor Detail Added successfully.");
    } catch (err) {
      toast.error("Failed to submit Visitor Detail.");
      console.error("Error submitting visitor details:", err);
    }
  };

  return { submitVisitorDetails, wing, unit, setSelectWingId, societyId };
};
