import { Avatar, Flex } from "antd";
import clsx from "clsx";
import Icons from "@/constants/Icons";
import { pendingMaintenancesData } from "@/constants";
import { DSButton, DSCard } from "@/components/";
import styles from "./PendingMaintenancesCard.module.css";

export const PendingMaintenancesCard = () => {
  return (
    <DSCard
      rootClass={styles.card}
      className="d-flex flex-column"
      title="Pending Maintenances"
    >
      <div className={clsx(styles.pendingMaintenances, "d-flex flex-column")}>
        {pendingMaintenancesData?.map((item) => (
          <div className={styles.users} key={item._id}>
            <Flex justify="space-between" align="center">
              <div className="d-flex align-items-center gap-3">
                <Avatar
                  size={40}
                  src={item.profileImage}
                  alt="userImage"
                  className={styles.userImage}
                />
                <div className={styles.userDetails}>
                  <h6 className="fw-medium">{item.fullName}</h6>
                  <p>{item.dueDays}</p>
                </div>
              </div>
              <h5 className={styles.maintenancesAmount}>
                {Icons.Rupee}
                {item.maintenanceAmount}
              </h5>
            </Flex>
          </div>
        ))}
      </div>
    </DSCard>
  );
};
