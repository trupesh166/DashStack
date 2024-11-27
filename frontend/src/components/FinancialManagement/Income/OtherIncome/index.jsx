import React, { useState } from 'react'
import style from "./OtherIncome.module.css"
import { CreateOtherIncomeModal, DSButton, DSCard } from '../../..'
import { OtherIncomeCard } from '../../../DSCards/OtherIncome'
import Icons from '../../../../constants/Icons'
import { Flex } from 'antd'

export const OtherIncome = () => {

  const [createOtherIncome, setCreateOtherIncome] = useState(false)

  return (
    <>
      <DSCard
        title={"Other Income"}
        headerContent={
          <DSButton
            variant={"primary"}
            onClick={() => setCreateOtherIncome(true)}
          >
            Create Other Income
          </DSButton>
        }
      >

        <Flex gap={"small"}>
          <OtherIncomeCard
            title={"Ganesh chaturthi"}
            amount={1500}
            totalMember={12}
            date={"10/10/2000"}
            dueDate={"10/10/2000"}
            description={"The celebration of Navratri involves the installation of clay idols of Durga in Resident."}
          />
          <OtherIncomeCard
            title={"Navratri"}
            amount={1500}
            totalMember={12}
            date={"10/10/2000"}
            dueDate={"10/10/2000"}
            description={"The celebration of Navratri involves the installation of clay idols of Durga in Resident."}
          />
          <OtherIncomeCard
            title={"Diwali"}
            amount={1500}
            totalMember={12}
            date={"10/10/2000"}
            dueDate={"10/10/2000"}
            description={"The celebration of Navratri involves the installation of clay idols of Durga in Resident."}
          />
        </Flex>

      </DSCard>

      {/* Create Other Income Modal */}
      <CreateOtherIncomeModal
        open={createOtherIncome}
        handleCancel={() => setCreateOtherIncome(false)}
        handleClose={() => setCreateOtherIncome(false)}
        handleOk={() => setCreateOtherIncome(false)}
      />

    </>
  )
}