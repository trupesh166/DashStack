import React from 'react'
import style from "./EditSecurityProtocolModal.module.css"
import { DSDatePicker, DSInput } from '../../../../FormComponents'
import TextArea from 'antd/es/input/TextArea'
import { DSModal } from '../../../..'

export const EditSecurityProtocolModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk
}) => {
  return (
    <div className={style.editSecurityProtocolModal}>
      <DSModal
        title={"Edit Security Protocol"}
        open={open}
        closeIcon
        handleCancel={handleCancel}
        handleClose={handleClose}
        handleOk={handleOk}
        IsFooter
        handleContent={"Save"}
        disabledButton={false}
      >

        <DSInput
          className="mb-4"
          label={"Title"}
          placeholder={"Enter Title"}
        />

        <div className='mb-4'>
          <h6 className={style.dark}>Description</h6>
          <TextArea
            placeholder='Enter Description'
            autoSize={{ minRows: 1.5, maxRows: 5 }}
          />
        </div>

        <div className='d-flex justify-content-between'>
          <DSDatePicker
            block
            label={"Date"}
            style={{ width: "100%", height: "45px", borderRadius: "10px", padding: "0px 10px" }}
          />
          <DSInput
            block
            label={"Time"}
            placeholder={"Time"}
          />
        </div>

      </DSModal>
    </div>
  )
}