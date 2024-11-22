import { Spin } from "antd";
import styles from "./HQBasicLoader.module.css";
import clsx from "clsx";
export const HQBasicLoader = ({ size, HQLoaderClassName, ...rest }) => {
  return (
    <Spin
      size={size}
      className={clsx(styles.HQBasicLoader, HQLoaderClassName)}
      {...rest}
    />
  );
};
