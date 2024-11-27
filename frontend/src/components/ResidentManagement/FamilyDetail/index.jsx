import React, { useState } from "react";
import styles from "./FamilyDetail.module.css";
import { DSCard, DSInput, DSSelect } from "../..";
import { Col, Row } from "antd";

export const FamilyDetail = () => {
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
            onChange={(value) => setMemberCount(value)}
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
              />
            </Col>
            <Col span={5}>
              <DSInput
                label={`Phone No (Member ${index + 1})`}
                placeholder={"+91"}
                require={true}
              />
            </Col>
            <Col span={5}>
              <DSInput
                label={`Email (Member ${index + 1})`}
                placeholder={"Enter Email Address"}
              />
            </Col>
            <Col span={3}>
              <DSInput
                label={`Age (Member ${index + 1})`}
                placeholder={"Enter Age"}
                require={true}
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
              />
            </Col>
            <Col span={3}>
              <DSInput
                label={`Relation (Member ${index + 1})`}
                placeholder={"Enter Relation"}
                require={true}
              />
            </Col>
          </Row>
        ))}
      </div>
    </DSCard>
  );
};
