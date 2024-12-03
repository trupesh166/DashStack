import React, { useState } from 'react'
import { AddVisitorDetailsModal, DSButton, DSCard, DSSelect, DSTable } from '../../../components'
import Icons from '../../../constants/Icons'
import { Avatar, Flex, Space, Tag } from 'antd'
import { useAddVisitorDetails, useListVisitorDetails } from '../../../hook/Security';

const data = [
  {
    key: "1",
    name: "Brooklyn Simmons",
    phone: "94564 96321",
    date: "10/02/2024",
    unit: {
      wingName: "A",
      unitNumber: 1001,
    },
    time: "2:45 PM",
  },
  {
    key: "2",
    name: "Brooklyn Simmons",
    phone: "94564 96321",
    date: "10/02/2024",
    wingName: "A",
    unit: {
      wingName: "A",
      unitNumber: 1002,
    },
    time: "2:45 PM",
  },
];

export const VisitorTracking = () => {

  const columns = [
    {
      title: "Visitor Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={record.avatar} width="40" style={{ marginRight: 8 }} />
          {text}
        </div>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      align: "center"
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center"
    },
    {
      title: "Unit Number",
      dataIndex: "unit",
      key: "unit",
      render: (unit) => (
        <div className='d-flex gap-3 align-items-center justify-content-center'>
          <Avatar style={{ backgroundColor: "var(--clr-pearl)", color: "var(--clr-cult)" }} >{unit.wingName}</Avatar>
          {unit.unitNumber}
        </div>
      ),
      align: "center"
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      align: "center"
    },
  ];

  const { submitVisitorDetails } = useAddVisitorDetails()
  const { visitorDetails, refetchVisitorDetails } = useListVisitorDetails()
  const [addVisitorDetailsModal, setAddVisitorDetailsModal] = useState(false)

  const handleModalSubmit = async (formData) => {
    const result = await submitVisitorDetails(formData, refetchVisitorDetails)
    if (result.success) {
      setAddVisitorDetailsModal(false)
    }
  }

  return (
    <>
      <DSCard
        title="Visitor Tracking"
        headerContent={
          <Flex align='center' gap={"middle"}>
            <DSSelect
              defaultValue="Week"
              options={[
                { label: "Day", value: "Day" },
                { label: "Week", value: "Week" },
                { label: "Month", value: "Month" },
              ]}
            />
            <DSButton
              icon={Icons.AddSquare}
              variant={"primary"}
              onClick={() => setAddVisitorDetailsModal(true)}
            >
              Add Visiter details
            </DSButton>
          </Flex>
        }
      >

        <DSTable
          dataSource={visitorDetails}
          tableColumn={columns}
          pagination={false}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
        />

      </DSCard>

      {
        addVisitorDetailsModal && (
          <AddVisitorDetailsModal
            open={addVisitorDetailsModal}
            handleCancel={() => setAddVisitorDetailsModal(false)}
            handleClose={() => setAddVisitorDetailsModal(false)}
            handleOk={(formData) => handleModalSubmit(formData)}
          />
        )
      }

    </>
  )
}
