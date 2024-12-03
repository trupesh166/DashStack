import React from 'react'
import ResidentDetail from '../../../../components/ResidentManagement/ResidentDetail'
import { FamilyDetail } from '../../../../components/ResidentManagement/FamilyDetail'
import { VehicleDetail } from '../../../../components/ResidentManagement/VehicleDetail'
import { DSButton } from '../../../../components'

export const Resident = () => {
  return (
    <>

      <div className='mb-5'>
        <ResidentDetail />
      </div>
      <div className='mb-5'>
        <FamilyDetail />
      </div>
      <div className='mb-5'>
        <VehicleDetail />
      </div>

      <div className='d-flex gap-5 justify-content-end'>
        <DSButton className="bg-white">Cancel</DSButton>
        <DSButton>Create</DSButton>
      </div>

    </>
  )
}