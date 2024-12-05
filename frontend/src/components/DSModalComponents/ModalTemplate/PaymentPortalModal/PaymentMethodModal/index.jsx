import React, { useState } from 'react'
import { DSModal, DSRadioButton } from '../../../..'
import { Avatar, Radio, Space } from 'antd';
import styles from "./PaymentMethodModal.module.css"
import Icons from '../../../../../constants/Icons';

export const PaymentMethodModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
}) => {
  const [value, setValue] = useState(null);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
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
      <Radio.Group
        className={styles.paymentRadioGroup}
        onChange={onChange}
      >
        <Radio.Button value="mastercard" className={styles.radioButton}>
          <div className={styles.radioContent}>
            <Avatar
              shape="square"
              size={"large"}
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
            />
            Master Card
          </div>
        </Radio.Button>
        <Radio.Button value="visa" className={styles.radioButton}>
          <div className={styles.radioContent}>
            <Avatar
              shape="square"
              size={"large"}
              alt="Visa"
              style={{ color: "var(--clr-cult)", backgroundColor: "#F4F4F4" }}
            >
              Visa
            </Avatar>
            Visa Card
          </div>
        </Radio.Button>
        <Radio.Button value="cash" className={styles.radioButton}>
          <div className={styles.radioContent}>
            <Avatar
              shape="square"
              size={"large"}
              icon={Icons.Moneys}
              alt="Cash"
              style={{ color: "var(--clr-dark)", backgroundColor: "#F4F4F4" }}
            />
            Cash Payment
          </div>
        </Radio.Button>
      </Radio.Group>

    </DSModal>
  )
}