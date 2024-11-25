import React, { useState } from "react";
import style from "./ComplaintCard.module.css";
import { Avatar, Flex } from "antd";
import clsx from "clsx";
import Icons from "@/constants/Icons";
import { DeleteModal, DSButton, DSCard, DSSelect, DSTable, EditComplaintModal, ViewComplaintModal } from "../..";

const tableColumn = [
  {
    title: <h6 className={style.h6}>Complainer Name</h6>,
    dataIndex: "complainerName",
    key: "complainerName",
    render: (_, { profileImage, complainerName }) => (
      <Flex align="center" gap={"small"}>
        <Avatar size={40} src={profileImage} alt="profileImage" />
        <div>
          <h5 className={style.h5}>{complainerName}</h5>
        </div>
      </Flex>
    ),
  },
  {
    title: <h6 className={style.h6}>Complaint Name</h6>,
    dataIndex: "complaintName",
    key: "complaintName",
    render: (complaintName) => (
      <h5 className={clsx(style.h5, "text-start")}>{complaintName}</h5>
    ),
  },
  {
    title: <h6 className={clsx(style.h6, "text-center")}>Date</h6>,
    dataIndex: "date",
    key: "date",
    render: (date) => <h5 className={style.h5}>{date}</h5>,
  },
  {
    title: <h6 className={clsx(style.h6, "text-center")}>Priority</h6>,
    dataIndex: "priorityStatus",
    key: "priorityStatus",
    render: (priorityStatus) => (
      <h5
        className={style.h5}
        style={{
          color: "#ffffff",
          backgroundColor:
            priorityStatus === "High"
              ? "#E74C3C"
              : priorityStatus === "Medium"
                ? "#5678E9"
                : priorityStatus === "Low"
                  ? "#39973D"
                  : "#FFFFFF",
          borderRadius: "20px",
          padding: "5px 15px",
        }}
      >
        {priorityStatus}
      </h5>
    ),
  },
  {
    title: <h6 className={clsx(style.h6, "text-center")}>Complain Status</h6>,
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <h5
        className={style.h5}
        style={{
          color:
            status === "Pending"
              ? "#FFC313"
              : status === "Open"
                ? "#5678E9"
                : status === "Solve"
                  ? "#39973D"
                  : "#FFFFFF",
          backgroundColor:
            status === "Pending"
              ? "#FFF9E7"
              : status === "Open"
                ? "#EEF1FD"
                : status === "Solve"
                  ? "#EBF5EC"
                  : "#FFFFFF",
          borderRadius: "20px",
          padding: "5px 15px",
        }}
      >
        {status}
      </h5>
    ),
  },
  {
    title: <h6 className="fw-semibold text-center">Action</h6>,
    key: "Action",
    render: (_, { record }) => (
      <Flex justify="space-evenly" align="center">
        <DSButton size={"small"}>{Icons.Edit}</DSButton>
        <DSButton size={"small"}>{Icons.EyeShow}</DSButton>
        <DSButton size={"small"}>{Icons.Trash}</DSButton>
      </Flex>
    ),
  },
];

const dataSource = [
  {
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
    complainerName: "Evelyn Harper",
    complaintName: "Unethical Behavior",
    date: "01/02/2024",
    priorityStatus: "Medium",
    status: "Open",
  },
  {
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
    complainerName: "Evelyn Harper",
    complaintName: "Unethical Behavior",
    date: "01/02/2024",
    priorityStatus: "Low",
    status: "Pending",
  },
  {
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
    complainerName: "Evelyn Harper",
    complaintName: "Unethical Behavior",
    date: "01/02/2024",
    priorityStatus: "High",
    status: "Solve",
  },
  {
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
    complainerName: "Evelyn Harper",
    complaintName: "Unethical Behavior",
    date: "01/02/2024",
    priorityStatus: "Medium",
    status: "Open",
  },
  {
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
    complainerName: "Evelyn Harper",
    complaintName: "Unethical Behavior",
    date: "01/02/2024",
    priorityStatus: "Low",
    status: "Pending",
  },
  {
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
    complainerName: "Evelyn Harper",
    complaintName: "Unethical Behavior",
    date: "01/02/2024",
    priorityStatus: "High",
    status: "Solve",
  },
];

export const ComplaintCard = () => {
  const [editComplaint, setEditComplaint] = useState(false);
  const [viewComplaint, setViewComplaint] = useState(false);
  const [deleteComplaint, setDeleteComplaint] = useState(false);

  return (
    <DSCard
      size="small"
      rootClass={style.card}
      className={clsx(style.cardBody, "d-flex flex-column")}
      title={"Complaint List"}
      headerContent={
        <DSSelect
          className="w-100"
          defaultValue="Month"
          options={[
            { label: "Month", value: "Month" },
            { label: "Year", value: "Year" },
          ]}
        >
          View all
        </DSSelect>
      }
    >
      <div className={style.body}>
        <DSTable tableColumn={tableColumn} tableDataSource={dataSource} />
      </div>

      {/* Edit Complaint Modal */}
      <EditComplaintModal
        open={editComplaint}
        handleCancel={() => setEditComplaint(false)}
        handleClose={() => setEditComplaint(false)}
        handleOk={() => setEditComplaint(false)}
      />

      {/* View Complaint Modal */}
      <ViewComplaintModal
        open={viewComplaint}
        handleCancel={() => setViewComplaint(false)}
        handleClose={() => setViewComplaint(false)}
        handleOk={() => setViewComplaint(false)}
      />

      {/* Delete Complaint Modal */}
      <DeleteModal
        title={"Delete Complaint?"}
        isModalOpen={deleteComplaint}
        handleClose={() => setDeleteComplaint(false)}
        handleOk={() => setDeleteComplaint(false)}
        onCancel={() => setDeleteComplaint(false)}
      >
        Are you sure you want to delete this complaint?
      </DeleteModal>
    </DSCard>
  );
};
