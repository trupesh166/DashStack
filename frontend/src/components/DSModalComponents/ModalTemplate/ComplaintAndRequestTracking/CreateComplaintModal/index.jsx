import React from 'react'
import style from "./CreateComplaintModal.module.css"
import { DSInput, DSModal, DSRadioButton } from '../../../..'
import TextArea from 'antd/es/input/TextArea'
import { Flex } from 'antd'

export const CreateComplaintModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
}) => {
  return (
    <div className={style.createComplaint}>

      <DSModal
        title="Create Complaint"
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent="Create"
        disabledButton={false}
      >

        <DSInput
          className="mb-4"
          label={"Complainer Name"}
          placeholder={"Enter Name"}
        />

        <DSInput
          className="mb-4"
          label={"Complainer Name"}
          placeholder={"Enter Name"}
        />

        <div className="mb-4">
          <h5 className={style.h5}>Description</h5>
          <TextArea
            placeholder='Enter Description'
            autoSize={{
              minRows: 1.5,
              maxRows: 6,
            }}
          />
        </div>

        <Flex justify='space-between' className='mb-4'>
          <DSInput
            block
            label={"Wing"}
            placeholder={"Enter Wing"}
          />
          <DSInput
            block
            label={"Unit"}
            placeholder={"Enter Unit"}
          />
        </Flex>

        <DSRadioButton
          className="mb-4"
          block
          label={"Priority"}
          options={[
            { label: "High", value: "High" },
            { label: "Medium", value: "Medium" },
            { label: "Low", value: "Low" },
          ]}
          optionType={"button"}
        />

        <DSRadioButton
          className="mb-4"
          block
          label={"Status"}
          options={[
            { label: "Open", value: "Open" },
            { label: "Pending", value: "Pending" },
            { label: "Solve", value: "Solve" },
          ]}
          optionType={"button"}
          type={"radio"}
        />

      </DSModal>
    </div>
  )
}
