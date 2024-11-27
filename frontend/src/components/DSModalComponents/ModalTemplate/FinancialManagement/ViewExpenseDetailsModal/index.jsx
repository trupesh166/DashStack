import React from "react";
import styles from "./ViewExpenseDetailsModal.module.css";
import { DSModal } from "../../../..";
import { Col, Row } from "antd";
import Icons from "../../../../../constants/Icons";

export const ViewExpenseDetailsModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
  IsFooter,
}) => {
  return (
    <div className={styles.viewExpenseDetails}>
      <DSModal
        title="View Expense Details"
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter={IsFooter}
        handleContent="Apply"
        disabledButton={false}
      >
        <div>
          <Row className="mb-4">
            <Col span={24}>
              <h5 className={styles.silver}>Title</h5>
            </Col>
            <Col span={24}>
              <h5 className={styles.dark}>Rent Or Mortgage</h5>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col span={24}>
              <h5 className={styles.silver}>Description</h5>
            </Col>
            <Col span={24}>
              <h5 className={styles.dark}>
                A visual representation of your spending categories visual
                representation.{" "}
              </h5>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col span={12}>
              <Col span={24}>
                <h5 className={styles.silver}>Date</h5>
              </Col>
              <Col span={24}>
                <h5 className={styles.dark}>01/02/2024</h5>
              </Col>
            </Col>
            <Col span={12}>
              <Col span={24}>
                <h5 className={styles.silver}>Amount</h5>
              </Col>
              <Col span={24}>
                <h6 className={styles.dark}>{Icons.Rupee} 1500</h6>
              </Col>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col span={24}>
              <h5 className={styles.silver}>Bill</h5>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={2}>
                  <h2>{Icons.Jpg}</h2>
                </Col>
                <Col span={20}>
                  <Row>
                    <Col span={24}>
                      <h6 className={styles.dark}>Adharcard Front Side.JPG</h6>
                    </Col>
                    <Col span={24}>
                      <h6 className={styles.silver}>3.5 MB</h6>
                    </Col>
                  </Row>
                </Col>
                <Col span={2}>
                  <div className={styles.silver}>{Icons.EyeShow}</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </DSModal>
    </div>
  );
};
