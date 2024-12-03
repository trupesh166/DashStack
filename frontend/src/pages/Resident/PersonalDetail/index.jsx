import React from 'react'
import { AnnouncementCard, DSCard, MaintenanceCard, MemberCard, VehicleCard } from '../../../components'
import { Avatar, Col, Flex, Row } from 'antd'
import styles from "./PersonalDetail.module.css"
import Icons from '../../../constants/Icons'
import { PersonalDetails } from '../../../components/PersonalDetails/PersonalDetails'
import { MaintananceDetails } from '../../../components/PersonalDetails/MaintananceDetails'
import { AnnouncementDetails } from '../../../components/PersonalDetails/AnnouncementDetails'

export const PersonalDetail = () => {
  return (
    <>
      <PersonalDetails />
      <MaintananceDetails />
      <AnnouncementDetails />
    </>
  )
}