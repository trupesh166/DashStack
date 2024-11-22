import React from 'react'
import { DSDatePicker, DSInput, DSModal, DSSelect } from '../../../..'
import TextArea from 'antd/es/input/TextArea'
import style from "./EditFacilityModal.module.css"

export const EditFacilityModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
}) => {
  return (
    <div className={style.editFacilityModal}>
      <DSModal
        title="Edit Facility"
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
          <DSInput
            label={" Facility Name"}
            placeholder={"Enter Name"}
          />
        </div>

        <div className="mb-4">
          <h5 className={style.h5}>Description</h5>
          <TextArea
            placeholder='Enter Description'
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
            style={{ width: "100%", height: "45px", borderRadius: "10px", padding: "0px 10px" }}
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
  )
}
