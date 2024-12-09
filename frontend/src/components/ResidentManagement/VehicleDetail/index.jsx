import React, { useState } from "react";
import { DSCard, DSInput, DSSelect } from "../..";
import { Col, Row } from "antd";

export const VehicleDetail = ({vehicleDetails, setVehicleDetails, onChange}) => {
  const [vehicleCount, setVehicleCount] = useState(0);

  return (
    <DSCard
      title={"Vehicle Counting : "}
      headerContent={
        <DSSelect
          placeholder={"Select Vehicle"}
          options={[
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
            { label: 4, value: 4 },
            { label: 5, value: 5 },
          ]}
          // onChange={(value) => setVehicleCount(value)}
          onChange={(value) => {
            setVehicleCount(value);
            setVehicleDetails((prev) => prev.slice(0, value)); // Adjust vehicle details based on count
          }}
          />
      }
    >
      <div className="vehicleDetails">
        <Row gutter={34} className="mb-5">
          {Array.from({ length: vehicleCount }).map((_, index) => (
            <Col key={index} span={12}>

              <Row gutter={[12, 12]} className="mb-4" style={{ border: "1px solid var(--clr-silver)", padding: "20px 15px", borderRadius: "20px" }}>
                <Col span={8}>
                  <DSSelect
                    label={`Vehicle Type* (Vehicle ${index + 1})`}
                    placeholder={"Enter Vehicle"}
                    options={[
                      { label: "Two Wheelers", value: "Two_Wheeler" },
                      { label: "Four Wheelers", value: "Four_Wheeler" },
                    ]}
                    require={true}
                    value={vehicleDetails[index]?.vehicleType || ""}
                    onChange={(value) => onChange(index, "vehicleType", value)}
                  />
                </Col>
                <Col span={8}>
                  <DSInput
                    label={`Vehicle Name (Vehicle ${index + 1})`}
                    placeholder={"Enter Name"}
                    require={true}
                    value={vehicleDetails[index]?.vehicleName || ""}
                    onChange={(e) => onChange(index, "vehicleName", e.target.value)}
                  />
                </Col>
                <Col span={8}>
                  <DSInput
                    label={`Vehicle Number (Vehicle ${index + 1})`}
                    placeholder={"Enter Number"}
                    require={true}
                    value={vehicleDetails[index]?.vehicleNumber || ""}
                    onChange={(e) => onChange(index, "vehicleNumber", e.target.value)}
                  />
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
    </DSCard>
  );
};
