import { Icons } from "@constants";
import clsx from "clsx";
import styles from "./DSLoader.module.css";

export const DSLoader = ({ className }) => {
  return (
    <>
      <div className={clsx(styles.loaderWrapper, className)}>
        <div className={styles.loaderIcon}>{Icons.HourglassDuotone}</div>
      </div>
    </>
  );
};
