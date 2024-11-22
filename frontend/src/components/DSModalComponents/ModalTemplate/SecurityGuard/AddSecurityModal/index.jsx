import React, { useRef } from 'react'
import style from "./AddSecurityModal.module.css"
import { DSDatePicker, DSInput, DSModal, DSSelect } from '../../../..'
import Icons from '../../../../../constants/Icons'
import { Avatar, Flex } from 'antd'

export const AddSecurityModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk
}) => {

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={style.addSecurityModal}>
      <DSModal
        title={"Add Security"}
        open={open}
        closeIcon
        handleCancel={handleCancel}
        handleClose={handleClose}
        handleOk={handleOk}
        IsFooter={true}
        handleContent={"Create"}
        disabledButton={false}
      >

        <Flex align='center' gap={"middle"} className='mb-4 cursor-pointer' onClick={handleUploadClick}>
          <input type="file" className='d-none' ref={fileInputRef} accept='image/*' />
          <Avatar size={64} icon={Icons.User} />
          <h5 className={style.h5}>Add Photo</h5>
        </Flex>

        <DSInput
          className="mb-4"
          label={"Full Name"}
          placeholder={"Enter Full Name"}
        />

        <DSInput
          className="mb-4"
          label={"Phone Number"}
          placeholder={"+91"}
        />

        <Flex gap={"middle"} justify='space-between' align='center' className="mb-4">
          <DSSelect
            block={true}
            label={"Gender"}
            placeholder={"Select Gender"}
            options={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
            style={{ width: "100%", height: "45px", borderRadius: "20px" }}
          />
          <DSSelect
            block={true}
            label={"Shift"}
            placeholder={"Select Shift"}
            options={[
              { label: "Day Shift", value: "Day Shift" },
              { label: "Night Shift", value: "Night Shift" },
            ]}
            style={{ width: "100%", height: "45px", borderRadius: "10px" }}
          />
        </Flex>

        <Flex justify='space-between' align='center' className="mb-4">
          <DSDatePicker
            block={true}
            label={"Shift Date"}
            placeholder={"Select Date"}
            style={{ height: "45px", borderRadius: "10px", padding: "0px 10px" }}
          />
          <DSInput
            block={true}
            label={"Shift Time*"}
            placeholder={"Select Time"}
          />
        </Flex>

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

      </DSModal>
    </div>
  )
}