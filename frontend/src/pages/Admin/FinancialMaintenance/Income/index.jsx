import React, { useState } from 'react'
import { AddMaintenanceModal, DSButton } from '../../../../components';
import { Flex } from 'antd';

const Income = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Flex justify='end'>
      <DSButton
        variant={"primary"}
        onClick={() => setIsModalOpen(true)}
      >
        Set Maintenance
      </DSButton>
      <AddMaintenanceModal
        open={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
        handleClose={() => setIsModalOpen(false)}
      />
    </Flex>
  )
}

export default Income
