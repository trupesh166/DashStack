import React, { useState } from "react";
import styles from "./FamilyDetail.module.css";
import { DSCard, DSInput, DSSelect } from "../..";
import { Col, Row } from "antd";

export const FamilyDetail = ({ familyDetails, onChange, setFamilyDetails }) => {
  const [memberCount, setMemberCount] = useState(0);

  return (
    <DSCard
      title={"Member Counting : (Other Members)"}
      headerContent={
        <>
          <DSSelect
            placeholder={"Select Member"}
            options={[
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 },
              { label: 4, value: 4 },
              { label: 5, value: 5 },
            ]}
            // onChange={(value) => setMemberCount(value)}
            onChange={(value) => {
              setMemberCount(value);
              setFamilyDetails((prev) => prev.slice(0, value)); // Adjust family details to match count
            }}
          />
        </>
      }
    >
      <div className="memberDetails">
        {Array.from({ length: memberCount }).map((_, index) => (
          <Row key={index} gutter={12} className="mb-5">
            <Col span={5}>
              <DSInput
                label={`Full Name (Member ${index + 1})`}
                placeholder={"Enter Full Name"}
                require={true}
                value={familyDetails[index]?.fullName || ""}
                onChange={(e) => onChange(index, "fullName", e.target.value)}
              />
            </Col>
            <Col span={5}>
              <DSInput
                label={`Phone No (Member ${index + 1})`}
                placeholder={"+91"}
                require={true}
                value={familyDetails[index]?.phoneNumber || ""}
                onChange={(e) => onChange(index, "phoneNumber", e.target.value)}
              />
            </Col>
            <Col span={5}>
              <DSInput
                label={`Email (Member ${index + 1})`}
                placeholder={"Enter Email Address"}
                value={familyDetails[index]?.email || ""}
                onChange={(e) => onChange(index, "email", e.target.value)}
              />
            </Col>
            <Col span={3}>
              <DSInput
                label={`Age (Member ${index + 1})`}
                placeholder={"Enter Age"}
                require={true}
                value={familyDetails[index]?.age || ""}
                onChange={(e) => onChange(index, "age", e.target.value)}
              />
            </Col>
            <Col span={3}>
              <DSSelect
                label={`Gender (Member ${index + 1})`}
                placeholder={"Enter Gender"}
                options={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                  { label: "Other", value: "Other" },
                ]}
                require={true}
                value={familyDetails[index]?.gender || ""}
                onChange={(e) => onChange(index, "gender", e)}
              />
            </Col>
            <Col span={3}>
              <DSInput
                label={`Relation (Member ${index + 1})`}
                placeholder={"Enter Relation"}
                require={true}
                value={familyDetails[index]?.relation || ""}
                onChange={(e) => onChange(index, "relation", e.target.value)}
              />
            </Col>
          </Row>
        ))}
      </div>
    </DSCard>
  );
};
