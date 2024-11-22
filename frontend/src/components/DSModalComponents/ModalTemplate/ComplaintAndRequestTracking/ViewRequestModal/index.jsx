import React from 'react'
import style from "./ViewRequestModal.module.css"
import { DSModal } from '../../../..'
import { Avatar, Col, Row } from 'antd'

export const ViewRequestModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
}) => {
  return (
    <div className={style.viewRequest}>

      <DSModal
        title="View Complaint"
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter={false}
        handleContent="Create"
        disabledButton={false}
      >

        <Row align="middle" gutter={16} className='mb-4'>
          <Col>
            <Avatar size={70} src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D" />
          </Col>
          <Col>
            <h4 className='fw-semibold'>Evelyn Harper</h4>
            <h5 type="secondary">Aug 5, 2024</h5>
          </Col>
        </Row>

        <Row gutter={[0, 16]} className='mb-4'>
          <Col span={24}>
            <h5 strong>Request Name</h5>
            <div>Unethical Behavior</div>
          </Col>
          <Col span={24}>
            <h5 strong>Description</h5>
            <div>
              Offering, giving, receiving, or soliciting of value to influence the
              actions of an individual.
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col span={6}>
            <h5>Wing</h5>
            <div>
              A
            </div>
          </Col>
          <Col span={6}>
            <h5>Unit</h5>
            <div>1002</div>
          </Col>
          <Col span={6}>
            <h5>Priority</h5>
            <div>
              Medium
            </div>
          </Col>
          <Col span={6}>
            <h5>Status</h5>
            <div>Open</div>
          </Col>
        </Row>

      </DSModal>
    </div>
  )
}