import React from "react";
import style from "./UpcomingActivityCard.module.css";
import clsx from "clsx";
import { DSCard, DSSelect } from "../..";
import { Flex } from "antd";

export const UpcomingActivityCard = () => {
  const UpcomingActivityData = [
    {
      _id: 1,
      title: "Society Meeting",
      dueDays: "8:00 PM To 10:00 PM",
      date: "24-09-2024",
    },
    {
      _id: 2,
      title: "Holi Festival",
      dueDays: "8:00 PM To 10:00 PM",
      date: "24-09-2024",
    },
    {
      _id: 3,
      title: "Ganesh Chaturthi",
      dueDays: "8:00 PM To 10:00 PM",
      date: "24-09-2024",
    },
    {
      _id: 4,
      title: "Navratri Festival",
      dueDays: "8:00 PM To 10:00 PM",
      date: "24-09-2024",
    },
    {
      _id: 5,
      title: "Society Meeting",
      dueDays: "8:00 PM To 10:00 PM",
      date: "24-09-2024",
    },
    {
      _id: 6,
      title: "Holi Festival",
      dueDays: "8:00 PM To 10:00 PM",
      date: "24-09-2024",
    },
    {
      _id: 7,
      title: "Ganesh Chaturthi",
      dueDays: "8:00 PM To 10:00 PM",
      date: "24-09-2024",
    },
    {
      _id: 8,
      title: "Navratri Festival",
      dueDays: "8:00 PM To 10:00 PM",
      date: "24-09-2024",
    },
  ];

  const activityProfileColor = [
    {
      text_color: "#EC9542",
      background_color: "#FCEFE3",
    },
    {
      text_color: "#39973D",
      background_color: "#E1EFE2",
    },
    {
      text_color: "#5678E9",
      background_color: "#E6EBFC",
    },
    {
      text_color: "#E74C3C",
      background_color: "#FBE4E2",
    },
    {
      text_color: "#FFC313",
      background_color: "#FFF6DC",
    },
  ];

  return (
    <DSCard
      size="small"
      rootClass={style.card}
      className={clsx(style.cardBody, "d-flex flex-column")}
      title="Upcoming Activity"
      headerContent={
        <div className="w-100">
          <DSSelect
            className="w-100"
            defaultValue="Month"
            options={[
              { label: "Month", value: "Month" },
              { label: "Year", value: "Year" },
            ]}
          />
        </div>
      }
    >
      <div className={style.body}>
        {UpcomingActivityData.map((item, index) => {
          const color = activityProfileColor[index % activityProfileColor.length];

          return (
            <div className={style.activity} key={item._id}>
              <Flex justify="space-between" align="center">
                <div className="d-flex align-items-center gap-3">
                  <h4
                    className={style.activityProfile}
                    style={{
                      color: color.text_color,
                      backgroundColor: color.background_color,
                    }}
                  >
                    {item.title.charAt(0)}
                  </h4>

                  <div className={style.userDetails}>
                    <h6 className={style.meetingName}>{item.title}</h6>
                    <h6 className={style.meetingTime}>{item.dueDays}</h6>
                  </div>
                </div>
                <div>
                  <h6 className={style.activityDate}>{item.date}</h6>
                </div>
              </Flex>
            </div>
          );
        })}
      </div>
    </DSCard>
  );
};

export default UpcomingActivityCard;
