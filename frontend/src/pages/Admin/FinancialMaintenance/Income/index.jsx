import React, { useState } from 'react'
import { DSButton, DSCard, DSTabs, SetMaintenance } from '../../../../components';
import Icons from '../../../../constants/Icons';
import style from "./Income.module.css"
import { Flex } from 'antd';
import { Maintenance } from '../../../../components/FinancialManagement/Income/Maintenance';
import { OtherIncome } from '../../../../components/FinancialManagement/Income/OtherIncome';

const Income = () => {

  const [maintenance, setMaintenance] = useState(false)
  const [activeTab, setActiveTab] = useState('1');

  const onChange = (key) => {
    setActiveTab(key);
  }

  const items = [
    {
      key: '1',
      label: (
        <DSButton
          variant={activeTab === "1" ? "primary" : "default"}
          style={{
            color: activeTab === '1' ? 'white' : 'black',
            padding: '8px 16px',
            borderRadius: '8px',
          }}
        >
          Maintenance
        </DSButton>
      ),
      children: <Maintenance />,
    },
    {
      key: '2',
      label: (
        <DSButton
          variant={activeTab === "2" ? "primary" : "default"}
          style={{
            color: activeTab === '2' ? 'white' : 'black',
            padding: '8px 16px',
            borderRadius: '8px',
          }}
        >
          Other Income
        </DSButton>
      ),
      children: <OtherIncome />,
    },
  ]

  return (
    <>
      <DSCard className={"mb-3"}>

        <Flex justify='space-between' align='center'>
          <Flex gap="middle">
            <div className={style.maintenanceAmount}>
              <div className={style.maintenanceBox}></div>
              <h5 style={{ fontWeight: "500" }}>Maintenance Amount</h5>
              <h2 style={{ color: "var(--clr-success)", fontWeight: "bold" }}>{Icons.Rupee} 0</h2>
            </div>
            <div className={style.penaltyAmount}>
              <div className={style.penaltyBox}></div>
              <h5 style={{ fontWeight: "500" }}>Penalty Amount</h5>
              <h2 style={{ color: "var(--clr-danger)", fontWeight: "bold" }}>{Icons.Rupee} 0</h2>
            </div>
          </Flex>

          <DSButton
            variant={"primary"}
            onClick={() => setMaintenance(true)}
          >
            Set Maintenance
          </DSButton>

        </Flex>

      </DSCard>

      <DSTabs
        className={style.tabs}
        items={items}
        onChange={onChange}
      />

      {/* Set Maintenance Modal */}
      <SetMaintenance
        open={maintenance}
        handleOk={() => setMaintenance(false)}
        handleCancel={() => setMaintenance(false)}
        handleClose={() => setMaintenance(false)}
      />

    </>
  )
}

export default Income
