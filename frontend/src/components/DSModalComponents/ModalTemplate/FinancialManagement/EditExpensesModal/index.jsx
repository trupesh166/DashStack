import React, { useRef, useState, useEffect } from 'react';
import style from "./EditExpensesModal.module.css";
import { DSDatePicker, DSInput, DSModal } from '../../../..';
import Icons from '../../../../../constants/Icons';
import dayjs from "dayjs";

export const EditExpensesModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
  expense,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: null,
    amount: '',
    bill: null,
  });

  useEffect(() => {
    if (expense) {
      setFormData({
        title: expense.title,
        description: expense.description,
        date: expense.date,
        amount: expense.amount,
        bill: expense.bill,
      });
    }
  }, [expense]);

  const fileInputRef = useRef(null);

  const handleDelete = () => {
    setFormData((prev) => ({ ...prev, bill: null }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        bill: {
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(2),
        },
      }));
    }
  };

  return (
    <div className={style.editExpensesDetails}>
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
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div className="mb-4">
            <DSInput
              label={"Description"}
              placeholder="Enter Description"
              require={true}
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <DSDatePicker
              block
              label={"Date"}
              placeholder={"Select Date"}
              style={{ height: "45px", borderRadius: "10px", padding: "0px 10px" }}
              value={formData.date ? dayjs(formData.date) : null}
              onChange={(date) =>
                setFormData((prev) => ({ ...prev, date }))
              }
            />
            <DSInput
              block
              label={"Amount"}
              placeholder={"0000"}
              prefix={Icons.Rupee}
              value={formData.amount}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, amount: e.target.value }))
              }
            />
          </div>
          <div className="mb-4">
            <label>Upload Bill</label>
            <input
              ref={fileInputRef}
              className="d-none"
              type="file"
              onChange={handleFileChange}
            />
            {formData.bill && (
              <div className={style.uploadImage}>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 style={{ color: "var(--clr-dark)" }}>
                    {formData.bill.name}
                  </h6>
                  <span onClick={handleDelete} style={{ color: "var(--clr-silver)" }}>
                    {Icons.Trash}
                  </span>
                </div>
                <h6 style={{ color: "var(--clr-silver)" }}>
                  {formData.bill.size} MB
                </h6>
                <h6 style={{ color: "var(--clr-success)" }}>File Uploaded Successfully</h6>
              </div>
            )}
          </div>
        </div>
      </DSModal>
    </div>
  );
};
