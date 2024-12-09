import React, { useEffect, useRef, useState } from "react";
import { Avatar, Col, Row } from "antd";
import { DSCard, DSInput, DSSelect } from "../..";
import Icons from "../../../constants/Icons";
import { listUnit, listWing } from "../../../axiosApi/ApiHelper";
import UseDecodeToken from "../../../hook/UseDecodeToken";
import styles from "./ResidentDetail.module.css";

const ResidentDetail = ({
  userPhoto,
  residentType,
  setResidentType,
  uploadedFiles,
  setUserPhoto,
  setUploadedFiles,
  formData,
  handleInputChange,
  ownerInfo,
  handleOwnerInfoChange,
}) => {
  const aadharFrontRef = useRef(null);
  const aadharBackRef = useRef(null);
  const addressProofRef = useRef(null);
  const rentAgreementRef = useRef(null);
  const userPhotoRef = useRef(null);

  const { societyId } = UseDecodeToken();
  // const { userPhoto, residentType, setResidentType, uploadedFiles, setUserPhoto, setUploadedFiles, formData, handleInputChange,
  //   //  ownerInfo
  // } = useAddResident()
  let { setProfileImage, setAadharFront, setAadharBack, setAddressProof, setRentAgreement } = setUploadedFiles
  const [wing, setWing] = useState([]);
  const [unit, setUnit] = useState([]);
  const [selectWingId, setSelectWingId] = useState("");
  const [aadharFrontDetails, setAadharFrontDetails] = useState(null);
  const [aadharBackDetails, setAadharBackDetails] = useState(null);
  const [addressDetails, setAddressDetails] = useState(null);
  const [rentAgreementDetails, setRentAgreementDetails] = useState(null);

  // const handleFileChange = (event, fileType) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setUploadedFiles((prevState) => ({
  //       ...prevState,
  //       [fileType]: file,
  //     }));
  //   }
  // };

  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];
    switch (fileType) {
      case "aadharFront":
        setAadharFront(file);
        setAadharFrontDetails({
          name: file.name,
          // size: (file.size / (1024 * 1024)).toFixed(2)
          size: file.size
        })
        break;
      case "aadharBack":
        setAadharBack(file);
        setAadharBackDetails({
          name: file.name,
          // size: (file.size / (1024 * 1024)).toFixed(2)
          size: file.size
        })
        break;
      case "addressProof":
        setAddressProof(file);
        setAddressDetails({
          name: file.name,
          // size: (file.size / (1024 * 1024)).toFixed(2)
          size: file.size
        })
        break;
      case "rentAgreement":
        setRentAgreement(file);
        setRentAgreementDetails({
          name: file.name,
          // size: (file.size / (1024 * 1024)).toFixed(2)
          size: file.size
        })
        break;
      default:
        break;
    }
  };

  const handleFileRemove = (fileType) => {
    switch (fileType) {
      case "profileImage":
        setProfileImage(null);
        break;
      case "aadharFront":
        setAadharFront(null);
        setAadharFrontDetails(null)
        break;
      case "aadharBack":
        setAadharBack(null);
        setAadharBackDetails(null);
        break;
      case "addressProof":
        setAddressProof(null);
        setAddressDetails(null);
        break;
      case "rentAgreement":
        setRentAgreement(null);
        setRentAgreementDetails(null);
        break;
      default:
        break;
    }
  };

  const handleUserPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUserPhoto(URL.createObjectURL(file));
      setProfileImage(file)
    }
  };

  const GetWing = async () => {
    try {
      if (societyId) {
        const result = await listWing(societyId);
        if (result && result?.data) {
          const wings = result.data.map((value) => ({
            value: value._id,
            label: value.wingName,
          }));
          setWing(wings);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const GetUnit = async () => {
    try {
      if (selectWingId) {
        const result = await listUnit(selectWingId);
        if (result && result?.data) {
          const units = result.data.map((value) => ({
            value: value._id,
            label: value.unitNumber,
          }));
          setUnit(units);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetUnit();
  }, [selectWingId]);

  useEffect(() => {
    GetWing();
  }, [societyId]);

  return (
    <DSCard>
      <Row className="mb-5">
        <Col span={3}>
          <div
            className="d-flex flex-column align-items-center gap-3 cursor-pointer"
            onClick={() => userPhotoRef.current?.click()}
          >
            <input
              type="file"
              className="d-none"
              ref={userPhotoRef}
              onChange={(e) => handleUserPhotoChange(e)}
            />
            <Avatar
              size={100}
              icon={userPhoto ? null : Icons.User}
              src={userPhoto}
            />
            <h5>Add Photo</h5>
          </div>
        </Col>
        <Col span={21}>
          <Row gutter={[12, 16]}>
            <Col span={8}>
              <DSInput
                label={"Full Name"}
                type="text"
                placeholder={"Enter Full Name"}
                require={true}
                name={"fullName"}
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </Col>

            <Col span={8}>
              <DSInput
                label={"Phone Number"}
                type="tel"
                maxLength={13}
                placeholder={"+91"}
                require={true}
                name={"phoneNumber"}
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </Col>

            <Col span={8}>
              <DSInput
                label={"Email Address"}
                type="email"
                placeholder={"Enter Email Address"}
                name={"email"}
                value={formData.email}
                onChange={handleInputChange}
              />
            </Col>

            <Col span={8}>
              <DSSelect
                label={"Resident Type"}
                placeholder={"Select owner/tenant"}
                options={[
                  { label: "Owner", value: "Owner" },
                  { label: "Tenant", value: "Tenant" },
                ]}
                require={true}
                onChange={(value) => setResidentType(value)}
              />
            </Col>

            {residentType === "Tenant" && (
              <>
                <Col span={8}>
                  <DSInput
                    label={"Owner Full Name"}
                    type="text"
                    placeholder={"Enter Full Name"}
                    require={true}
                    name={"fullName"}
                    value={ownerInfo.fullName}
                    onChange={handleOwnerInfoChange}
                  />
                </Col>

                <Col span={8}>
                  <DSInput
                    label={"Owner Phone"}
                    type="tel"
                    placeholder={"+91"}
                    maxLength={13}
                    require={true}
                    name={"phoneNumber"}
                    value={ownerInfo.phoneNumber}
                    onChange={handleOwnerInfoChange}
                  />
                </Col>

                <Col span={8}>
                  <DSInput
                    label={"Owner Address"}
                    type="text"
                    placeholder={"Enter Address"}
                    require={true}
                    name={"address"}
                    value={ownerInfo.address}
                    onChange={handleOwnerInfoChange}
                  />
                </Col>
              </>
            )}

            <Col span={8}>
              <DSInput
                label={"Age"}
                type="text"
                placeholder={"Enter Age"}
                require={true}
                name={"age"}
                value={formData.age}
                onChange={handleInputChange}
              />
            </Col>

            <Col span={8}>
              <DSSelect
                label={"Gender"}
                placeholder={"Select Gender"}
                options={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                  { label: "Other", value: "Other" },
                ]}
                require={true}
                name="gender"
                value={formData.gender}
                onChange={(value) => handleInputChange("gender", value)}
              />
            </Col>

            {/* <Col span={8}>
              <DSInput
                label={"Wing"}
                type="text"
                placeholder={"Enter Wing"}
                require={true}
              />
            </Col>

            <Col span={8}>
              <DSInput
                label={"Unit"}
                type="text"
                placeholder={"Enter Unit"}
                require={true}
              />
            </Col> */}

            <Col span={8}>
              <DSSelect
                label={"Wing"}
                placeholder={"Select Wing"}
                options={wing}
                require={true}
                name="wing"
                value={formData.wing}
                onChange={(value) => {
                  setSelectWingId(value);
                  handleInputChange("wing", value);
                }}
              />
            </Col>

            <Col span={8}>
              <DSSelect
                label={"Unit"}
                placeholder={"Select Unit"}
                options={unit}
                require={true}
                name="unit"
                value={formData.unit}
                onChange={(value) => handleInputChange("unit", value)}
              />
            </Col>

            <Col span={8}>
              <DSInput
                label={"Relation"}
                type="text"
                placeholder={"Enter Relation"}
                require={true}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={12} className="mb-3">
        {/* Aadhar Front */}
        <Col span={6}>
          <h6>Upload Aadhar Card (Front Side)</h6>
          <div
            className={styles.document}
            onClick={() => aadharFrontRef.current?.click()}
          >
            <div>
              <input
                type="file"
                className="d-none"
                ref={aadharFrontRef}
                onChange={(e) => handleFileChange(e, "aadharFront")}
              />
              <h4>{Icons.AddImage}</h4>
            </div>
            <h6 className={styles.h6}>
              Upload a file{" "}
              <span className={styles.span}>or drag and drop</span>
            </h6>
            <p className={styles.p}>PNG, JPG, GIF up to 10MB</p>
          </div>
          {aadharFrontDetails && (
            <div className={styles.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{aadharFrontDetails.name}</h6>
                  <h6 className={styles.p}>
                    {(aadharFrontDetails.size / (1024 * 1024)).toFixed(
                      2
                    )}{" "}
                    MB
                  </h6>
                </div>
              </div>
              <h2
                onClick={() => handleFileRemove("aadharFront")}
                className={styles.trashIcon}
              >
                {Icons.Trash}
              </h2>
            </div>
          )}
        </Col>

        {/* Aadhar Back */}
        <Col span={6}>
          <h6>Upload Aadhar Card (Back Side)</h6>
          <div
            className={styles.document}
            onClick={() => aadharBackRef.current?.click()}
          >
            <div>
              <input
                type="file"
                className="d-none"
                ref={aadharBackRef}
                onChange={(e) => handleFileChange(e, "aadharBack")}
              />
              <h4>{Icons.AddImage}</h4>
            </div>
            <h6 className={styles.h6}>
              Upload a file{" "}
              <span className={styles.span}>or drag and drop</span>
            </h6>
            <p className={styles.p}>PNG, JPG, GIF up to 10MB</p>
          </div>
          {aadharBackDetails && (
            <div className={styles.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{aadharBackDetails.name}</h6>
                  <h6 className={styles.p}>
                    {(aadharBackDetails.size / (1024 * 1024)).toFixed(2)}{" "}
                    MB
                  </h6>
                </div>
              </div>
              <h2
                onClick={() => handleFileRemove("aadharBack")}
                className={styles.trashIcon}
              >
                {Icons.Trash}
              </h2>
            </div>
          )}
        </Col>

        {/* Address Proof */}
        <Col span={6}>
          <h6>Address Proof (Vera Bill OR Light Bill)</h6>
          <div
            className={styles.document}
            onClick={() => addressProofRef.current?.click()}
          >
            <div>
              <input
                type="file"
                className="d-none"
                ref={addressProofRef}
                onChange={(e) => handleFileChange(e, "addressProof")}
              />
              <h4>{Icons.AddImage}</h4>
            </div>
            <h6 className={styles.h6}>
              Upload a file{" "}
              <span className={styles.span}>or drag and drop</span>
            </h6>
            <p className={styles.p}>PNG, JPG, GIF up to 10MB</p>
          </div>
          {addressDetails && (
            <div className={styles.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{addressDetails.name}</h6>
                  <h6 className={styles.p}>
                    {(addressDetails.size / (1024 * 1024)).toFixed(
                      2
                    )}{" "}
                    MB
                  </h6>
                </div>
              </div>
              <h2
                onClick={() => handleFileRemove("addressProof")}
                className={styles.trashIcon}
              >
                {Icons.Trash}
              </h2>
            </div>
          )}
        </Col>

        {/* Rent Agreement */}
        <Col span={6}>
          <h6>Rent Agreement</h6>
          <div
            className={styles.document}
            onClick={() => rentAgreementRef.current?.click()}
          >
            <div>
              <input
                type="file"
                className="d-none"
                ref={rentAgreementRef}
                onChange={(e) => handleFileChange(e, "rentAgreement")}
              />
              <h4>{Icons.AddImage}</h4>
            </div>
            <h6 className={styles.h6}>
              Upload a file{" "}
              <span className={styles.span}>or drag and drop</span>
            </h6>
            <p className={styles.p}>PNG, JPG, GIF up to 10MB</p>
          </div>
          {rentAgreementDetails && (
            <div className={styles.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{rentAgreementDetails.name}</h6>
                  <h6 className={styles.p}>
                    {(rentAgreementDetails.size / (1024 * 1024)).toFixed(
                      2
                    )}{" "}
                    MB
                  </h6>
                </div>
              </div>
              <h2
                onClick={() => handleFileRemove("rentAgreement")}
                className={styles.trashIcon}
              >
                {Icons.Trash}
              </h2>
            </div>
          )}
        </Col>
      </Row>
    </DSCard>
  );
};

export default ResidentDetail;
