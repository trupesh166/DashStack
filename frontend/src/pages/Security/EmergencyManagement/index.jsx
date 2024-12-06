import clsx from "clsx";
import { DSButton, DSInput, DSSelect } from "@/components";
import styles from "./EmergencyManagement.module.css";

export const EmergencyManagement = () => {
  return (
    <div className={styles.emergencyManagement}>
      <div className={styles.card}>
        <h2>Alert</h2>
        <form className={clsx(styles.FromWrapper, "d-flex flex-column")}>
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
              require
            />
            <DSInput
              type="textarea"
              label={"Description"}
              placeholder={"Enter Description"}
              require
            />
          </div>
          <DSButton type="submit" variant={"primary"} block>
            Send
          </DSButton>
        </form>
      </div>
    </div>
  );
};
