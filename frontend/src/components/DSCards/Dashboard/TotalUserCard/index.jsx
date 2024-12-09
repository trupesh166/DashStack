import React from "react";
import clsx from "clsx";
import Icons from "@/constants/Icons";
import { DSCard } from "@/components/";
import styles from "./TotalUserCard.module.css";

export const TotalUserCard = ({
  title,
  amount,
  icon,
  cardIconBackground,
  cardIconColor,
  designBoxColor,
}) => {
  return (
    <div className="position-relative">
      <DSCard
        className={styles.body}
        rootClass={clsx(styles.card, "d-flex flex-column position-relative")}
      >
        <div
          className={styles.designBox}
          style={{
            background: designBoxColor,
          }}
        ></div>
        <div
          className={clsx(
            styles.designBoxContent,
            "d-flex justify-content-between align-items-center"
          )}
        >
          <div className={styles.detail}>
            <h6 className="fw-semibold">{title}</h6>
            <h3 className="fw-bold">
              {Icons.Rupee}
              {amount}
            </h3>
          </div>
          <div
            className={clsx(
              styles.cardIcon,
              "d-flex justify-content-center align-items-center"
            )}
            style={{
              backgroundColor: cardIconBackground,
              color: cardIconColor,
            }}
          >
            {icon}
          </div>
        </div>
      </DSCard>
    </div>
  );
};

export default TotalUserCard;
