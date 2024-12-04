import React from "react";
import styles from "./ViewSecurityProtocolModal.module.css";
import { DSModal } from "../../../..";
import { Col, Row } from "antd";

export const ViewSecurityProtocolModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
  protocol
}) => {
  console.log(protocol)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(), // Formats to 'MM/DD/YYYY'
      time: date.toLocaleTimeString(), // Formats to 'HH:MM:SS AM/PM'
    };
  };
  return (
    <div className={styles.viewSecurityProtocolModal}>
      <DSModal
        title={"View Security Protocol"}
        open={open}
        closeIcon
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleClose={handleClose}
        IsFooter={false}
      >
        <Row className="mb-4">
          <Col span={24}>
            <h5 className={styles.silver}>Title</h5>
          </Col>
          <Col>
            <h5 className={styles.dark}>{protocol?.title}</h5>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col span={24}>
            <h5 className={styles.silver}>Description</h5>
          </Col>
          <Col span={24}>
            <h5 className={styles.dark}>{protocol?.discription}</h5>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col span={12}>
            <h5 className={styles.silver}>Date</h5>
            <h5 className={styles.dark}>{formatDate(protocol?.createdAt).date}</h5>
          </Col>
          <Col span={12}>
            <h5 className={styles.silver}>Time</h5>
            <h5 className={styles.dark}>{formatDate(protocol?.createdAt).time}</h5>
          </Col>
        </Row>
      </DSModal>
    </div>
  );
};
