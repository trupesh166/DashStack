import React from 'react'
import style from "./AddSecurityProtocolModal.module.css"
import { DSInput, DSModal } from '../../../..'
import TextArea from 'antd/es/input/TextArea'

export const AddSecurityProtocolModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk
}) => {
  return (
    <div className={style.addSecurityProtocolModal}>
      <DSModal
        title={"Security Protocol"}
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

      </DSModal>
    </div>
  )
}