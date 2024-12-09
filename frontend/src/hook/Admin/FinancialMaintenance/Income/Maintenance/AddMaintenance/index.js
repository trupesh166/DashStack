import { useState } from "react";
import { createMaintenance } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";
import UseDecodeToken from "../../../../../UseDecodeToken";
import useMaintenanceData from "../ListMaintenance";

export const useAddMaintenance = () => {
    const { societyId } = UseDecodeToken()
    const [maintenanceOpen, setMaintenanceOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);

    const handleOpen = () => setIsModalOpen(true);

    const handleClose = () => {
        setIsModalOpen(false);
    };
    const handleMaintenanceClose = () => {
        setMaintenanceOpen(false)
        setIsInvalid(false);
        setErrorMessage('');
        setPassword('');
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
        setErrorMessage("");
    };

    const handleVerifyPassword = () => {
        if (password !== '123') {
            setIsInvalid(true);
            setErrorMessage('Incorrect Password.');
        } else {
            setIsModalOpen(true)
            handleMaintenanceClose()
        }
    };

    const submitCreateMaintenance = async (addMaintenance) => {
        console.log("addMaintenance ==-==> ", addMaintenance)
        const data = {
            societyId:societyId,
            maintenanceAmount: addMaintenance.maintenanceAmount, 
            penaltyAmount: addMaintenance.penaltyAmount, 
            dueDate: addMaintenance.dueDate, 
            dueDays: addMaintenance.penaltyDays, 
        }
        try {
            const response = await createMaintenance({...data});
            console.log("create maintenance response ====> ", response)
            if (response.message === "Success") {
                toast.success("Maintenance created successfully!");
                // useMaintenanceData(societyId)
                handleClose();
                return "Success"
            } else {
                throw new Error("Failed to create maintenance.");
            }
        } catch (error) {
            toast.error(error.message || "Error creating maintenance.");
        } finally {
            // setIsSubmitting(false);
        }
    };

    return {
        isInvalid,
        isModalOpen,
        isSubmitting,
        password,
        errorMessage,
        handleOpen,
        handleClose,
        handlePasswordChange,
        submitCreateMaintenance,
        handleVerifyPassword,
        setMaintenanceOpen,
        maintenanceOpen,
        handleMaintenanceClose,
        setIsModalOpen
    };
};
