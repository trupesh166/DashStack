import React, { useState } from "react";
import styles from "./CreateOtherIncomeModal.module.css";
import { DSDatePicker, DSInput, DSModal } from "../../../..";
import Icons from "../../../../../constants/Icons";

export const CreateOtherIncomeModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
  formData,
  handleInputChange,
  isEdit,
  isSubmitting,
}) => {

  const isFormValid =
  formData.title &&
  formData.date &&
  formData.dueDate &&
  formData.description &&
  formData.amount;

  // const handleChange = (field, value) => {
  //   setCreateOtherIncome((prevState) => ({
  //     ...prevState,
  //     [field]: value,
  //   }));
  // };

  return (
    <div>
      <DSModal
        title={isEdit ? "Edit Other Income" : "Create Other Income"}
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent={isEdit ? "Update" : "Apply"}
        disabledButton={!isFormValid || isSubmitting}
        confirmLoading={isSubmitting}
      >
        <div>
          <div className="mb-4">
            <DSInput
              block
              label={"Title"}
              placeholder={"Enter Title"}
              require={true}
              value={formData?.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
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
              value={formData?.date}
              onChange={(date) => handleInputChange("date", date)}
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
              value={formData?.dueDate}
              onChange={(date) => handleInputChange("dueDate", date)}
            />
          </div>

          <div className="mb-4">
            <DSInput
              label={"Description"}
              type="textarea"
              placeholder={"Enter Description"}
              require={true}
              value={formData?.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>

          <div className="mb-4">
            <DSInput
              block
              label={"Amount"}
              prefix={Icons.Rupee}
              placeholder={"0000"}
              require={true}
              value={formData?.amount}
              onChange={(e) => handleInputChange("amount", e.target.value)}
            />
          </div>
        </div>
      </DSModal>
    </div>
  );
};
