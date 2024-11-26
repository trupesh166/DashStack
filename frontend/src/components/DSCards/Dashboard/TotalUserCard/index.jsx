import React from "react";
import clsx from "clsx";
import Icons from "@/constants/Icons";
import { DSCard } from "@/components/";
import style from "./TotalUserCard.module.css";

export const TotalUserCard = ({
  title,
  amount,
  icon,
  cardIconBackground,
  cardIconColor,
  designBoxColor,
}) => {
  return (
    <DSCard
      className={style.body}
      rootClass={clsx(style.card, "d-flex flex-column position-relative")}
    >
      <div
        className={style.designBox}
        style={{
          background: designBoxColor,
        }}
      ></div>
      <div className="d-flex justify-content-between align-items-center">
        <div className={style.detail}>
          <h6 className="fw-semibold">{title}</h6>
          <h3 className="fw-bold">
            {Icons.Rupee}
            {amount}
          </h3>
        </div>
        <div
          className={clsx(
            style.cardIcon,
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
  );
};

export default TotalUserCard;
