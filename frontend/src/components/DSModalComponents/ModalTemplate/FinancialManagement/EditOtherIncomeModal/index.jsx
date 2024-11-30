import React, { useEffect, useState } from "react";
import styles from "./EditOtherIncomeModal.module.css";
import { DSDatePicker, DSInput, DSModal } from "../../../..";
import Icons from "../../../../../constants/Icons";
import dayjs from "dayjs";

export const EditOtherIncomeModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
  record,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: null,
    dueDate: null,
    description: "",
  });

  useEffect(() => {
    if (record) {
      setFormData({
        ...record,
        date: record.date ? new Date(record.date) : null,
        dueDate: record.dueDate ? new Date(record.dueDate) : null,
      });
    }
  }, [record]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <DSModal
        title={`Edit ${formData.title || ""}`}
        open={open}
        closeIcon
        handleOk={() =>
          handleOk({
            ...formData,
            date: formData.date ? formData.date.toISOString() : null,
            dueDate: formData.dueDate ? formData.dueDate.toISOString() : null,
          })
        }
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent="Save"
        disabledButton={false}
      >
        <div>
          <div className="mb-4">
            <DSInput
              block
              label={"Amount"}
              placeholder={"0000"}
              prefix={Icons.Rupee}
              require={true}
              value={formData.amount}
              onChange={(e) => handleInputChange("amount", e.target.value)}
            />
          </div>

          <div className="d-flex align-items-center justify-content-between gap-4 mb-4">
            <DSDatePicker
              block
              type="date"
              label={"Date"}
              placeholder={"Select Date"}
              value={formData.date ? dayjs(formData.date) : null}
              onChange={(value) =>
                handleInputChange("date", value ? new Date(value) : null)
              }
              style={{
                width: "100%",
                height: "45px",
                borderRadius: "10px",
                padding: "0px 10px",
              }}
            />

            <DSDatePicker
              block
              type="date"
              label={"Due Date"}
              placeholder={"Select Due Date"}
              value={formData.dueDate ? dayjs(formData.dueDate) : null}
              onChange={(value) =>
                handleInputChange("dueDate", value ? new Date(value) : null)
              }
              style={{
                width: "100%",
                height: "45px",
                borderRadius: "10px",
                padding: "0px 10px",
              }}
            />
          </div>

          <div className="mb-4">
            <DSInput
              label={"Description"}
              placeholder={"Enter Description"}
              require={true}
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>
        </div>
      </DSModal>
    </div>
  );
};
