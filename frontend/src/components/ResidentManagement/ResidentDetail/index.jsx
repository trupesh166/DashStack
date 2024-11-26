import React, { useRef, useState } from "react";
import style from "./ResidentDetail.module.css";
import { Avatar, Col, Row } from "antd";
import { DSCard, DSInput, DSSelect } from "../..";
import Icons from "../../../constants/Icons";

const ResidentDetail = () => {

  const aadharFrontRef = useRef(null);
  const aadharBackRef = useRef(null);
  const addressProofRef = useRef(null);
  const rentAgreementRef = useRef(null);
  const fileInputRef = useRef(null)

  const [residentType, setResidentType] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState({
    aadharFront: null,
    aadharBack: null,
    addressProof: null,
    rentAgreement: null,
  });

  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles((prevState) => ({
        ...prevState,
        [fileType]: {
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(2), // File size in MB
        },
      }));
    }
  };

  const handleFileRemove = (fileType) => {
    setUploadedFiles((prevState) => ({
      ...prevState,
      [fileType]: null,
    }));
  };

  return (
    <DSCard>
      <Row className="mb-5">
        <Col span={3}>
          <div
            className="d-flex flex-column align-items-center gap-3 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <input type="file" className="d-none" ref={fileInputRef} />
            <Avatar size={100} icon={Icons.User} />
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
              />
            </Col>

            <Col span={8}>
              <DSInput
                label={"Phone Number"}
                type="text"
                placeholder={"+91"}
                require={true}
              />
            </Col>

            <Col span={8}>
              <DSInput
                label={"Email Address"}
                type="text"
                placeholder={"Enter Email Address"}
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
                  />
                </Col>

                <Col span={8}>
                  <DSInput
                    label={"Owner Phone"}
                    type="text"
                    placeholder={"+91"}
                    require={true}
                  />
                </Col>

                <Col span={8}>
                  <DSInput
                    label={"Owner Address"}
                    type="text"
                    placeholder={"Enter Address"}
                    require={true}
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
              />
            </Col>

            <Col span={8}>
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
            className={style.document}
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
            <h6 className={style.h6}>
              Upload a file <span className={style.span}>or drag and drop</span>
            </h6>
            <p className={style.p}>PNG, JPG, GIF up to 10MB</p>
          </div>
          {uploadedFiles.aadharFront && (
            <div className={style.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{uploadedFiles.aadharFront.name}</h6>
                  <h6 className={style.p}>{uploadedFiles.aadharFront.size} MB</h6>
                </div>
              </div>
              <h2
                onClick={() => handleFileRemove("aadharFront")}
                className={style.trashIcon}
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
            className={style.document}
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
            <h6 className={style.h6}>
              Upload a file <span className={style.span}>or drag and drop</span>
            </h6>
            <p className={style.p}>PNG, JPG, GIF up to 10MB</p>
          </div>
          {uploadedFiles.aadharBack && (
            <div className={style.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{uploadedFiles.aadharBack.name}</h6>
                  <h6 className={style.p}>{uploadedFiles.aadharBack.size} MB</h6>
                </div>
              </div>
              <h2
                onClick={() => handleFileRemove("aadharBack")}
                className={style.trashIcon}
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
            className={style.document}
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
            <h6 className={style.h6}>
              Upload a file <span className={style.span}>or drag and drop</span>
            </h6>
            <p className={style.p}>PNG, JPG, GIF up to 10MB</p>
          </div>
          {uploadedFiles.addressProof && (
            <div className={style.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{uploadedFiles.addressProof.name}</h6>
                  <h6 className={style.p}>{uploadedFiles.addressProof.size} MB</h6>
                </div>
              </div>
              <h2
                onClick={() => handleFileRemove("addressProof")}
                className={style.trashIcon}
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
            className={style.document}
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
            <h6 className={style.h6}>
              Upload a file <span className={style.span}>or drag and drop</span>
            </h6>
            <p className={style.p}>PNG, JPG, GIF up to 10MB</p>
          </div>
          {uploadedFiles.rentAgreement && (
            <div className={style.uploadDocument}>
              <div className="d-flex gap-3 align-items-center">
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>{uploadedFiles.rentAgreement.name}</h6>
                  <h6 className={style.p}>{uploadedFiles.rentAgreement.size} MB</h6>
                </div>
              </div>
              <h2
                onClick={() => handleFileRemove("rentAgreement")}
                className={style.trashIcon}
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
