import React, { useState } from "react";
import styles from "./EditImportantNumberModal.module.css";
import { DSInput, DSModal } from "../../../..";

export const EditImportantNumberModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
}) => {
  return (
    <DSModal
      title={"Edit Important Number"}
      open={open}
      closeIcon
      handleOk={handleOk}
      onCancel={handleCancel}
      handleClose={handleClose}
      IsFooter
      handleContent="Save"
      disabledButton={false}
    >
      <DSInput
        className="mb-4"
        label={"Full Name"}
        placeholder={"Enter Full Name"}
        require
      />

      <DSInput
        className="mb-4"
        label={"Phone Number"}
        placeholder={"+91"}
        require
      />

      <DSInput
        className="mb-4"
        label={"Work"}
        placeholder={"Enter Work"}
        require
      />
    </DSModal>
  );
};
