import React from "react";
import { DSDatePicker, DSInput, DSModal } from "@/components/";
import TextArea from "antd/es/input/TextArea";
import styles from "./AddNote.module.css";

export const AddNote = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
  title,
  setTitle,
  description,
  headerTitle,
  setDescription,
  date,
  setScheduleDate,
  isSubmitting,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleOk({
      title,
      description,
      date,
    });
  };

  const isButtonDisabled = isSubmitting || !title || !description || !date;

  return (
    <div className={styles.addNote}>
      <DSModal
        title={headerTitle}
        open={open}
        handleOk={handleSubmit}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent="Save"
        disabledButton={isButtonDisabled}
      >
        <div className="mb-4">
          <DSInput
            label="Title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <h5 className={styles.h5}>Description</h5>
          <TextArea
            placeholder="Enter Description"
            autoSize={{
              minRows: 2,
              maxRows: 6,
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <DSDatePicker
            block
            type="Date"
            label="Schedule Date"
            placeholder="Select Date"
            style={{
              width: "100%",
              height: "45px",
              borderRadius: "10px",
              padding: "0px 10px",
            }}
            value={date}
            onChange={(date) => setScheduleDate(date)}
          />
        </div>
      </DSModal>
    </div>
  );
};
