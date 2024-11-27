import React from "react";
import styles from "./AddAnnouncementModal.module.css";
import { DSDatePicker, DSInput, DSModal } from "../../../..";
import TextArea from "antd/es/input/TextArea";
import { Flex, TimePicker } from "antd";

export const AddAnnouncementModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
}) => {
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
  return (
    <>
      <DSModal
        title={"Add Announcement"}
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
          <TimePicker use12Hours format="h:mm a" onChange={onChange} />
        </Flex>
      </DSModal>
    </>
  );
};
