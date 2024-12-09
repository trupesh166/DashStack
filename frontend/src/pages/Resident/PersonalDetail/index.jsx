import React from 'react'
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