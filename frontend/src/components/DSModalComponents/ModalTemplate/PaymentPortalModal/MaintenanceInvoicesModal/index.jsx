import React from 'react'
import { DSModal } from '../../../..'

export const MaintenanceInvoicesModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
}) => {
  return (
    <DSModal
      title="Maintenance Invoices"
      open={open}
      handleCancel={handleCancel}
      handleClose={handleClose}
      handleOk={handleOk}
    >



    </DSModal>
  )
}