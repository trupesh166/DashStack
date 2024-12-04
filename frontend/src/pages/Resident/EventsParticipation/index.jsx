import React, { useState } from 'react'
import { DSButton, DSTabs } from '../../../components'
import { Events } from '../../../components/EventsParticipation/Events';
import { Activity } from '../../../components/EventsParticipation/Activity';

export const EventsParticipation = () => {

  const [activeTab, setActiveTab] = useState("1");

  const onChange = (key) => {
    setActiveTab(key);
  }

  const items = [
    {
      key: '1',
      label: (
        <DSButton
          variant={activeTab === "1" ? "primary" : "default"}
          style={{
            color: activeTab === "1" ? "white" : "black",
            padding: "8px 16px",
            borderRadius: "8px",
          }}
        >
          Events Participate
        </DSButton>
      ),
      children: <Events />,
    },
    {
      key: '2',
      label: (
        <DSButton
          variant={activeTab === "2" ? "primary" : "default"}
          style={{
            color: activeTab === "2" ? "white" : "black",
            padding: "8px 16px",
            borderRadius: "8px",
          }}
        >
          Activity Participate
        </DSButton>
      ),
      children: <Activity />,
    },
  ]

  return (
    <>
      <DSTabs items={items} onChange={onChange} />
    </>
  )
}