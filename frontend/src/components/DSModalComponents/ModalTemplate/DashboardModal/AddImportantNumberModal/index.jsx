import React, { useState } from "react";
import style from "./AddImportantNumberModal.module.css";
import { DSInput, DSModal } from "../../../..";

export const AddImportantNumberModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
}) => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    phoneNumber: "",
    work: "",
  });

  const isDisabled =
    !formValues.fullName || !formValues.phoneNumber || !formValues.work;

  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
        value={formValues.fullName}
        onChange={(e) => handleInputChange("fullName", e.target.value)}
      />

      <DSInput
        className="mb-4"
        label={"Phone Number"}
        placeholder={"+91"}
        require
        value={formValues.phoneNumber}
        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
      />

      <DSInput
        className="mb-4"
        label={"Work"}
        placeholder={"Enter Work"}
        require
        value={formValues.work}
        onChange={(e) => handleInputChange("work", e.target.value)}
      />
    </DSModal>
  );
};
