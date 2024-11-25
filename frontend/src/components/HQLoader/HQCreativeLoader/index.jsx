import clsx from "clsx";
import styles from "./HQCreativeLoader.module.css";

export const HQCreativeLoader = ({ size }) => {
  return (
    <div
      className={clsx(styles.HQCreativeLoader, {
        [styles.smallLoader]: size === "small",
        [styles.largeLoader]: size === "large",
      })}
    ></div>
  );
};
