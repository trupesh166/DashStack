import React, { useState } from 'react'
import styles from "./AddVisitorDetailsModal.module.css"
import { DSDatePicker, DSInput, DSModal } from '../../..'
import clsx from 'clsx'
import { TimePicker } from 'antd'
import UseDecodeToken from '../../../../hook/UseDecodeToken'
import { time } from 'ag-charts-community'

export const AddVisitorDetailsModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk
}) => {

  const { societyId } = UseDecodeToken();
  console.log(societyId)

  const [formData, setFormData] = useState({
    societyId: societyId,
    // securityId: "",
    visitorName: "",
    wingName: "",
    unitNumber: "",
    date: null,
    time: null,
  })

  const isFormValid = formData.visitorName || formData.wingName || formData.unitNumber || formData.date || formData.time

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    handleOk(formData);
    console.log(formData)
  };

  return (
    <DSModal
      title="Add Visitor Details"
      open={open}
      handleCancel={() => {
        setFormData({
          societyId: societyId || "",
          // securityId: securityId || "",
          visitorName: "",
          wingName: "",
          unitNumber: "",
          date: null,
          time: null,
        })
        handleCancel()
      }}
      handleClose={handleClose}
      handleOk={handleSave}
      IsFooter={true}
      handleContent="Save"
      disabledButton={!isFormValid}
    >

      <form>
        <div className={clsx(styles.InputWrapper, "d-grid flex-column")}>
          <DSInput
            parentClassName={styles.colSpan}
            label="Visitor Name"
            placeholder="Enter Name"
            value={formData.visitorName}
            onChange={(e) => handleChange("visitorName", e.target.value)}
            require
          />
          <DSInput
            label="Wing"
            placeholder="Enter Wing"
            value={formData.wingName}
            onChange={(e) => handleChange("wingName", e.target.value)}
            require
          />
          <DSInput
            label="Unit"
            placeholder="Enter Unit"
            value={formData.unitNumber}
            onChange={(e) => handleChange("unitNumber", e.target.value)}
            require
          />
          <DSDatePicker
            label="Date"
            placeholder="Select Date"
            value={formData.date}
            onChange={(value) => handleChange("date", value)}
            require
            style={{ height: "47px", padding: "0px 12px" }}
          />

          <div className='d-grid flex-column'>
            <label>Time</label>
            <TimePicker
              use12Hours
              format="h:mm a"
              value={formData.time}
              onChange={(value) => handleChange("time", value)}
              style={{ height: "47px", padding: "0px 12px" }}
            />
          </div>

        </div>
      </form>

    </DSModal>
  )
}