import { createMember } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";
import UseDecodeToken from "../../../UseDecodeToken";

export const useAddResident = () => {

    const { societyId } = UseDecodeToken()

    const submitResident = async (formData, ownerInfo, uploadedFiles) => {
        console.log("uploadedFiles ==== >", uploadedFiles)
        if (!societyId) ""
        const data = {
            societyId,
            ...formData,
        }
        console.log(data)
        const isFormValid = Object.values(data).every((value) => value !== "");
        const isFilesValid = Object.values(uploadedFiles).every((value) => value !== "");
        if (!isFormValid || !isFilesValid) {
            toast.error("Please fill out all required fields.");
            return;
        }
        try {
            const formdata = new FormData()

            const imageData = {
                profileImage: uploadedFiles.profileImage,
                aadharFront: uploadedFiles.aadharFront,
                aadharBack: uploadedFiles.aadharBack,
                veraBill: uploadedFiles.addressProof,
                agreement: uploadedFiles.rentAgreement
            };
            
            Object.keys(imageData).forEach(key => {
                if (imageData[key]) {
                    formdata.append(key, imageData[key]);
                }
            });

            Object.keys(data).forEach((key) => {
                formdata.append(key, data[key])
            })
            //   formdata.append('familyMember', JSON.stringify(familyMember));
            //   formdata.append('vehicle', JSON.stringify(vehicle));
            if (formData.residentStatus === "Tenant" && ownerInfo) {
                formdata.append("OwnerInfo", JSON.stringify(ownerInfo));
            }

            await createMember(formdata);
            toast.success("Announcement Added successfully.");
            if (onSuccess) {
                onSuccess();
            }
            return { success: true };
        } catch (error) {
            toast.error("Failed to submit announcement.");
            return { success: false, error };
        }
    };

    return {
        submitResident,
    };
};
