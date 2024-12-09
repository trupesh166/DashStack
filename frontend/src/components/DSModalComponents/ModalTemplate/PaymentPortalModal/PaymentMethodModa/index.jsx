import React from 'react'
import { DSInput, DSModal } from '../../../..'
import styles from "./PaymentMethodDetailModal.module.css"
import clsx from 'clsx'

export const PaymentMethodDetailModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
}) => {
  return (
    <DSModal
      title="Payment Method"
      open={open}
      handleCancel={handleCancel}
      handleClose={handleClose}
      handleOk={handleOk}
      IsFooter={true}
      disabledButton={false}
      handleContent="Pay Now"
    >

      <div className={clsx(styles.InputWrapper, "d-grid flex-column")}>
        <DSInput
          parentClassName={styles.colSpan}
          label="Card Name"
          placeholder="Enter Name"
          require={true}
        />
        <DSInput
          parentClassName={styles.colSpan}
          label="Card Number"
          placeholder="Enter card number"
          require={true}
        />
        <DSInput
          label="Card Name"
          placeholder="Enter Name"
          require={true}
        />
        <DSInput
          label="CVV"
          placeholder="***"
          require={true}
        />
      </div>

    </DSModal>
  )
}