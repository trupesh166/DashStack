import React from "react";
import { DSModal } from "../../../..";
import { Col, Row } from "antd";
import Icons from "@/constants/Icons";
import style from "./ViewExpenseDetailsModal.module.css";

export const ViewExpenseDetailsModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
  IsFooter,
  title,
  Description,
  Date,
  Amount,
}) => {
  return (
    <div className={style.viewExpenseDetails}>
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
              <h5 className={style.silver}>Title</h5>
            </Col>
            <Col span={24}>
              <h5 className={style.dark}>{title}</h5>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col span={24}>
              <h5 className={style.silver}>Description</h5>
            </Col>
            <Col span={24}>
              <h5 className={style.dark}>{Description}</h5>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col span={12}>
              <Col span={24}>
                <h5 className={style.silver}>Date</h5>
              </Col>
              <Col span={24}>
                <h5 className={style.dark}>{Date}</h5>
              </Col>
            </Col>
            <Col span={12}>
              <Col span={24}>
                <h5 className={style.silver}>Amount</h5>
              </Col>
              <Col span={24}>
                <h6 className={style.dark}>
                  {Icons.Rupee} {Amount}
                </h6>
              </Col>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col span={24}>
              <h5 className={style.silver}>Bill</h5>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={2}>
                  <h2>{Icons.Jpg}</h2>
                </Col>
                <Col span={20}>
                  <Row>
                    <Col span={24}>
                      <h6 className={style.dark}>Adharcard Front Side.JPG</h6>
                    </Col>
                    <Col span={24}>
                      <h6 className={style.silver}>3.5 MB</h6>
                    </Col>
                  </Row>
                </Col>
                <Col span={2}>
                  <div className={style.silver}>{Icons.EyeShow}</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </DSModal>
    </div>
  );
};
