import React from 'react'
import { AnnouncementCard, DSCard } from '..'
import styles from "./PersonalDetails.module.css"

export const AnnouncementDetails = () => {
  return (
    <>
      {/* Announcement Details Card */}
      <DSCard
        title="Announcement Details"
        rootClass={"mb-4"}
        className="announcement-card-grid"
      >

        <AnnouncementCard
          title="Community Initiatives"
          date="01/02/2024"
          time="10:15 AM"
          description="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
        />
        <AnnouncementCard
          title="Community Initiatives"
          date="01/02/2024"
          time="10:15 AM"
          description="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
        />
        <AnnouncementCard
          title="Community Initiatives"
          date="01/02/2024"
          time="10:15 AM"
          description="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
        />
        <AnnouncementCard
          title="Community Initiatives"
          date="01/02/2024"
          time="10:15 AM"
          description="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
        />
      </DSCard>
    </>
  )
}
