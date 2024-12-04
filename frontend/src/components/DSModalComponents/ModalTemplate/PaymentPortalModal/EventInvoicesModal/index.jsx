import React from 'react'
import { DSButton, DSCard, DSModal } from '../../../..'
import clsx from 'clsx'
import Icons from '../../../../../constants/Icons'
import styles from "./EventInvoicesModal.module.css"

export const EventInvoicesModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
}) => {
  return (
    <DSModal
      title="Event Invoices List"
      open={open}
      closeIcon
      handleCancel={handleCancel}
      handleClose={handleClose}
      handleOk={handleOk}
    >

      <DSCard rootClass={styles.card}>
        <div className={clsx(styles.InputWrapper, "d-grid flex-column gap-4")}>
          <div>
            <h5 className='clr-silver'>Invoice Id</h5>
            <h5>125465</h5>
          </div>
          <div>
            <h5 className='clr-silver'>Owner Name</h5>
            <h5>Terry Rhiel Madsen</h5>
          </div>
          <div>
            <h5 className='clr-silver'>Bill Date</h5>
            <h5>10/02/2024</h5>
          </div>
          <div>
            <h5 className='clr-silver'>Payment Date</h5>
            <h5>10/02/2024</h5>
          </div>
          <div>
            <h5 className='clr-silver'>Event Date</h5>
            <h5>10/02/2024</h5>
          </div>
          <div>
            <h5 className='clr-silver'>Phone Number</h5>
            <h5>6549873521</h5>
          </div>
          <div className={styles.colSpan}>
            <h5 className='clr-silver'>Email</h5>
            <h5>MaryDHurst@jourrapide.com</h5>
          </div>
          <div className={styles.colSpan}>
            <h5 className='clr-silver'>Event Name</h5>
            <h5>Ganesh Chaturthi</h5>
          </div>
          <div className={styles.colSpan}>
            <h5 className='clr-silver'>Description</h5>
            <h5>The celebration of Ganesh Chaturthi involves the installation of clay idols of Lord Ganesa in  OurResident.</h5>
          </div>
        </div>
      </DSCard>

      <DSCard rootClass={styles.card}>
        <div className="card-grid">
          <h6>Maintenance Amount</h6>
          <h6 className='clr-success'>{Icons.Rupee} 1500.00</h6>
        </div>
        <div className="card-grid">
          <h6 className='fw-semibold'>Grand Total</h6>
          <h6 className='lh-1 fw-semibold'>{Icons.Rupee} 1850.00</h6>
        </div>
      </DSCard>

      <DSCard rootClass={styles.card}>
        <div>
          <h6 className='clr-silver'>Note</h6>
          <span className="fw-medium lh-base h6">A visual representation of your spending categories visual representation. </span>
        </div>
      </DSCard>

      <DSButton block size={"small"} variant={"primary"} icon={Icons.AddSquare}>Download Invoice</DSButton>

    </DSModal>
  )
}