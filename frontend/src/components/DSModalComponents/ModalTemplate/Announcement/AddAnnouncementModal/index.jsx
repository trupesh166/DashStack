import React, { useState } from "react";
import styles from "./AddAnnouncementModal.module.css";
import { DSDatePicker, DSInput, DSModal } from "../../../..";
import TextArea from "antd/es/input/TextArea";
import { Flex, TimePicker } from "antd";
import { useAddAnnouncement } from "../../../../../hook/Admin/Announcement/AddAnnouncement";

export const AddAnnouncementModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
}) => {

  const {  handleChange, handleSubmit, formData} = useAddAnnouncement(handleCancel)
 
  console.log(formData)
  return (
    <>
      <DSModal
        title={"Add Announcement"}
        open={open}
        closeIcon
        handleCancel={handleCancel}
        handleClose={handleClose}
        // handleOk={handleOk}
        handleOk={handleSubmit}
        IsFooter={true}
        handleContent={"Save"}
        disabledButton={false}
      >
        <DSInput
          className="mb-4"
          name={"announcementTitle"}
          label={"Announcement Title"}
          placeholder={"Enter Title"}
          onChange={handleChange}
        />

        <div className="mb-4">
          <h6 style={{ color: "var(--clr-dark)", fontWeight: 500 }}>
            Description
          </h6>
          <TextArea
            placeholder="Enter Description"
            name={"announcementDescription"}
            autoSize={{
              minRows: 1.5,
              maxRows: 5,
            }}
            onChange={handleChange}
          />
        </div>

        <Flex
          justify="space-between"
          align="center"
          gap={"middle"}
          className="mb-4"
        >
          <DSDatePicker
            name={"announcementDate"}
            block={true}
            label={"Announcement Date"}
            placeholder={"Select Date"}
            style={{
              height: "45px",
              borderRadius: "10px",
              padding: "0px 10px",
            }}
            onChange={(date, dateString) =>
              handleChange({ name: "announcementDate", value: date })
            }
          />
          <TimePicker
          name={"announcementTime"}
            use12Hours format="h:mm a"
            onChange={(time, timeString) =>
              handleChange({ name: "announcementTime", value: timeString })
            }
          />
        </Flex>
      </DSModal>
    </>
  );
};
