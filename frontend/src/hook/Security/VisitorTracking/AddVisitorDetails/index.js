import toast from "react-hot-toast";
import { createVisitor } from "../../../../axiosApi/ApiHelper"

export const useAddVisitorDetails = () => {
  const submitVisitorDetails = async (formData, onSuccess) => {
    try {
      await createVisitor(formData);
      toast.success("Visitor Detail Added successfully.")
      if (onSuccess) {
        onSuccess()
      }
      return { success: true }
    }
    catch (err) {
      toast.error("Failed to submit Visitor Detail.")
      return { success: false, err }
    }
  }

  return { submitVisitorDetails };

}