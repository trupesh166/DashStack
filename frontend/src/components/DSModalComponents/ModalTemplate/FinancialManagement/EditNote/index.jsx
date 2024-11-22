import React from 'react'
import { DSDatePicker, DSInput } from '../../../../FormComponents'
import TextArea from 'antd/es/input/TextArea'
import { DSModal } from '../../../..'
import style from "./EditNote.module.css"

export const EditNote = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
}) => {
  return (
    <div className={style.editNote}>
      <DSModal
        title="Edit Note"
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
            label={"Title"}
            placeholder={"Enter Title"}
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
            label={"Date"}
            placeholder={"Select Date"}
            style={{ width: "100%", height: "45px", borderRadius: "10px", padding: "0px 10px" }}
          />
        </div>

      </DSModal>
    </div>
  )
}
