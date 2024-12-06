import React from 'react'
import { AnnouncementCard, DSCard, MaintenanceCard, MemberCard, VehicleCard } from '../../../components'
import { Avatar, Col, Flex, Row } from 'antd'
import styles from "./PersonalDetail.module.css"
import Icons from '../../../constants/Icons'

export const PersonalDetail = () => {
  return (
    <div>

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
      >
        <Row gutter={[20, 16]}>
          <Col span={6}>
            <MemberCard
              title="Arlene McCoy"
              email="Arlenemccoy@gmail.com"
              phone="+91 99130 52221"
              age="22"
              gender="Male"
              relation="Brother"
            />
          </Col>
          <Col span={6}>
            <MemberCard
              title="Arlene McCoy"
              email="Arlenemccoy@gmail.com"
              phone="+91 99130 52221"
              age="22"
              gender="Male"
              relation="Brother"
            />
          </Col>
          <Col span={6}>
            <MemberCard
              title="Arlene McCoy"
              email="Arlenemccoy@gmail.com"
              phone="+91 99130 52221"
              age="22"
              gender="Male"
              relation="Brother"
            />
          </Col>
          <Col span={6}>
            <MemberCard
              title="Arlene McCoy"
              email="Arlenemccoy@gmail.com"
              phone="+91 99130 52221"
              age="22"
              gender="Male"
              relation="Brother"
            />
          </Col>
        </Row>
      </DSCard>

      {/* Vehicle Card */}
      <DSCard
        rootClass={"mb-4"}
        title={`Vehicle : (${"04"})`}
      >
        <Row gutter={[20, 16]}>
          <Col span={6}>
            <VehicleCard
              vehicleType={"Two Wheelers"}
              vehicleName={"Splendor"}
              vehicleNumber={"GJ-5216"}
            />
          </Col>
          <Col span={6}>
            <VehicleCard
              vehicleType={"Two Wheelers"}
              vehicleName={"Splendor"}
              vehicleNumber={"GJ-5216"}
            />
          </Col>
          <Col span={6}>
            <VehicleCard
              vehicleType={"Two Wheelers"}
              vehicleName={"Splendor"}
              vehicleNumber={"GJ-5216"}
            />
          </Col>
          <Col span={6}>
            <VehicleCard
              vehicleType={"Two Wheelers"}
              vehicleName={"Splendor"}
              vehicleNumber={"GJ-5216"}
            />
          </Col>
        </Row>
      </DSCard>

      {/* Maintenance Details */}
      <DSCard
        rootClass={"mb-4"}
        title="Show Maintenance Details"
        headerContent={
          <Flex gap="middle">
            <div className={styles.maintenanceAmount}>
              <div className={styles.maintenanceBox}></div>
              <h5 style={{ fontWeight: "500" }}>Maintenance Amount</h5>
              <h2 style={{ color: "var(--clr-success)", fontWeight: "bold" }}>
                {Icons.Rupee} 0
              </h2>
            </div>
            <div className={styles.penaltyAmount}>
              <div className={styles.penaltyBox}></div>
              <h5 style={{ fontWeight: "500" }}>Penalty Amount</h5>
              <h2 style={{ color: "var(--clr-danger)", fontWeight: "bold" }}>
                {Icons.Rupee} 0
              </h2>
            </div>
          </Flex>
        }
      />

      {/* Pending Maintanance Card */}
      <DSCard
        rootClass={"mb-4"}
        title="Pending Maintanance"
      >
        <Row gutter={[20, 16]}>
          <Col span={6}>
            <MaintenanceCard
              date="11/01/2024"
              datePending="11/01/2024"
              maintenance="1000"
              penalty="250"
              total="1250"
            />
          </Col>
          <Col span={6}>
            <MaintenanceCard
              date="11/01/2024"
              datePending="11/01/2024"
              maintenance="1000"
              penalty="250"
              total="1250"
            />
          </Col>
          <Col span={6}>
            <MaintenanceCard
              date="11/01/2024"
              datePending="11/01/2024"
              maintenance="1000"
              penalty="250"
              total="1250"
            />
          </Col>
          <Col span={6}>
            <MaintenanceCard
              date="11/01/2024"
              datePending="11/01/2024"
              maintenance="1000"
              penalty="250"
              total="1250"
            />
          </Col>
        </Row>
      </DSCard>

      {/* Announcement Details Card */}
      <DSCard title="Announcement Details" rootClass={"mb-4"}>
        <Row gutter={[20, 16]}>
          <Col span={6}>
            <AnnouncementCard
              title="Community Initiatives"
              date="01/02/2024"
              time="10:15 AM"
              description="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
            />
          </Col>
          <Col span={6}>
            <AnnouncementCard
              title="Community Initiatives"
              date="01/02/2024"
              time="10:15 AM"
              description="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
            />
          </Col>
          <Col span={6}>
            <AnnouncementCard
              title="Community Initiatives"
              date="01/02/2024"
              time="10:15 AM"
              description="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
            />
          </Col>
          <Col span={6}>
            <AnnouncementCard
              title="Community Initiatives"
              date="01/02/2024"
              time="10:15 AM"
              description="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
            />
          </Col>
        </Row>
      </DSCard>

    </div>
  )
}