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
  expense,
  IsFooter,
}) => {
  if (!expense) return null;

  return (
    <div className={styles.viewExpenseDetails}>
      <DSModal
        title="View Expense Details"
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter={false}
        handleContent="Apply"
        disabledButton={false}
      >
        <div>
          <Row className="mb-4">
            <Col span={24}>
              <h5 className={style.silver}>Title</h5>
            </Col>
            <Col span={24}>
              <h5 className={style.dark}>{expense.title}</h5>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col span={24}>
              <h5 className={style.silver}>Description</h5>
            </Col>
            <Col span={24}>
              <h5 className={style.dark}>{expense.description} </h5>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col span={12}>
              <Col span={24}>
                <h5 className={style.silver}>Date</h5>
              </Col>
              <Col span={24}>
                <h5 className={style.dark}>{expense.date}</h5>
              </Col>
            </Col>
            <Col span={12}>
              <Col span={24}>
                <h5 className={style.silver}>Amount</h5>
              </Col>
              <Col span={24}>
                <h6 className={style.dark}>
                  {Icons.Rupee} {expense.amount}
                </h6>
              </Col>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col span={24}>
              <h5 className={styles.silver}>Bill</h5>
            </Col>
            <Col span={24}>
              {expense.bill ? (
                <Row>
                  <Col span={2}>
                    <h2>{Icons.Jpg}</h2>
                  </Col>
                  <Col span={20}>
                    <Row>
                      <Col span={24}>
                        <h6 className={style.dark}>{expense.bill.name}</h6>
                      </Col>
                      <Col span={24}>
                        <h6 className={style.silver}>{expense.bill.size} MB</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={2}>
                    <div className={style.silver}>{Icons.EyeShow}</div>
                  </Col>
                </Row>
              ) : (
                <h6 className={style.silver}>No bill uploaded</h6>
              )}
            </Col>
          </Row>
        </div>
      </DSModal>
    </div>
  );
};
