import React, { useRef } from 'react'
import style from "./EditSecurityModal.module.css"
import { DSDatePicker, DSInput, DSModal, DSSelect } from '../../../..';
import { Avatar, Col, Flex, Row } from 'antd';
import Icons from '../../../../../constants/Icons';

export const EditSecurityModal = ({
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
    <div className={style.editSecurityModal}>
      <DSModal
        title={"Edit Security"}
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
          <Avatar size={64} src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" />
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

        <Row className='mb-4'>
          <Col span={24}><h5 className={style.dark}>Upload Aadhar Card</h5></Col>
          <Col span={24} className='mt-3'>
            <Row>
              <Col span={2}><h2>{Icons.Jpg}</h2></Col>
              <Col span={20}>
                <Row>
                  <Col span={24}><h6 className={style.dark}>Adharcard Front Side.JPG</h6></Col>
                  <Col span={24}><h6 className={style.silver}>3.5 MB</h6></Col>
                </Row>
              </Col>
              <Col span={2}><div className={style.silver}>{Icons.EyeShow}</div></Col>
            </Row>
          </Col>
        </Row>

      </DSModal>
    </div>
  )
}