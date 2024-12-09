import { createMember } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";
import UseDecodeToken from "../../../UseDecodeToken";

export const useAddResident = () => {

    const { societyId } = UseDecodeToken()

    const submitResident = async (formData, ownerInfo, familyDetails, vehicleDetails,  profileImage, aadharFront, aadharBack, addressProof, rentAgreement,) => {
        console.log("familyDetails ==== >", familyDetails)
        console.log("vehicleDetails ==== >", vehicleDetails)
        if (!societyId) ""
        const data = {
            societyId,
            ...formData,
        }
        console.log(data)   
        const isFormValid = Object.values(data).every((value) => value !== "");
        // const isFilesValid = Object.values(uploadedFiles).every((value) => value !== "");
        if (!isFormValid ) {
            toast.error("Please fill out all required fields.");
            return;
        }
        try {
            const formdata = new FormData()

            // const imageData = {
            //     profileImage: uploadedFiles.profileImage,
            //     aadharFront: uploadedFiles.aadharFront,
            //     aadharBack: uploadedFiles.aadharBack,
            //     veraBill: uploadedFiles.addressProof,
            //     agreement: uploadedFiles.rentAgreement
            // };
       
            // Object.keys(imageData).forEach(key => {
            //     if (imageData[key]) {
            //         formdata.append(key, imageData[key]);
            //     }
            // });

            Object.keys(data).forEach((key) => {
                formdata.append(key, data[key])
            })
            //   formdata.append('familyMember', JSON.stringify(familyMember));
            //   formdata.append('vehicle', JSON.stringify(vehicle));
            if (familyDetails && familyDetails.length > 0) {
                formdata.append("familyMember", JSON.stringify(familyDetails));
            }

            if (vehicleDetails && vehicleDetails.length > 0) {
                formdata.append("vehicle", JSON.stringify(vehicleDetails));
            }

            if (formData.residentStatus === "Tenant" && ownerInfo) {
                formdata.append("OwnerInfo", JSON.stringify(ownerInfo));
            }

            formdata.append("profileImage", profileImage);
            formdata.append("aadharFront", aadharFront);
            formdata.append("aadharBack", aadharBack);
            formdata.append("veraBill", addressProof);
            formdata.append("agreement", rentAgreement);

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
