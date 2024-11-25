import React from "react";
import { DSModal } from "../../../..";
import { Flex } from "antd";
import clsx from "clsx";
import Icons from "../../../../../constants/Icons";
import style from "./ViewMaintenanceDetailsModal.module.css";

export const ViewMaintenanceDetailsModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
  IsFooter,
}) => {
  return (
    <div className={style.viewMaintenanceDetails}>
      <DSModal
        title="View Maintenance Details"
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter={IsFooter}
        handleContent="Apply"
        disabledButton={false}
      >
        <div>
          <Flex
            gap={"middle"}
            align="center"
            className={clsx(style.memberDetail, "mb-5")}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D"
              alt="userImage"
              className={style.img}            />
            <div>
              <h4 className="fw-semibold">Cody Fisher</h4>
              <h5>Feb 10, 2024</h5>
            </div>
          </Flex>

          <Flex className={clsx(style.center, "mb-4")} justify="space-between">
            <div>
              <h5>Wing</h5>
              <h6 style={{ color: "#5678E9" }}>A</h6>
            </div>
            <div>
              <h5>Unit</h5>
              <h6 style={{ color: "#202224" }}>1001</h6>
            </div>
            <div>
              <h5>Status</h5>
              <h6
                className="d-flex align-items-center gap-3"
                style={{
                  color: "#4F46E5",
                  backgroundColor: "#F1F0FF",
                  padding: "5px 12px",
                  borderRadius: "40px",
                }}
              >
                {Icons.TagUser} Owner
              </h6>
            </div>
            <div>
              <h5>Amount</h5>
              <h6 style={{ color: "#39973D" }}>{Icons.Rupee} 1000</h6>
            </div>
          </Flex>

          <Flex className={style.center} justify="space-between">
            <div>
              <h5>Penalty</h5>
              <h6 style={{ color: "#202224" }}>1001</h6>
            </div>
            <div>
              <h5>Status</h5>
              <h6
                className="d-flex align-items-center gap-3"
                style={{
                  color: "#FFC313",
                  backgroundColor: "#FFF9E7",
                  padding: "5px 12px",
                  borderRadius: "40px",
                }}
              >
                {Icons.Timer} Pending
              </h6>
            </div>
            <div>
              <h5>Payment</h5>
              <h6 style={{ color: "#202224", backgroundColor: "#F4F4F4" }}>
                {Icons.Rupee} Cash
              </h6>
            </div>
          </Flex>
        </div>
      </DSModal>
    </div>
  );
};
