import React, { useRef } from 'react'
import style from "./AddExpensesDetailsModal.module.css"
import Icons from '../../../../../constants/Icons'
import TextArea from 'antd/es/input/TextArea'
import { DSDatePicker, DSInput, DSModal } from '../../../..'

export const AddExpensesDetailsModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
}) => {

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={style.addExpensesDetails}>
      <DSModal
        title="Add Expenses Details"
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
              label={"Title"}
              placeholder={"Enter Title"}
            />
          </div>
          <div className="mb-4">
            <h5>Description</h5>
            <TextArea
              placeholder='Enter Description'
              autoSize={{
                minRows: 2,
                maxRows: 6,
              }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <DSDatePicker
              block
              label={"Date"}
              placeholder={"Select Date"}
              style={{ height: "45px", borderRadius: "10px", padding: "0px 10px" }}
            />
            <DSInput
              block
              label={"Amount"}
              placeholder={"0000"}
              prefix={Icons.Rupee}
            />
          </div>

          <div className="mb-4">
            <label>Upload Bill</label>
            <input
              ref={fileInputRef}
              className="d-none"
              label={"Upload Bill"}
              type='file'
            />
            <div className={style.uploadImage} onClick={handleUploadClick}>
              {Icons.AddImage}
              <h6 className='fw-bold'>Upload a file <span className='fw-bold'>or drag and drop</span></h6>
              <p>PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </DSModal>
    </div>
  )
}

