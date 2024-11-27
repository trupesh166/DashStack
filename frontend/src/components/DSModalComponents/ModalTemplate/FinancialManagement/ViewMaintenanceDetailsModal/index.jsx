import React from "react";
import { DSModal } from "../../../..";
import { Avatar, Flex, Tag } from "antd";
import clsx from "clsx";
import Icons from "../../../../../constants/Icons";
import style from "./ViewMaintenanceDetailsModal.module.css";

export const ViewMaintenanceDetailsModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
  IsFooter,
  record
}) => {

  if (!record) return null;

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
            <Avatar
              size={70}
              src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D"
              alt="userImage"
              className={style.img} />
            <div>
              <h4 className="fw-semibold">{record.name}</h4>
              <h5>{record.date}</h5>
            </div>
          </Flex>

          <Flex className={clsx(style.center, "mb-4")} justify="space-between">
            <div>
              <h5>Wing</h5>
              <h6 style={{ color: "#5678E9" }}>{record.wingName}</h6>
            </div>
            <div>
              <h5>Unit</h5>
              <h6 style={{ color: "#202224" }}>{record.unitNumber}</h6>
            </div>
            <div>
              <h5>Status</h5>
              <Tag
                className={style.button}
                bordered={false}
                color={record.residentStatus === "Owner" ? "blue" : "pink"}
                icon={record.residentStatus === "Owner" ? Icons.TagUser : Icons.User}
              >
                {record.residentStatus}
              </Tag>
            </div>
            <div>
              <h5>Amount</h5>
              <h6 style={{ color: "#39973D" }}>{Icons.Rupee} {record.amount}</h6>
            </div>
          </Flex>

          <Flex className={style.center} justify="space-between">
            <div>
              <h5>Penalty</h5>
              <Tag
                className={style.button}
                bordered={false}
                color={record.penaltyAmount ? "var(--clr-danger)" : "var(--clr-silver)"}
                icon={record.penaltyAmount ? Icons.Rupee : ""}
              >
                {record.penaltyAmount || "--"}
              </Tag>
            </div>
            <div>
              <h5>Status</h5>
              <Tag
                className={style.button}
                bordered={false}
                color={record.paymentStatus === "Panding" ? "warning" : "success"}
                icon={record.paymentStatus === "Panding" ? Icons.Timer : Icons.Verify}
              >
                {record.paymentStatus}
              </Tag>
            </div>
            <div>
              <h5>Payment</h5>
              <Tag
                className={style.button}
                bordered={false}
                color={record.paymentMethod === "Online" ? "blue" : "default"}
                icon={record.paymentMethod === "Online" ? Icons.Wallet : Icons.Money}
              >
                {record.paymentMethod}
              </Tag>
            </div>
          </Flex>
        </div>
      </DSModal>
    </div>
  );
};
