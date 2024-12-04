import React, { useState } from 'react'
import { DSModal, DSRadioButton } from '../../../..'
import { Radio, Space } from 'antd';

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
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={"Master Card"}>Master Card</Radio>
          <Radio value={"Visa Card"}>Visa Card</Radio>
          <Radio value={"Cash Payment"}>Cash Payment</Radio>
        </Space>
      </Radio.Group>
    </DSModal>
  )
}