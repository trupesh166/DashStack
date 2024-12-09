import React from "react";
import clsx from "clsx";
import { DSButton, DSInput, DSSelect } from "@/components";
import { useEmergencyManagement } from "@/hook/Security/EmergencyAlert";
import styles from "./EmergencyManagement.module.css";

export const EmergencyManagement = () => {
  const { formData, handleChange, handleSubmit, isDisabled, isSubmitting } =
    useEmergencyManagement();

  return (
    <div className={styles.emergencyManagement}>
      <div className={styles.card}>
        <h2>Alert</h2>
        <form
          onSubmit={handleSubmit}
          className={clsx(styles.FromWrapper, "d-flex flex-column")}
        >
          <div className={clsx(styles.InputWrapper, "d-flex flex-column")}>
            <DSSelect
              className={styles.selectInput}
              label={"Alert Type"}
              placeholder={"Select Alert"}
              options={[
                { label: "Emergency", value: "Emergency" },
                { label: "Warning", value: "Warning" },
                { label: "Fire Alarm", value: "Fire Alarm" },
                { label: "Earth Quack", value: "Earth Quack" },
                { label: "High Winds", value: "High Winds" },
                { label: "Thunder", value: "Thunder" },
              ]}
              value={formData.alertType}
              onChange={(value) => handleChange("alertType", value)}
              require
            />
            <DSInput
              type="textarea"
              label={"Description"}
              placeholder={"Enter Description"}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              require
            />
          </div>
          <DSButton
            type="submit"
            variant={"primary"}
            block
            disabled={isDisabled}
            loading={isSubmitting}
          >
            Send
          </DSButton>
        </form>
      </div>
    </div>
  );
};
