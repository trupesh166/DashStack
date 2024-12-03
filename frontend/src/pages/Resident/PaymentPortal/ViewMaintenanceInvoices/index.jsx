import React, { useState } from 'react'
import { DSButton, DSCard, DSSelect, DSTable, MaintenanceInvoicesModal } from '../../../../components'
import Icons from '../../../../constants/Icons'

const data = [
  {
    invoiceNo: "152563",
    fullName: "Terry Rhiel Madsen",
    paymentDate: "10/02/2024",
    phoneNumber: "9764816457",
    email: "FrancesLHarris@rhyta.com",
    maintenanceAmount: "1000",
    pendingAmount: "2500",
  },
  {
    invoiceNo: "152564",
    fullName: "Marcus Vaccaro",
    paymentDate: "10/02/2024",
    phoneNumber: "9764816457",
    email: "FrancesLHarris@rhyta.com",
    maintenanceAmount: "1000",
    pendingAmount: "2500",
  },
]

export const ViewMaintenanceInvoices = () => {

  const [maintenanceInvoicesModal, setMaintenanceInvoicesModal] = useState(true)

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
      title: "Bill Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
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
      title: "Maintenance Amount",
      dataIndex: "maintenanceAmount",
      key: "maintenanceAmount",
      render: (maintenanceAmount) => <span style={{ color: "green" }}>₹ {maintenanceAmount}</span>,
      align: "center",
    },
    {
      title: "Pending Amount",
      dataIndex: "pendingAmount",
      key: "pendingAmount",
      render: (pendingAmount) => <span style={{ color: "red" }}>{pendingAmount}</span>,
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
          onClick={() => setMaintenanceInvoicesModal(true)}
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
      <MaintenanceInvoicesModal
        open={maintenanceInvoicesModal}
        handleCancel={() => setMaintenanceInvoicesModal(false)}
        handleClose={() => setMaintenanceInvoicesModal(false)}
        handleOk={() => setMaintenanceInvoicesModal(false)}
      />
    </>
  )
}