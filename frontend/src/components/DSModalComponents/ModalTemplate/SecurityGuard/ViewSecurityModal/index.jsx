import React from "react";
import styles from "./ViewSecurityModal.module.css";
import { DSModal } from "../../../..";
import { Avatar, Flex } from "antd";
import Icons from "../../../../../constants/Icons";

export const ViewSecurityModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
  record
}) => {
  return (
    <div>
      <DSModal
        title={"View Security Guard Details"}
        open={open}
        closeIcon
        handleCancel={handleCancel}
        handleClose={handleClose}
        handleOk={handleOk}
        IsFooter={false}
      >
        <Flex gap={"middle"} align="center" className="mb-5">
          <Avatar
            size={64}
            src={record?.avatar || "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"}
          />
          <div>
            <h4 className="fw-semibold">{record?.name}</h4>
            {/* <h5>Feb 10, 2024</h5> */}
          </div>
        </Flex>

        <Flex justify="space-between" align="center">
          <div>
            <h5>Select Shift</h5>
            <h6
              style={{
                padding: "5px 12px",
                color: "#FF9300",
                backgroundColor: "#F4F4F4",
                borderRadius: "58px",
              }}
            >
             {record?.shift ==="Day Shift" ? "☀️" : "🌙" } {record?.shift}
            </h6>
          </div>
          <div>
            <h5>Shift Time</h5>
            <h6
              style={{
                padding: "5px 12px",
                color: "var(--clr-dark)",
                backgroundColor: "#F4F4F4",
                borderRadius: "58px",
              }}
            >
             {record?.time}
            </h6>
          </div>
          <div>
            <h5>Gender</h5>
            <h6
              style={{
                padding: "5px 12px",
                color: "var(--clr-fuchsia)",
                backgroundColor: "#FFF1F6",
                borderRadius: "58px",
                color: record?.gender === "Male" ? "blue" : "pink",
              }}
            >
              {Icons.User} {record?.gender}
            </h6>
          </div>
        </Flex>
      </DSModal>
    </div>
  );
};
