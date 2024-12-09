import React, { useState } from "react";
import styles from "./AddImportantNumberModal.module.css";
import { DSInput, DSModal } from "../../../..";
import { useAddImportantNumber } from "../../../../../hook/Admin/ImportantNumbers/AddImportantNumbers";

export const AddImportantNumberModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
  handleInputChange,
  formValues
}) => {

  // const { handleInputChange, formValues } = useAddImportantNumber()

  const isDisabled =
    !formValues?.fullName || !formValues?.phoneNumber || !formValues?.work;

  return (
    <DSModal
      title={"Add Important Number"}
      open={open}
      closeIcon
      handleOk={handleOk}
      onCancel={handleCancel}
      handleClose={handleClose}
      IsFooter
      handleContent="Save"
      disabledButton={isDisabled}
    >
      <DSInput
        className="mb-4"
        label={"Full Name"}
        placeholder={"Enter Full Name"}
        require
        value={formValues?.fullName}
        name={"fullName"}
        onChange={handleInputChange}
      />

      <DSInput
        className="mb-4"
        label={"Phone Number"}
        placeholder={"+91"}
        require
        value={formValues?.phoneNumber}
        name={"phoneNumber"}
        onChange={handleInputChange}
      />

      <DSInput
        className="mb-4"
        label={"Work"}
        placeholder={"Enter Work"}
        require
        value={formValues?.work}
        name={"work"}
        onChange={handleInputChange}
      />
    </DSModal>
  );
};
