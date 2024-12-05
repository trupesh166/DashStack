import { useState } from "react";
import { Avatar, Flex, Space, Tag } from "antd";
import clsx from "clsx";
import Icons from "@/constants/Icons";
import {
  DeleteModal,
  DSButton,
  DSCard,
  DSSelect,
  DSTable,
  EditComplaintModal,
  ViewComplaintModal,
} from "@/components/";
import styles from "./ComplaintCard.module.css";

const tableColumn = [
  {
    title: <h6 className={styles.h6}>Complainer Name</h6>,
    dataIndex: "complainerName",
    key: "complainerName",
    render: (_, { profileImage, complainerName }) => (
      <Flex align="center" gap={"small"}>
        <Avatar size={40} src={profileImage} alt="profileImage" />
        <div>
          <h5 className={styles.h5}>{complainerName}</h5>
        </div>
      </Flex>
    ),
  },
  {
    title: <h6 className={styles.h6}>Complaint Name</h6>,
    dataIndex: "complaintName",
    key: "complaintName",
    render: (complaintName) => (
      <h5 className={clsx(styles.h5, "text-start")}>{complaintName}</h5>
    ),
  },
  {
    title: <h6 className={clsx(styles.h6, "text-center")}>Date</h6>,
    dataIndex: "date",
    key: "date",
    render: (date) => <h5 className={styles.h5}>{date}</h5>,
  },
  {
    title: <h6 className={clsx(styles.h6, "text-center")}>Priority</h6>,
    dataIndex: "priorityStatus",
    key: "priorityStatus",
    render: (priorityStatus) => (
      <Tag
        className={styles.button}
        color={priorityStatus === "Medium" ? "var(--clr-cult)" : priorityStatus === "Low" ? "var(--clr-success)" : "var(--clr-danger)"}
        bordered={false}
      >
        {priorityStatus}
      </Tag>
    ),
  },
  {
    title: <h6 className={clsx(styles.h6, "text-center")}>Complain Status</h6>,
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag
        className={styles.button}
        color={status === "Open" ? "blue" : status === "Pending" ? "warning" : "success"}
        bordered={false}
      >
        {status}
      </Tag>
    ),
    align: "center",
  },
  {
    title: <h6 className="fw-semibold text-center">Action</h6>,
    key: "Action",
    render: (_, { record }) => (
      <Space size="small">

        <DSButton
          type="primary"
          size="small"
          icon={Icons.Edit}
          className="edit-btn"
        />
        <DSButton
          type="primary"
          size="small"
          icon={Icons.EyeShow}
          className="view-btn"
        />
        <DSButton
          type="primary"
          size="small"
          icon={Icons.Trash}
          className="delete-btn"
        />
      </Space>
    ),
    align: "center",
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

export const ComplaintCard = ({ className }) => {
  const [editComplaint, setEditComplaint] = useState(false);
  const [viewComplaint, setViewComplaint] = useState(false);
  const [deleteComplaint, setDeleteComplaint] = useState(false);

  return (
    <DSCard
      size="small"
      rootClass={clsx(styles.card, className)}
      className={clsx(styles.cardBody, "d-flex flex-column")}
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
      <div className={styles.body}>
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
