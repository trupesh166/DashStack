import { useEffect, useState } from "react";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { editImportantNumber } from "@/axiosApi/ApiHelper";

export const useEditImportantNumber = (
  editFormData,
  setEditFormData,
  fetchimportantNumber
) => {
  const [importantNumber, setImportantNumber] = useState();
  const { societyId } = UseDecodeToken();

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const edithandleSubmit = async () => {
    try {
      const response = await editImportantNumber(
        editFormData._id,
        editFormData
      );

      fetchimportantNumber();
      setImportantNumber(response.data);
    } catch (err) {
      console.error("Failed to fetch importantNumber:", err);
    }
  };
  //   useEffect(() => {
  //     fetchimportantNumber();
  //   }, [societyId]);

  return { edithandleSubmit, handleEditInputChange };
};
