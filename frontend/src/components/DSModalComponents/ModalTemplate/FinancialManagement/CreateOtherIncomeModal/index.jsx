import React, { useState } from "react";
import styles from "./CreateOtherIncomeModal.module.css";
import { DSDatePicker, DSInput, DSModal } from "../../../..";
import Icons from "../../../../../constants/Icons";

export const CreateOtherIncomeModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
}) => {
  const [createOtherIncome, setCreateOtherIncome] = useState({
    title: "",
    date: "",
    dueDate: "",
    description: "",
    amount: "",
  });

  const isFormValid =
    createOtherIncome.title &&
    createOtherIncome.date &&
    createOtherIncome.dueDate &&
    createOtherIncome.description &&
    createOtherIncome.amount;

  const handleChange = (field, value) => {
    setCreateOtherIncome((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <div>
      <DSModal
        title="Create Other Income"
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent="Apply"
        disabledButton={!isFormValid}
      >
        <div>
          <div className="mb-4">
            <DSInput
              block
              label={"Title*"}
              placeholder={"Enter Title"}
              require={true}
              value={createOtherIncome.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>

          <div className="d-flex align-items-center justify-content-between gap-4 mb-4">
            <DSDatePicker
              block
              type="Date"
              label={"Date"}
              placeholder={"Select Date"}
              style={{
                width: "100%",
                height: "45px",
                borderRadius: "10px",
                padding: "0px 10px",
              }}
              value={createOtherIncome.date}
              onChange={(date) => handleChange("date", date)}
            />

            <DSDatePicker
              block
              type="Due Date"
              label={"Due Date"}
              placeholder={"Select Date"}
              style={{
                width: "100%",
                height: "45px",
                borderRadius: "10px",
                padding: "0px 10px",
              }}
              value={createOtherIncome.dueDate}
              onChange={(date) => handleChange("dueDate", date)}
            />
          </div>

          <div className="mb-4">
            <DSInput
              label={"Description"}
              type="textarea"
              placeholder={"Enter Description"}
              require={true}
              value={createOtherIncome.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <div className="mb-4">
            <DSInput
              block
              label={"Amount"}
              prefix={Icons.Rupee}
              placeholder={"0000"}
              require={true}
              value={createOtherIncome.amount}
              onChange={(e) => handleChange("amount", e.target.value)}
            />
          </div>
        </div>
      </DSModal>
    </div>
  );
};
