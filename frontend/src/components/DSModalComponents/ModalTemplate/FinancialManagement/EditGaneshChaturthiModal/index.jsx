import React from 'react'
import style from "./EditGaneshChaturthiModal.module.css"
import { DSDatePicker, DSInput, DSModal } from '../../../..'
import TextArea from 'antd/es/input/TextArea'

export const EditGaneshChaturthiModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
}) => {
  return (
    <div>
      <DSModal
        title="Edit Ganesh Chaturthi"
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent="Apply"
        disabledButton={false}
      >
        <div>

          <div className="mb-4">
            <DSInput
              block
              label={"Amount"}
              placeholder={"0000"}
            />
          </div>

          <div className="d-flex align-items-center justify-content-between gap-4 mb-4">
            <DSDatePicker
              block
              type="Date"
              label={"Maintenance Due Date"}
              placeholder={"Select Date"}
              style={{ width: "100%", height: "45px", borderRadius: "10px", padding: "0px 10px" }}
            />

            <DSDatePicker
              block
              type="Due Date"
              label={"Maintenance Due Date"}
              placeholder={"Select Date"}
              style={{ width: "100%", height: "45px", borderRadius: "10px", padding: "0px 10px" }}
            />

          </div>

          <div className="mb-4">
            <h5>Description</h5>
            <TextArea
              placeholder="Autosize height with minimum and maximum number of lines"
              autoSize={{
                minRows: 2,
                maxRows: 6,
              }}
            />
          </div>

        </div>
      </DSModal>
    </div>
  )
}