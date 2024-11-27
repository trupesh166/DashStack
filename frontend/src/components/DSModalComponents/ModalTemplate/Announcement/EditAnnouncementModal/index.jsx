import React from "react";
import styles from "./EditAnnouncementModal.module.css";
import { DSDatePicker, DSInput, DSModal } from "../../../..";
import TextArea from "antd/es/input/TextArea";
import { Flex } from "antd";

export const EditAnnouncementModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
}) => {
  return (
    <div>
      <DSModal
        title={"Edit Announcement"}
        open={open}
        closeIcon
        handleCancel={handleCancel}
        handleClose={handleClose}
        handleOk={handleOk}
        IsFooter={true}
        handleContent={"Save"}
        disabledButton={false}
      >
        <DSInput
          className="mb-4"
          label={"Announcement Title"}
          placeholder={"Enter Name"}
        />

        <div className="mb-4">
          <h6 style={{ color: "var(--clr-dark)", fontWeight: 500 }}>
            Description
          </h6>
          <TextArea
            placeholder="Enter Description"
            autoSize={{
              minRows: 1.5,
              maxRows: 5,
            }}
          />
        </div>

        <Flex
          justify="space-between"
          align="center"
          gap={"middle"}
          className="mb-4"
        >
          <DSDatePicker
            block={true}
            label={"Announcement Date"}
            placeholder={"Select Date"}
            style={{
              height: "45px",
              borderRadius: "10px",
              padding: "0px 10px",
            }}
          />
          <DSInput
            block={true}
            label={"Announcement Time"}
            placeholder={"Select Time"}
          />
        </Flex>
      </DSModal>
    </div>
  );
};
