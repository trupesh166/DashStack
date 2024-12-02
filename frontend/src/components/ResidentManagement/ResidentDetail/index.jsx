import React, { useEffect, useRef, useState } from "react";
import styles from "./ResidentDetail.module.css";
import { Avatar, Col, Row } from "antd";
import { DSCard, DSInput, DSSelect } from "../..";
import Icons from "../../../constants/Icons";
import { useAddResident } from "../../../hook/Admin/ResidentManagement/AddResident";
import { listUnit, listWing } from "../../../axiosApi/ApiHelper";
import UseDecodeToken from "../../../hook/UseDecodeToken";

const ResidentDetail = ({ userPhoto, residentType, setResidentType, uploadedFiles, setUserPhoto, setUploadedFiles, formData, handleInputChange, ownerInfo, handleOwnerInfoChange }) => {
  const aadharFrontRef = useRef(null);
  const aadharBackRef = useRef(null);
  const addressProofRef = useRef(null);
  const rentAgreementRef = useRef(null);
  const userPhotoRef = useRef(null);

  const { societyId } = UseDecodeToken()
  // const { userPhoto, residentType, setResidentType, uploadedFiles, setUserPhoto, setUploadedFiles, formData, handleInputChange,
  //   //  ownerInfo
  // } = useAddResident()
  const [wing, setWing] = useState([])
  const [unit, setUnit] = useState([])
  const [selectWingId, setSelectWingId] = useState("")

  // const [userPhoto, setUserPhoto] = useState(null);
  // const [residentType, setResidentType] = useState("");
  // const [uploadedFiles, setUploadedFiles] = useState({
  //   aadharFront: null,
  //   aadharBack: null,
  //   addressProof: null,
  //   rentAgreement: null,
  // });

  // const handleFileChange = (event, fileType) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setUploadedFiles((prevState) => ({
  //       ...prevState,
  //       [fileType]: {
  //         name: file.name,
  //         size: (file.size / (1024 * 1024)).toFixed(2),
  //       },
  //     }));
  //   }
  // };

  // const handleFileRemove = (fileType) => {
  //   setUploadedFiles((prevState) => ({
  //     ...prevState,
  //     [fileType]: null,
  //   }));
  // };

  // const handleUserPhotoChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setUserPhoto(URL.createObjectURL(file));
  //   }
  // };


  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles((prevState) => ({
        ...prevState,
        [fileType]: file
      }));
    }
  };

  const handleFileRemove = (fileType) => {
    setUploadedFiles((prevState) => ({
      ...prevState,
      [fileType]: null,
    }));
  };

  const handleUserPhotoChange = (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      setUserPhoto(URL.createObjectURL(file));
      setUploadedFiles((prevState) => ({
        ...prevState,
        [fileType]: file
      }));
    }
  };

  const GetWing = async () => {
    try {
      if (societyId) {
        const result = await listWing(societyId)
        if (result && result?.data) {
          result?.data.map((value) => {
            setWing((prev) => [...prev, { value: value._id, label: value.wingName }]);
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  const GetUnit = async () => {
    try {
      if (selectWingId) {
        const result = await listUnit(selectWingId)
        if (result && result?.data) {
          result?.data.map((value) => {
            setUnit((prev) => [...prev, { value: value._id, label: value.unitNumber }]);
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetUnit()
  }, [selectWingId])

  useEffect(() => {
    GetWing()
  }, [societyId])


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
              onChange={(e) => handleUserPhotoChange(e, "profileImage")}
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
                type="text"
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
                type="text"
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
                    name={'fullName'}
                    value={ownerInfo.fullName}
                    onChange={handleOwnerInfoChange}
                  />
                </Col>

                <Col span={8}>
                  <DSInput
                    label={"Owner Phone"}
                    type="text"
                    placeholder={"+91"}
                    require={true}
                    name={'phoneNumber'}
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
                    name={'address'}
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
                  setSelectWingId(value)
                  handleInputChange("wing", value)
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
          {uploadedFiles?.aadharFront && (
            <div className={styles.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{uploadedFiles.aadharFront.name}</h6>
                  <h6 className={styles.p}>
                    {(uploadedFiles.aadharFront.size / (1024 * 1024)).toFixed(2)} MB
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
          {uploadedFiles.aadharBack && (
            <div className={styles.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{uploadedFiles.aadharBack.name}</h6>
                  <h6 className={styles.p}>
                    {(uploadedFiles.aadharBack.size / (1024 * 1024)).toFixed(2)} MB
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
          {uploadedFiles.addressProof && (
            <div className={styles.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{uploadedFiles.addressProof.name}</h6>
                  <h6 className={styles.p}>
                    {(uploadedFiles.addressProof.size / (1024 * 1024)).toFixed(2)} MB
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
          {uploadedFiles.rentAgreement && (
            <div className={styles.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{uploadedFiles.rentAgreement.name}</h6>
                  <h6 className={styles.p}>
                    {(uploadedFiles.rentAgreement.size / (1024 * 1024)).toFixed(2)} MB
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
