import React, { useState } from "react";
import ResidentDetail from "../../../../components/ResidentManagement/ResidentDetail";
import { FamilyDetail } from "../../../../components/ResidentManagement/FamilyDetail";
import { VehicleDetail } from "../../../../components/ResidentManagement/VehicleDetail";
import { DSButton } from "../../../../components";
import { useAddResident } from "../../../../hook/Admin/ResidentManagement/AddResident";

export const Resident = () => {
  const { submitResident } = useAddResident();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    age: "",
    wing: "",
    unit: "",
    gender: "",
  });
  const [ownerInfo, setOwnerInfo] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  });
  const [userPhoto, setUserPhoto] = useState(null);
  const [residentType, setResidentType] = useState("");
  let [uploadedFiles, setUploadedFiles] = useState({
    profileImage: null,
    aadharFront: null,
    aadharBack: null,
    addressProof: null,
    rentAgreement: null,
  });
  const [profileImage, setProfileImage] = useState(null);
  const [aadharFront, setAadharFront] = useState(null);
  const [aadharBack, setAadharBack] = useState(null);
  const [addressProof, setAddressProof] = useState(null);
  const [rentAgreement, setRentAgreement] = useState(null);
  const [familyDetails, setFamilyDetails] = useState([]);
  const [vehicleDetails, setVehicleDetails] = useState([]);

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
    const { name, value } = e.target;
    setOwnerInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleFamilyDetailChange = (index, field, value) => {
    setFamilyDetails((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };
  const handleVehicleDetailChange = (index, field, value) => {
    setVehicleDetails((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  console.log("formData ==> ", formData);

  return (
    <>
      <div className="mb-5">
        <ResidentDetail
          formData={FormData}
          userPhoto={userPhoto}
          residentType={residentType}
          setResidentType={setResidentType}
          uploadedFiles={{
            profileImage,
            aadharFront,
            aadharBack,
            addressProof,
            rentAgreement,
          }}
          setUserPhoto={setUserPhoto}
          setUploadedFiles={{
            setProfileImage,
            setAadharFront,
            setAadharBack,
            setAddressProof,
            setRentAgreement,
          }}
          handleInputChange={handleInputChange}
          ownerInfo={ownerInfo}
          handleOwnerInfoChange={handleOwnerInfoChange}
        />
      </div>
      <div className="mb-5">
        <FamilyDetail
          familyDetails={familyDetails}
          setFamilyDetails={setFamilyDetails}
          onChange={handleFamilyDetailChange}
        />
      </div>
      <div className="mb-5">
        <VehicleDetail
          vehicleDetails={vehicleDetails}
          setVehicleDetails={setVehicleDetails}
          onChange={handleVehicleDetailChange}
        />
      </div>

      <div className="d-flex gap-5 justify-content-end">
        <DSButton className="bg-white">Cancel</DSButton>
        <DSButton
          onClick={() =>
            submitResident(
              { ...formData, residentStatus: residentType },
              ownerInfo,
              familyDetails,
              vehicleDetails,
              profileImage,
              aadharFront,
              aadharBack,
              addressProof,
              rentAgreement,
            )
          }
        >
          Create
        </DSButton>
      </div>
    </>
  );
};
