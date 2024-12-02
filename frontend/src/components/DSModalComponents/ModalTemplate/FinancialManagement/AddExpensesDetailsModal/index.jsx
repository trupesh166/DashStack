import React, { useRef, useState } from "react";
import styles from "./AddExpensesDetailsModal.module.css";
import Icons from "../../../../../constants/Icons";
import { DSDatePicker, DSInput, DSModal } from "../../../..";

export const AddExpensesDetailsModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
  addExpensesDetails,
  setAddExpensesDetails,
}) => {
  const billRef = useRef(null);

  const {
    title,
    description,
    date,
    amount,
    bill,
  } = addExpensesDetails;

  const {
    setTitle,
    setDescription,
    setDate,
    setAmount,
    handleFileChange,
    handleFileRemove,
  } = setAddExpensesDetails;

  // const handleFileRemove = () => {
  //   setAddExpensesDetails((prevState) => ({
  //     ...prevState,
  //     bill: null,
  //   }));
  // };

  const isFormValid = title && description && date && amount && bill;

  return (
    <div className={styles.addExpensesDetails}>
      <DSModal
        title="Add Expenses Details"
        open={open}
        closeIcon
        handleOk={() => handleOk(addExpensesDetails)}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent="Apply"
        disabledButton={!isFormValid}
      >
        <div>
          <div className="mb-4">
            <DSInput
              label={"Title"}
              placeholder={"Enter Title"}
              require={true}
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <DSInput
              type="TextArea"
              label={"Description"}
              placeholder="Enter Description"
              require={true}
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
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
              value={date} 
              onChange={(date) => setDate(date)} 
            />
            <DSInput
              block
              label={"Amount"}
              placeholder={"0000"}
              prefix={Icons.Rupee}
              require={true}
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
            />
          </div>

          <div className="mb-4">
            <h6>Upload Bill</h6>
            <div
              className={styles.document}
              onClick={() => billRef.current?.click()}
            >
              <div>
                <input
                  type="file"
                  className="d-none"
                  ref={billRef}
                  onChange={handleFileChange} 
                />
                <h4>{Icons.AddImage}</h4>
              </div>
              <h6 className={styles.h6}>
                Upload a file{" "}
                <span className={styles.span}>or drag and drop</span>
              </h6>
              <p className={styles.p}>PNG, JPG, GIF up to 10MB</p>
            </div>
            {bill && (
              <div className={styles.uploadDocument}>
                <div className="d-flex gap-3 align-items-center">
                  <h2>{Icons.Jpg}</h2>
                  <div>
                    <h6>{bill.name}</h6>
                    <h6 className={styles.p}>
                      {(bill.size / (1024 * 1024)).toFixed(2)} MB
                    </h6>
                  </div>
                </div>
                <h2 onClick={handleFileRemove} className={styles.trashIcon}>
                  {Icons.Trash}
                </h2>
              </div>
            )}
          </div>
        </div>
      </DSModal>
    </div>
  );
};
