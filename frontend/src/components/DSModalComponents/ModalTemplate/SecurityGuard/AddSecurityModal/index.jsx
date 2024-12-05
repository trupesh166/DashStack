import React, { useEffect, useRef } from "react";
import styles from "./AddSecurityModal.module.css";
import { DSDatePicker, DSInput, DSModal, DSSelect } from "../../../..";
import Icons from "../../../../../constants/Icons";
import { Avatar, Flex } from "antd";

export const AddSecurityModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
  formData,
  handleInputChange,
  handleFileChange,
  handleFileRemove,
  isSubmitting,
  isEdit,
}) => {
  const photoInputRef = useRef(null);
  const billInputRef = useRef(null);

  const handlePhotoUploadClick = () => {
    photoInputRef.current.click();
  };

  const handleBillUploadClick = () => {
    billInputRef.current.click();
  };

  return (
    <div className={styles.addSecurityModal}>
      <DSModal
        title={isEdit ? "Edit Security" : "Add Security"}
        open={open}
        closeIcon
        handleCancel={handleCancel}
        handleClose={handleClose}
        handleOk={handleOk}
        IsFooter={true}
        handleContent={isSubmitting ? "Submitting..." : isEdit ? "Update" : "Create"}
        disabledButton={isSubmitting}
      >
        <Flex
          align="center"
          gap={"middle"}
          className="mb-4 cursor-pointer"
          onClick={handlePhotoUploadClick}
        >
          <input
            type="file"
            className="d-none"
            ref={photoInputRef}
            name={"photo"}
            onChange={(e) => handleFileChange(e, "photo")}
          />
          <Avatar size={64} src={formData?.photo ? formData?.photo : Icons.User} />
          <h5 className={styles.h5}>Add Photo</h5>
        </Flex>

        <DSInput
          className="mb-4"
          label={"Full Name"}
          name="fullName"
          value={formData?.fullName}
          placeholder={"Enter Full Name"}
          onChange={handleInputChange}
        />

        <DSInput
          className="mb-4"
          label={"Eamil"}
          name="email"
          value={formData?.email}
          placeholder={"Enter Email"}
          onChange={handleInputChange}
        />

        <DSInput
          className="mb-4"
          label={"Phone Number"}
          name="phoneNumber"
          value={formData?.phoneNumber}
          placeholder={"+91"}
          onChange={handleInputChange}
        />

        <Flex
          gap={"middle"}
          justify="space-between"
          align="center"
          className="mb-4"
        >
          <DSSelect
            block={true}
            label={"Gender"}
            name="gender"
            value={formData?.gender}
            placeholder={"Select Gender"}
            options={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
            onChange={(value) => handleInputChange({ target: { name: "gender", value } })}
            style={{ width: "100%", height: "45px", borderRadius: "20px" }}
          />
          <DSSelect
            block={true}
            label={"Shift"}
            name="shift"
            value={formData?.shift}
            placeholder={"Select Shift"}
            options={[
              { label: "Day Shift", value: "Day Shift" },
              { label: "Night Shift", value: "Night Shift" },
            ]}
            onChange={(value) => handleInputChange({ target: { name: "shift", value } })}
            style={{ width: "100%", height: "45px", borderRadius: "10px" }}
          />
        </Flex>

        <Flex justify="space-between" align="center" className="mb-4">
          <DSDatePicker
            block={true}
            label={"Shift Date"}
            name="shiftDate"
            value={formData?.shiftDate}
            placeholder={"Select Date"}
            onChange={(date) => handleInputChange({ target: { name: "shiftDate", value: date } })}
            style={{
              height: "45px",
              borderRadius: "10px",
              padding: "0px 10px",
            }}
          />
          <DSInput
            block={true}
            label={"Shift Time*"}
            name="shiftTime"
            value={formData?.shiftTime}
            placeholder={"Select Time"}
            onChange={handleInputChange}
          />
        </Flex>

        <div className="mb-4">
          <label>Upload Bill</label>
          <input
            ref={billInputRef}
            className="d-none"
            label={"Upload Bill"}
            type="file"
            name="bill"
            onChange={(e) => handleFileChange(e, "bill")}
          />
          <div className={styles.uploadImage} onClick={handleBillUploadClick}>
            {Icons.AddImage}
            <h6 className="fw-bold">
              Upload a file <span className="fw-bold">or drag and drop</span>
            </h6>
            <p>PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </DSModal>
    </div>
  );
};
