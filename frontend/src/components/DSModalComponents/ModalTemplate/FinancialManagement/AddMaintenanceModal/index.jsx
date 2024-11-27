import React, { useState } from "react";
import styles from "./AddMaintenanceModal.module.css";
import Icons from "../../../../../constants/Icons";
import { DSDatePicker, DSInput, DSModal, DSSelect } from "../../../..";

export const AddMaintenanceModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
}) => {
  const [addMaintenance, setAddMaintenance] = useState({
    maintenanceAmount: "",
    penaltyAmount: "",
    dueDate: null,
    penaltyDays: "",
  });

  const isFormValid =
    addMaintenance.maintenanceAmount &&
    addMaintenance.penaltyAmount &&
    addMaintenance.dueDate &&
    addMaintenance.penaltyDays;

  const handleChange = (field, value) => {
    setAddMaintenance((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <div className={styles.addMaintenance}>
      <DSModal
        title="Add Maintenance Detail"
        open={open}
        closeIcon
        handleOk={handleOk}
        onCancel={handleCancel}
        handleClose={handleClose}
        IsFooter
        handleContent="Apply"
        disabledButton={!isFormValid}
      >
        <div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <DSInput
              block
              label={"Maintenance Amount"}
              placeholder={"0000"}
              prefix={Icons.Rupee}
              value={addMaintenance.maintenanceAmount}
              onChange={(e) =>
                handleChange("maintenanceAmount", e.target.value)
              }
            />
            <DSInput
              block
              label={"Penalty Amount"}
              placeholder={"0000"}
              prefix={Icons.Rupee}
              value={addMaintenance.penaltyAmount}
              onChange={(e) => handleChange("penaltyAmount", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <DSDatePicker
              block
              type="Date"
              label={"Maintenance Due Date"}
              placeholder={"Select Due Date"}
              style={{
                width: "100%",
                height: "45px",
                borderRadius: "10px",
                padding: "0px 10px",
              }}
              value={addMaintenance.dueDate}
              onChange={(date) => handleChange("dueDate", date)}
            />
          </div>
          <div className="mb-4">
            <DSSelect
              label={"Penalty Applied After Day Selection"}
              placeholder={"Select Penalty Applied After Day Selection"}
              style={{
                width: "100%",
                height: "45px",
                borderRadius: "10px",
              }}
              value={addMaintenance.penaltyDays}
              onChange={(value) => handleChange("penaltyDays", value)}
              options={[
                { label: "1 Day", value: "1 Day" },
                { label: "2 Day", value: "2 Day" },
                { label: "3 Day", value: "3 Day" },
                { label: "4 Day", value: "4 Day" },
                { label: "5 Day", value: "5 Day" },
              ]}
            />
          </div>
        </div>
      </DSModal>
    </div>
  );
};
