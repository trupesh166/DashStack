import React, { useRef } from "react";
import styles from "./EditExpensesModal.module.css";
import { DSDatePicker, DSInput, DSModal } from "../../../..";
import TextArea from "antd/es/input/TextArea";
import Icons from "../../../../../constants/Icons";

export const EditExpensesModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
}) => {
  const fileInputRef = useRef(null);

  const handleDelete = () => {};

  return (
    <div className={styles.editExpensesDetails}>
      <DSModal
        title="Edit Expenses Details"
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent="Save"
        disabledButton={false}
      >
        <div>
          <div className="mb-4">
            <DSInput
              label={"Title"}
              placeholder={"Enter Title"}
              require={true}
            />
          </div>
          <div className="mb-4">
            <DSInput
              label={"Description"}
              placeholder="Enter Description"
              require={true}
            />
          </div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <DSDatePicker
              block
              label={"Date"}
              placeholder={"Select Date"}
              style={{
                height: "45px",
                borderRadius: "10px",
                padding: "0px 10px",
              }}
            />
            <DSInput
              block
              label={"Amount"}
              placeholder={"0000"}
              prefix={Icons.Rupee}
            />
          </div>
          <div className="mb-4">
            <label>Upload Bill</label>
            <input ref={fileInputRef} className="d-none" type="file" />
            <div className={styles.uploadImage}>
              <div className="d-flex justify-content-between align-items-center">
                <h6 style={{ color: "var(--clr-dark)" }}>
                  Syncfusion Essential Rentagreement.GIF
                </h6>
                <span
                  onClick={handleDelete}
                  style={{ color: "var(--clr-silver)" }}
                >
                  {Icons.Trash}
                </span>
              </div>
              <h6 style={{ color: "var(--clr-silver)" }}>3.5 MB</h6>
              <h6 style={{ color: "var(--clr-success)" }}>
                File Uploaded Successfully
              </h6>
            </div>
          </div>
        </div>
      </DSModal>
    </div>
  );
};

              {expense.bill ? (
                <Row>
                  <Col span={2}><h2>{Icons.Jpg}</h2></Col>
                  <Col span={20}>
                    <Row>
                      <Col span={24}><h6 className={style.dark}>{expense.bill.name}</h6></Col>
                      <Col span={24}><h6 className={style.silver}>{expense.bill.size} MB</h6></Col>
                    </Row>
                  </Col>
                  <Col span={2}><div className={style.silver}>{Icons.EyeShow}</div></Col>
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
