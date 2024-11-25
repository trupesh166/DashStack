import React, { useRef, useState } from "react";
import style from "./ResidentDetail.module.css";
import { Avatar, Col, Row } from "antd";
import { DSCard, DSInput, DSSelect } from "../..";
import Icons from "../../../constants/Icons";

const ResidentDetail = () => {
  const fileInputRef = useRef(null);
  const [residentType, setResidentType] = useState("");

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

        <Col span={6}>
          <h6>Upload Aadhar Card (Front Side)</h6>
          <div className={style.document}>
            <div onClick={() => fileInputRef.current?.click()}>
              <input
                type="file"
                className="d-none"
                ref={fileInputRef}
              />
              <h4>{Icons.AddImage}</h4>
            </div>
            <h6 className={style.h6}>Upload a file <span>or drag and drop</span></h6>
            <p>PNG, JPG, GIF up to 10MB</p>
          </div>
        </Col>

        <Col span={6}>
          <h6>Upload Aadhar Card (Back Side)</h6>
          <div className={style.document}>
            <div onClick={() => fileInputRef.current?.click()}>
              <input
                type="file"
                className="d-none"
                ref={fileInputRef}
              />
              <h4>{Icons.AddImage}</h4>
            </div>
            <h6 className={style.h6}>Upload a file <span>or drag and drop</span></h6>
            <p>PNG, JPG, GIF up to 10MB</p>
          </div>
        </Col>

        <Col span={6}>
          <h6>Address Proof (Vera Bill OR Light Bill)</h6>
          <div className={style.document}>
            <div onClick={() => fileInputRef.current?.click()}>
              <input
                type="file"
                className="d-none"
                ref={fileInputRef}
              />
              <h4>{Icons.AddImage}</h4>
            </div>
            <h6 className={style.h6}>Upload a file <span>or drag and drop</span></h6>
            <p>PNG, JPG, GIF up to 10MB</p>
          </div>
        </Col>

        <Col span={6}>
          <h6>Rent Agreement</h6>
          <div className={style.document}>
            <div onClick={() => fileInputRef.current?.click()}>
              <input
                type="file"
                className="d-none"
                ref={fileInputRef}
              />
              <h4>{Icons.AddImage}</h4>
            </div>
            <h6 className={style.h6}>Upload a file <span>or drag and drop</span></h6>
            <p>PNG, JPG, GIF up to 10MB</p>
          </div>
        </Col>

      </Row>
    </DSCard>
  );
};

export default ResidentDetail;
