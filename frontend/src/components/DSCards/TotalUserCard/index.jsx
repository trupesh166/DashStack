import React from "react";
import clsx from "clsx";
import Icons from "@/constants/Icons";
import style from "./TotalUserCard.module.css";
import { Flex } from "antd";
import { DSCard } from "../..";

export const TotalUserCard = () => {
  const data = [
    {
      title: "Total Balance",
      amount: "2,22,520",
      icon: Icons.Document,
    },
    {
      title: "Total Income",
      amount: "55,000",
      icon: Icons.MoneyRecive,
    },
    {
      title: "Total Expense",
      amount: "20,550",
      icon: Icons.MoneySend,
    },
    {
      title: "Total Unit",
      amount: "20,550",
      icon: Icons.Buildings,
    },
  ];

  const IconColor = [
    {
      color: "#FF6A00",
      background: "#FFF0E5",
      designBoxColor: "#FFB480",
    },
    {
      color: "#39973D",
      background: "#EBF5EC",
      designBoxColor: "#9CCB9E",
    },
    {
      color: "#869FF3",
      background: "#F3F5FE",
      designBoxColor: "#C3CFF9",
    },
    {
      color: "#EB37C3",
      background: "#FDEBF9",
      designBoxColor: "#F59EB1",
    },
  ];

  return (
    <Flex gap="middle">
      {data.map((item, index) => (
        <DSCard
          key={index}
          rootClass={clsx(style.card, "d-flex flex-column")}
        >
          <div
            className={style.designBox}
            style={{
              backgroundColor: IconColor[index].designBoxColor,
            }}
          ></div>
          <div className={style.body}>
            <div className={style.detail}>
              <h6 className={style.h6}>{item.title}</h6>
              <h3>
                {Icons.Rupee}
                {item.amount}
              </h3>
            </div>
            <div
              className={style.cardIcon}
              style={{
                backgroundColor: IconColor[index].background,
                color: IconColor[index].color,
              }}
            >
              {item.icon}
            </div>
          </div>
        </DSCard>
      ))}
    </Flex>
  );
};

export default TotalUserCard;