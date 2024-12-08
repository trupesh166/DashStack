import React, { useState } from 'react';
import { AddMaintenanceModal, DSModal, DSPasswordInput } from '../../../..';
import { useAddMaintenance } from '@/hook/Admin/FinancialMaintenance/';

export const SetMaintenance = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
  password,
  handlePasswordChange,
  errorMessage,
  isInvalid,
  isModalOpen,
  isSubmitting,
  closeHookModal,
  handleVerifyPassword,
}) => {

  // const {
  //   isInvalid,
  //   isModalOpen,
  //   isSubmitting,
  //   handleClose: closeHookModal,
  //   verifyAndCreateMaintenance,
  //   handleVerifyPassword
  // } = useAddMaintenance();

  // const [isInvalid, setIsInvalid] = useState(false);
  // const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const [addMaintenance, setAddMaintenance] = useState(false)
  // const [maintenanceData, setMaintenanceData] = useState(null);
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   setIsInvalid(false);
  //   setErrorMessage('');
  // };

  // const handleSubmit = () => {
  //   if (password !== '123') {
  //     setIsInvalid(true);
  //     setErrorMessage('Incorrect Password.');
  //   } else {
  //     setIsInvalid(false);
  //     setErrorMessage('');
  //     setAddMaintenance(true)
  //     handleOk();
  //   }
  // };
  const handleSubmit = () => {
    handleVerifyPassword();
    // handleOk();
  };
  const handleMaintenanceModalOpen = (data) => {
    // setMaintenanceData(data);
    closeHookModal();
  };

  return (
    <>
      <DSModal
        title="Set Maintenance"
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent="Continue"
        disabledButton={!password}
        // confirmLoading={isSubmitting}
      >
        <DSPasswordInput
          label={"Password"}
          placeholder={"Enter Password"}
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          isInvalid={isInvalid}
          errorMessage={errorMessage}
          require={true}
        />
      </DSModal>

      <AddMaintenanceModal
        open={isModalOpen}
        handleCancel={closeHookModal}
        handleClose={closeHookModal}
        handleOk={(data) => handleMaintenanceModalOpen(data)}
      />

    </>
  );
};
