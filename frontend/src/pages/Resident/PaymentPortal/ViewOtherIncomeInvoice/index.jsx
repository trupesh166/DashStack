import React, { useState } from 'react'
import { DSButton, DSCard, DSSelect, DSTable, DueMaintenanceCard, EventInvoicesModal } from '../../../../components'
import Icons from '../../../../constants/Icons'

const data = [
  {
    invoiceNo: "152563",
    fullName: "Terry Rhiel Madsen",
    paymentDate: "10/02/2024",
    date: "10/02/2024",
    phoneNumber: "9764816457",
    email: "FrancesLHarris@rhyta.com",
    title: "Ganesh Chaturthi",
    description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Lord Ganesa in  OurResident.",
    maintenanceAmount: "1000",
  },
  {
    invoiceNo: "152564",
    fullName: "Rhiel Madsen",
    paymentDate: "10/02/2024",
    date: "10/02/2024",
    phoneNumber: "9764816457",
    email: "FrancesLHarris@rhyta.com",
    title: "Ganesh Chaturthi",
    description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Lord Ganesa in  OurResident.",
    maintenanceAmount: "1000",
  },
]

export const ViewOtherIncomeInvoice = () => {

  const [eventInvoicesModal, setEventInvoicesModal] = useState(false)

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoiceNo",
      key: "invoiceNo",
      align: "center",
    },
    {
      title: "Owner Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Bill Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      align: "center",
    },
    {
      title: "Payment Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      align: "center",
    },
    {
      title: "Event Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Event Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Maintenance Amount",
      dataIndex: "maintenanceAmount",
      key: "maintenanceAmount",
      render: (maintenanceAmount) => <span style={{ color: "green" }}>₹ {maintenanceAmount}</span>,
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <DSButton
          type="primary"
          size="small"
          icon={Icons.EyeShow}
          className="clr-cult"
          onClick={() => setEventInvoicesModal(true)}
        />
      ),
      align: "center",
    },
  ]

  return (
    <>
      <DSCard
        title={"Maintenance Invoices"}
        headerContent={
          <DSSelect
            defaultValue="Month"
            options={[
              { label: "Month", value: "Month" },
              { label: "Year", value: "Year" },
            ]}
          />
        }
      >
        <DSTable
          dataSource={data}
          tableColumn={columns}
          pagination={false}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
        />
      </DSCard>

      {/* View  */}
      <EventInvoicesModal
        open={eventInvoicesModal}
        handleCancel={() => setEventInvoicesModal(false)}
        handleClose={() => setEventInvoicesModal(false)}
        handleOk={() => setEventInvoicesModal(false)}
      />
    </>
  )
}