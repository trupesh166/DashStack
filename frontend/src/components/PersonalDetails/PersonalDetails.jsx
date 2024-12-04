import React from 'react'
import { DSCard, MemberCard, VehicleCard } from '..'
import { Avatar, Col, Row } from 'antd'
import styles from "./PersonalDetails.module.css"
import Icons from '../../constants/Icons'

export const PersonalDetails = () => {
  return (
    <>
      {/* Personal detail */}
      <DSCard rootClass="mb-4">
        <Row>
          <Col span={3}>
            <h5 style={{ fontWeight: "500" }}>Owner Name</h5>
            <h5 style={{ color: "var(--clr-silver)" }}>Arlene McCoy</h5>
          </Col>
          <Col span={3}>
            <h5 style={{ fontWeight: "500" }}>Owner Phone</h5>
            <h5 style={{ color: "var(--clr-silver)" }}>+91 9575225165</h5>
          </Col>
          <Col>
            <h5 style={{ fontWeight: "500" }}>Owner Address</h5>
            <h5 style={{ color: "var(--clr-silver)" }}>C-101,Dhara Arcade , Mota Varacha Surat.</h5>
          </Col>
        </Row>
      </DSCard>

      <DSCard rootClass="mb-4">
        <Row align="middle">
          <Col span={3} style={{ display: "flex", justifyContent: "center" }}>
            <Avatar style={{ width: "130px", height: "130px", border: "5px solid #DFE0EB" }} src={"https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"} />
          </Col>
          <Col span={15}>
            <Row gutter={[0, 16]}>
              <Col span={4}>
                <h5 style={{ fontWeight: "500" }}>Full Name</h5>
                <h5 style={{ color: "var(--clr-silver)" }}>Arlene McCoy</h5>
              </Col>
              <Col span={4}>
                <h5 style={{ fontWeight: "500" }}>Phone Number</h5>
                <h5 style={{ color: "var(--clr-silver)" }}>+91 99130 44537</h5>
              </Col>
              <Col span={8}>
                <h5 style={{ fontWeight: "500" }}>Email Address</h5>
                <h5 style={{ color: "var(--clr-silver)" }}>ArleneMcCoy25@gmail.com</h5>
              </Col>
              <Col span={5}>
                <h5 style={{ fontWeight: "500" }}>Gender</h5>
                <h5 style={{ color: "var(--clr-silver)" }}>Male</h5>
              </Col>
              <Col span={4}>
                <h5 style={{ fontWeight: "500" }}>Wing</h5>
                <h5 style={{ color: "var(--clr-silver)" }}>A</h5>
              </Col>
              <Col span={4}>
                <h5 style={{ fontWeight: "500" }}>Age</h5>
                <h5 style={{ color: "var(--clr-silver)" }}>20</h5>
              </Col>
              <Col span={8}>
                <h5 style={{ fontWeight: "500" }}>Unit</h5>
                <h5 style={{ color: "var(--clr-silver)" }}>1001</h5>
              </Col>
              <Col span={5}>
                <h5 style={{ fontWeight: "500" }}>Relation</h5>
                <h5 style={{ color: "var(--clr-silver)" }}>Father</h5>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <div className='d-flex flex-column gap-3'>
              <div className={styles.document}>
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>Syncfusion Essential Adharcard Front Side.JPG</h6>
                  <h6>3.5 MB</h6>
                </div>
              </div>
              <div className={styles.document}>
                <h2>{Icons.Jpg}</h2>
                <div>
                  <h6>Address Proof Front Side.PDF</h6>
                  <h6>3.5 MB</h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </DSCard>

      {/* Member Card */}
      <DSCard
        rootClass={"mb-4"}
        title={`Member : (${"04"})`}
        className="announcement-card-grid"
      >
        <MemberCard
          title="Arlene McCoy"
          email="Arlenemccoy@gmail.com"
          phone="+91 99130 52221"
          age="22"
          gender="Male"
          relation="Brother"
        />
        <MemberCard
          title="Arlene McCoy"
          email="Arlenemccoy@gmail.com"
          phone="+91 99130 52221"
          age="22"
          gender="Male"
          relation="Brother"
        />
        <MemberCard
          title="Arlene McCoy"
          email="Arlenemccoy@gmail.com"
          phone="+91 99130 52221"
          age="22"
          gender="Male"
          relation="Brother"
        />
        <MemberCard
          title="Arlene McCoy"
          email="Arlenemccoy@gmail.com"
          phone="+91 99130 52221"
          age="22"
          gender="Male"
          relation="Brother"
        />
      </DSCard>

      {/* Vehicle Card */}
      <DSCard
        rootClass={"mb-4"}
        title={`Vehicle : (${"04"})`}
        className="announcement-card-grid"
      >
        <VehicleCard
          vehicleType={"Two Wheelers"}
          vehicleName={"Splendor"}
          vehicleNumber={"GJ-5216"}
        />
        <VehicleCard
          vehicleType={"Two Wheelers"}
          vehicleName={"Splendor"}
          vehicleNumber={"GJ-5216"}
        />
        <VehicleCard
          vehicleType={"Two Wheelers"}
          vehicleName={"Splendor"}
          vehicleNumber={"GJ-5216"}
        />
        <VehicleCard
          vehicleType={"Two Wheelers"}
          vehicleName={"Splendor"}
          vehicleNumber={"GJ-5216"}
        />
      </DSCard>
    </>
  )
}
