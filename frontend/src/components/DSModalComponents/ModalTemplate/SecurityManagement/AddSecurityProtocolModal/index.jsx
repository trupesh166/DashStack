import React from "react";
import styles from "./AddSecurityProtocolModal.module.css";
import { DSInput, DSModal } from "../../../..";
import TextArea from "antd/es/input/TextArea";

export const AddSecurityProtocolModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
  protocol,
  isEdit,
  handleChange,
  isSubmitting,
}) => {
  return (
    <div className={styles.addSecurityProtocolModal}>
      <DSModal
        title={isEdit ? "Edit Security Protocol" : "Create Security Protocol"}
        open={open}
        closeIcon
        handleCancel={handleCancel}
        handleClose={handleClose}
        handleOk={handleOk}
        IsFooter
        handleContent={"Save"}
        disabledButton={isSubmitting}
      >
         <DSInput
          className="mb-4"
          label={"Title"}
          placeholder={"Enter Title"}
          value={protocol?.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />

        <div className="mb-4">
          <h6 className={styles.dark}>Description</h6>
          <TextArea
            placeholder="Enter Description"
            autoSize={{ minRows: 1.5, maxRows: 5 }}
            value={protocol?.description}
            onChange={(e) => handleChange('description', e.target.value)}
          />
        </div>
      </DSModal>
    </div>
  );
};
