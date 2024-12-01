import React from 'react'
import style from "./ViewDetailsModal.module.css"
import { Avatar, Card, Col, Drawer, Flex, Row } from 'antd'
import Icons from '../../../../../constants/Icons'
import { DSCard } from '../../../..'
import Icon from '@ant-design/icons'

export const ViewDetailsModal = ({
  title,
  open,
  handleClose,
}) => {
  return (
    <div>
      <Drawer
        className={style.drawer}
        title={<h3>{title}</h3>}
        onClose={handleClose}
        open={open}
        style={{ backgroundColor: "#f0f2f5" }}
        width={470}
      >
        <Row justify="center" className='mb-5'>
          <Col span={24} className='text-center mb-1'>
            <Avatar size={100} src={""} />
          </Col>
          <Col span={24} className='text-center mb-1'>
            <h3 className='fw-semibold'>Roger Lubin</h3>
          </Col>
          <Col span={24} className='text-center mb-1'>
            <h5>RogerLubin@gmail.com</h5>
          </Col>
        </Row>

        <DSCard rootClass={"mb-4"} >
          <Row>
            <Col span={12} style={{ fontWeight: "600" }}>
              Wing
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              A
            </Col>
          </Row>
          <hr className={style.hr} />
          <Row>
            <Col span={12} style={{ fontWeight: "600" }}>
              Unit
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              101
            </Col>
          </Row>
          <hr className={style.hr} />
          <Row>
            <Col span={12} style={{ fontWeight: "600" }}>
              Age
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              20
            </Col>
          </Row>
          <hr className={style.hr} />
          <Row>
            <Col span={12} style={{ fontWeight: "600" }}>
              Gender
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              Male
            </Col>
          </Row>
        </DSCard>

        <DSCard title={"Document"} rootClass={"mb-4"}>
          <Row justify={"space-between"} align={"middle"} className={style.document} >
            <Col>
              <Row align={"middle"} gutter={12}>
                <Col>
                  <h3>{Icons.Jpg}</h3>
                </Col>
                <Col>
                  <h6>Adharcard Front Side.JPG</h6>
                  <p style={{ color: "var(--clr-silver)" }}>3.5 MB</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <h3 style={{ color: "var(--clr-silver)" }}>{Icons.EyeShow}</h3>
            </Col>
          </Row>

          <Row justify={"space-between"} align={"middle"} className={style.document} >
            <Col>
              <Row align={"middle"} gutter={12}>
                <Col>
                  <h3>{Icons.Pdf}</h3>
                </Col>
                <Col>
                  <h6>Adharcard Front Side.JPG</h6>
                  <p style={{ color: "var(--clr-silver)" }}>3.5 MB</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <h3 style={{ color: "var(--clr-silver)" }}>{Icons.EyeShow}</h3>
            </Col>
          </Row>
        </DSCard>

        <Card title="Member Counting">
          <DSCard rootClass={"mb-4"}>
            <div className={"card-grid"}>
              <h6 className="fw-semibold">First Name</h6>
              <h6>Roger Lubin</h6>
            </div>
            <div className={"card-grid"}>
              <h6 className="fw-semibold">Phone No</h6>
              <h6>9123455555</h6>
            </div>
            <div className={"card-grid"}>
              <h6 className="fw-semibold">Age</h6>
              <h6>20</h6>
            </div>
            <div className={"card-grid"}>
              <h6 className="fw-semibold">Gender</h6>
              <h6>Male</h6>
            </div>
            <div className={"card-grid"}>
              <h6 className="fw-semibold">Relation</h6>
              <h6>Brother</h6>
            </div>
          </DSCard>

          <DSCard>
            <div className={"card-grid"}>
              <h6 className="fw-semibold">First Name</h6>
              <h6>Lubin Roger</h6>
            </div>
            <div className={"card-grid"}>
              <h6 className="fw-semibold">Phone No</h6>
              <h6>0123456789</h6>
            </div>
            <div className={"card-grid"}>
              <h6 className="fw-semibold">Age</h6>
              <h6>22</h6>
            </div>
            <div className={"card-grid"}>
              <h6 className="fw-semibold">Gender</h6>
              <h6>Female</h6>
            </div>
            <div className={"card-grid"}>
              <h6 className="fw-semibold">Relation</h6>
              <h6>Sister</h6>
            </div>
          </DSCard>
        </Card>
      </Drawer>
    </div>
  )
}