import clsx from "clsx";
import { DSInput } from "@/Components";
import styles from "./SelectSocietyModal.module.css";

export const SelectSocietyModal = () => {
  return (
    <form>
      <div className={clsx(styles.InputWrapper, "d-grid flex-column")}>
        <DSInput
          parentClassName={styles.colSpan}
          label={"Society Name"}
          placeholder={"Enter Society"}
          require
        />
        <DSInput
          parentClassName={styles.colSpan}
          label={"Society Address"}
          placeholder={"Enter Address"}
          require
        />
        <DSInput label={"Country"} placeholder={"Enter Name"} require />
        <DSInput label={"State"} placeholder={"Enter Name"} require />
        <DSInput label={"City"} placeholder={"Enter Name"} require />
        <DSInput label={"Zip Code"} placeholder={"Enter Zip Code"} require />
      </div>
    </form>
  );
};
