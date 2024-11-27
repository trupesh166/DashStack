import React, { useState } from 'react';
import { AddMaintenanceModal, DSModal, DSPasswordInput } from '../../../..';

export const SetMaintenance = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
}) => {
  const [password, setPassword] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [addMaintenance, setAddMaintenance] = useState(false)

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsInvalid(false);
    setErrorMessage('');
  };

  const handleSubmit = () => {
    if (password !== '123') {
      setIsInvalid(true);
      setErrorMessage('Incorrect Password.');
    } else {
      setIsInvalid(false);
      setErrorMessage('');
      setAddMaintenance(true)
      handleOk();
    }
  };

  return (
    <>
      <DSModal
        title="Set Maintenance"
        open={open}
        closeIcon
        handleOk={handleSubmit}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent="Continue"
        disabledButton={false}

      >
        <DSPasswordInput
          label={"Password"}
          placeholder={"Enter Password"}
          value={password}
          onChange={handlePasswordChange}
          isInvalid={isInvalid}
          errorMessage={errorMessage}
          require={true}
        />
      </DSModal>

      <AddMaintenanceModal
        open={addMaintenance}
        handleCancel={() => setAddMaintenance(false)}
        handleClose={() => setAddMaintenance(false)}
        handleOk={() => setAddMaintenance(false)}
      />

    </>
  );
};
