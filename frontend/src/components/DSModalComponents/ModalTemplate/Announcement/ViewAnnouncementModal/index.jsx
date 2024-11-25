import React from 'react'
import style from "./ViewAnnouncementModal.module.css"
import { DSModal } from '../../../..'
import { Col, Row } from 'antd'

export const ViewAnnouncementModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk
}) => {
  return (
    <div>

      <DSModal
        title={"View Announcement"}
        open={open}
        closeIcon
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleClose={handleClose}
        IsFooter={false}
      >
        <Row className='mb-4'>
          <Col span={24}><h5 className={style.silver}>Title</h5></Col>
          <Col><h5 className={style.dark}>Physical Security</h5></Col>
        </Row>

        <Row className='mb-4'>
          <Col><h5 className={style.silver}>Description</h5></Col>
          <Col><h5 className={style.dark}>A visual representation of your spending categories visual representation. </h5></Col>
        </Row>

        <Row className='mb-4'>
          <Col span={12}>
            <h5 className={style.silver}>Date</h5>
            <h5 className={style.dark}>01/02/2024</h5>
          </Col>
          <Col span={12}>
            <h5 className={style.silver}>Time</h5>
            <h5 className={style.dark}>3:45 PM</h5>
          </Col>
        </Row>

      </DSModal>

    </div>
  )
}