import React from "react";
import styles from "./CreateFacilityModal.module.css";
import { DSDatePicker, DSInput, DSSelect } from "../../../../FormComponents";
import TextArea from "antd/es/input/TextArea";
import { DSModal } from "../../../..";

export const CreateFacilityModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
}) => {
  return (
    <div className={styles.createFacilityModal}>
      <DSModal
        title="Create Facility"
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent="Save"
        disabledButton={false}
      >
        <div className="mb-4">
          <DSInput label={" Facility Name"} placeholder={"Enter Name"} />
        </div>

        <div className="mb-4">
          <h5 className={styles.h5}>Description</h5>
          <TextArea
            placeholder="Enter Description"
            autoSize={{
              minRows: 2,
              maxRows: 6,
            }}
          />
        </div>

        <div className="mb-4">
          <DSDatePicker
            block
            type="Date"
            label={"Schedule Service Date"}
            placeholder={"Select Schedule Service Date"}
            style={{
              width: "100%",
              height: "45px",
              borderRadius: "10px",
              padding: "0px 10px",
            }}
          />
        </div>

        <div className="mb-4">
          <DSSelect
            label={"Remind Before"}
            placeholder={"Select Day"}
            style={{ width: "100%", height: "45px", borderRadius: "10px" }}
            options={[
              { label: "1 Day", value: "1 Day" },
              { label: "2 Day", value: "2 Day" },
              { label: "3 Day", value: "3 Day" },
              { label: "4 Day", value: "4 Day" },
              { label: "5 Day", value: "5 Day" },
            ]}
          />
        </div>
      </DSModal>
    </div>
  );
};
