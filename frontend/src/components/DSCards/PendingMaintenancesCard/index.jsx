import React from 'react'
import style from "./PendingMaintenancesCard.module.css"
import { Card, Flex } from 'antd'
import { DSButton } from '../..'
import Icons from "@/constants/Icons";

export const PendingMaintenancesCard = () => {

  const pendingMaintenancesData = [
    {
      _id: 1,
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s",
      fullName: "Roger Lubin",
      dueDays: "2 Month Pending",
      maintenanceAmount: "5000"
    },
    {
      _id: 2,
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s",
      fullName: "Roger Lubin",
      dueDays: "2 Month Pending",
      maintenanceAmount: "5000"
    },
    {
      _id: 3,
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s",
      fullName: "Roger Lubin",
      dueDays: "2 Month Pending",
      maintenanceAmount: "5000"
    },
    {
      _id: 4,
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s",
      fullName: "Roger Lubin",
      dueDays: "2 Month Pending",
      maintenanceAmount: "5000"
    },
    {
      _id: 5,
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s",
      fullName: "Roger Lubin",
      dueDays: "2 Month Pending",
      maintenanceAmount: "5000"
    },
    {
      _id: 6,
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s",
      fullName: "Roger Lubin",
      dueDays: "2 Month Pending",
      maintenanceAmount: "5000"
    },
    {
      _id: 7,
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s",
      fullName: "Roger Lubin",
      dueDays: "2 Month Pending",
      maintenanceAmount: "5000"
    },
    {
      _id: 8,
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s",
      fullName: "Roger Lubin",
      dueDays: "2 Month Pending",
      maintenanceAmount: "5000"
    },
    {
      _id: 9,
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s",
      fullName: "Roger Lubin",
      dueDays: "2 Month Pending",
      maintenanceAmount: "5000"
    },
    {
      _id: 10,
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s",
      fullName: "Roger Lubin",
      dueDays: "2 Month Pending",
      maintenanceAmount: "5000"
    },
  ]

  return (
    <Card size='small' className={style.card}>

      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h3 className='fw-semibold'>Important Numbers</h3>
        <DSButton variant={"text"} size={"small"}>View all</DSButton>
      </div>

      <div className={style.pendingMaintenances}>

        {
          pendingMaintenancesData.map((item) => (
            <div className={style.users} key={item._id}>
              <Flex justify='space-between' align='center'>
                <div className='d-flex align-items-center gap-3'>
                  <img src={item.profileImage} alt="userImage" className={style.userImage} />
                  <div className={style.userDetails}>
                    <h6 className='fw-medium'>{item.fullName}</h6>
                    <p>{item.dueDays}</p>
                  </div>
                </div>
                <div>
                  <h5 className={style.maintenancesAmount}>{Icons.Rupee}{item.maintenanceAmount}</h5>
                </div>
              </Flex>
            </div>
          ))
        }

      </div>

    </Card>
  )
}

