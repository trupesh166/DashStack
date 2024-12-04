import React, { useState } from 'react'
import { DSButton, DSTabs } from '../../../components'
import { Complaint } from '../../../components/ServiceAndComplaint/Complaint';
import { Request } from '../../../components/ServiceAndComplaint/Request';

export const ServiceAndComplaint = () => {
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
          Complaint Submission
        </DSButton>
      ),
      children: <Complaint />,
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
          Request Submission
        </DSButton>
      ),
      children: <Request />,
    },
  ]

  return (
    <>
      <DSTabs items={items} onChange={onChange} />
    </>
  )
}