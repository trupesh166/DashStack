import React, { useState } from "react";
import styles from "./AddAnnouncementModal.module.css";
import { DSDatePicker, DSInput, DSModal } from "@/components/";
import TextArea from "antd/es/input/TextArea";
import { Flex, TimePicker } from "antd";
import { useAddAnnouncement } from "@/hook/Admin/Announcement/AddAnnouncement";

export const AddAnnouncementModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
}) => {
  const { handleChange, handleSubmit, formData } =
    useAddAnnouncement(handleCancel);

  // console.log(formData);

  return (
    <DSModal
      title={"Add Announcement"}
      open={open}
      closeIcon
      handleCancel={handleCancel}
      handleClose={handleClose}
      // handleOk={handleSave}
      IsFooter={true}
      handleContent={"Save"}
      // disabledButton={!title || !description || !date || !time}
    >
      <DSInput
        className="mb-4"
        label={"Announcement Title"}
        placeholder={"Enter Title"}
        onChange={(e) => setTitle(e.target.value)}
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
          onChange={(e) => setDescription(e.target.value)}
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
          onChange={(value) => setDate(value)}
          style={{
            height: "45px",
            borderRadius: "10px",
            padding: "0px 10px",
          }}
        />
        <TimePicker use12Hours format="h:mm a" />
      </Flex>
    </DSModal>
  );
};
