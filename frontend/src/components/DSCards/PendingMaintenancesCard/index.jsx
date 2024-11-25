import React from "react";
import style from "./PendingMaintenancesCard.module.css";
import { Avatar, Flex } from "antd";
import { DSButton, DSCard } from "../..";
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
    <DSCard
      size="small"
      rootClass={style.card}
      className="d-flex flex-column"
      title="Pending Maintenances"
      headerContent={
        <DSButton variant="text" size="small">
          View all
        </DSButton>
      }
    >
      <div className={style.pendingMaintenances}>
        {pendingMaintenancesData.map((item) => (
          <div className={style.users} key={item._id}>
            <Flex justify="space-between" align="center">
              <div className="d-flex align-items-center gap-3">
                <Avatar
                  size={40}
                  src={item.profileImage}
                  alt="userImage"
                  className={style.userImage}
                />
                <div className={style.userDetails}>
                  <h6 className="fw-medium" style={{ color: "var(--clr-dark)" }}>
                    {item.fullName}
                  </h6>
                  <p>{item.dueDays}</p>
                </div>
              </div>
              <div>
                <h5 className={style.maintenancesAmount}>
                  {Icons.Rupee}
                  {item.maintenanceAmount}
                </h5>
              </div>
            </Flex>
          </div>
        ))}
      </div>
    </DSCard>
  );
};
