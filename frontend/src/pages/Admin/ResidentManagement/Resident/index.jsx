import React, { useState } from 'react'
import ResidentDetail from '../../../../components/ResidentManagement/ResidentDetail'
import { FamilyDetail } from '../../../../components/ResidentManagement/FamilyDetail'
import { VehicleDetail } from '../../../../components/ResidentManagement/VehicleDetail'
import { DSButton } from '../../../../components'
import { useAddResident } from '../../../../hook/Admin/ResidentManagement/AddResident'
import toast from 'react-hot-toast'

export const Resident = () => {

  const { submitResident } = useAddResident()

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    age: "",
    wing: "",
    unit: "",
    gender: "",
  })
  const [ownerInfo, setOwnerInfo] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  })
  const [userPhoto, setUserPhoto] = useState(null);
  const [residentType, setResidentType] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState({
    profileImage:null,
    aadharFront: null,
    aadharBack: null,
    addressProof: null,
    rentAgreement: null,
  });
  const handleInputChange = (eName, value) => {
    if (typeof eName === "object" && eName.target) {
      // Handles input fields
      const { name, value } = eName.target;
      console.log("Input Change:", name, value);
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      // Handles dropdowns
      console.log("Dropdown Change:", eName, value);
      setFormData((prev) => ({ ...prev, [eName]: value }));
    }
  };
  const handleOwnerInfoChange = (e) => {
    const { name, value } = e.target
    setOwnerInfo((prev) => ({...prev, [name]: value}))
  }

  console.log("formData ==> ", formData)

  return (
    <>

      <div className='mb-5'>
        <ResidentDetail
        formData={FormData}
        userPhoto={userPhoto}
        residentType={residentType}
        setResidentType={setResidentType}
        uploadedFiles={uploadedFiles}
        setUserPhoto={setUserPhoto}
        setUploadedFiles={setUploadedFiles}
        handleInputChange={handleInputChange}
        ownerInfo={ownerInfo}
        handleOwnerInfoChange={handleOwnerInfoChange}  />
      </div>
      <div className="mb-5">
        <FamilyDetail />
      </div>
      <div className="mb-5">
        <VehicleDetail />
      </div>

      <div className="d-flex gap-5 justify-content-end">
        <DSButton className="bg-white">Cancel</DSButton>
        <DSButton onClick={() => submitResident({...formData, residentStatus:residentType}, ownerInfo, uploadedFiles, userPhoto)} >Create</DSButton>
      </div>
    </>
  );
};
